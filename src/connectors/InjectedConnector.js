import React from "react";
import { ethers } from "ethers";
import utils from "../utils.js";

export const useInjectedConnector = ({ chains, chainId, provider, setUserAddress, setChainId, setProvider }) => {
  const connect = async ({ invasive = false } = {}) => {
    console.log("connectInjected");
    const web3Provider = new ethers.BrowserProvider(window.ethereum);

    if (web3Provider) {
      window.ethereum.on("chainChanged", async (_newChainId) => {
        try {
          await new Promise(async (res, rej) => {
            try {
              const p = new ethers.BrowserProvider(window.ethereum);
              await p.getSigner();
              setProvider(p);
              setChainId(parseInt((await p.getNetwork()).chainId));
              console.log("Network Changed to ", parseInt((await p.getNetwork()).chainId));
              res(true);
            } catch (e) {
              rej(e);
            }
          });
        } catch (e) {
          console.error(e);
        }
      });
      window.ethereum.on("accountsChanged", async (accounts) => {
        console.log(`Account changed to ${accounts?.[0]}`);
        if (!accounts?.length) {
          disconnect({ invasive: false }).catch((e) => {});
          return;
        }

        try {
          await new Promise(async (res, rej) => {
            try {
              const p = new ethers.BrowserProvider(window.ethereum);
              await p.getSigner();
              setProvider(p);
              setUserAddress(ethers.getAddress(accounts[0]));
              res(true);
            } catch (e) {
              rej(e);
            }
          });
        } catch (e) {
          console.error(e);
        }
      });

      // In ethers v6, the `enable()` method (from Web3Modal or similar) might be needed to initially trigger account access:
      if (!invasive && !(await web3Provider.listAccounts()).length) return;

      console.log("invasive login flow");
      await web3Provider.provider.send("eth_requestAccounts", []);
    }

    const signer = await web3Provider.getSigner();

    setUserAddress(ethers.getAddress(await signer?.getAddress()));
    setChainId(parseInt((await web3Provider.getNetwork()).chainId));
    await setProvider(web3Provider);
  };

  const changeNetwork = async (_chainId) => {
    console.log("changeNetwork", _chainId);
    if (chainId == _chainId) return true;
    try {
      await provider.send("wallet_switchEthereumChain", [{ chainId: utils.hexValue(parseInt(_chainId)) }]);

      await new Promise(async (res, rej) => {
        try {
          const p = new ethers.BrowserProvider(window.ethereum);
          await p.getSigner();
          setProvider(p);
          setChainId(parseInt((await p.getNetwork()).chainId));
          console.log("Network Changed to ", parseInt((await p.getNetwork()).chainId));
          res(true);
        } catch (e) {
          rej(e);
        }
      });
    } catch (e) {
      console.error(e.code);
      if (e.code == 4902 || e.message.includes("4902")) {
        await _addNetwork(_chainId);
        return await changeNetwork(_chainId);
      } else if (e.code == 4001) {
        console.error("user rejected", e);
      }
      throw e;
    }
  };

  const _addNetwork = async (_chainId) => {
    console.log("addNetwork", _chainId);
    const config = chains.find((chain) => chain.id == _chainId);
    if (!config) {
      console.error("Network not supported");
      throw new Error("Network not supported");
      return false;
    }
    try {
      await provider.send("wallet_addEthereumChain", [
        {
          chainId: utils.hexValue(_chainId),
          chainName: config.name,
          nativeCurrency: config.nativeCurrency,
          rpcUrls: config.rpcUrls.default.http,
          blockExplorerUrls: [config.blockExplorers.default.url],
        },
      ]);
      return true;
    } catch (e) {
      if (e.code == 4001) {
        console.log("user rejected", e);
      } else {
        console.error(e);
      }
      throw e;
    }
    return false;
  };

  const disconnect = async ({ invasive = true } = {}) => {
    if (invasive) {
      setProvider(undefined);
    }
    setUserAddress(undefined);
    setChainId(undefined);
  };

  return {
    connect,
    changeNetwork,
    disconnect,
  };
};

export default useInjectedConnector;
