import { ethers } from "ethers";
import { EthereumProvider } from "@walletconnect/ethereum-provider";
import utils from "../utils";
import { useState } from "react";
import { rpc } from "../constants";

const WALLET_CONNECT_PROJECT_ID = "d8028ba5ebb41cbf8fd5593e26340994";

export const useWalletConnectConnector = ({ chains, chainId, provider, setUserAddress, setChainId, setProvider }) => {
  const [ethProvider, setEthProvider] = useState();

  const connect = async ({ invasive = false } = {}) => {
    let hasSession = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("wc@") && key.endsWith("/session")) hasSession = true;
    }
    if (!invasive && !hasSession) return false;

    const chainList = chains.map((chain) => chain.id);
    const ethProvider = await EthereumProvider.init({
      projectId: WALLET_CONNECT_PROJECT_ID,
      chains: [chainList[0]],
      optionalChains: chainList.slice(1),
      rpcMap: rpc,
      showQrModal: true,
      qrModalOptions: {
        themeMode: "dark",
      },
      optionalMethods: ["wallet_switchEthereumChain", "wallet_addEthereumChain"],
    });

    await ethProvider.enable();

    console.log("connect WalletConnect");
    const web3Provider = new ethers.BrowserProvider(ethProvider);

    ethProvider.on("chainChanged", (_newChainId) => {
      const newChainId = parseInt(_newChainId);

      console.log(`Network changed to ${newChainId}`);
      setChainId(newChainId);
    });
    ethProvider.on("accountsChanged", (accounts) => {
      console.log(`Account changed to ${accounts?.[0]}`);
      if (!accounts?.length) {
        disconnect({ invasive: false }).catch((e) => {});
        return;
      }
      setUserAddress(ethers.getAddress(accounts[0]));
    });

    if (!invasive && !(await web3Provider.listAccounts())?.length) return;

    console.log("invasive login flow");

    const signer = await web3Provider.getSigner();
    console.log(signer);
    setUserAddress(ethers.getAddress(await signer?.getAddress()));
    setChainId(parseInt((await web3Provider.getNetwork()).chainId));
    await setProvider(web3Provider);
    setEthProvider(ethProvider);
  };

  const changeNetwork = async (_chainId) => {
    console.log("changeNetwork", _chainId);
    if (chainId == _chainId) return true;
    try {
      await provider.send("wallet_switchEthereumChain", [{ chainId: utils.hexValue(parseInt(_chainId)) }]);
    } catch (e) {
      console.error(e.code, e.message.includes("4902"));
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
    console.log(config);
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
      await ethProvider.disconnect();
      setProvider(undefined);
    }
    setUserAddress(undefined);
    setChainId(undefined);

    // delete walletconnect cache from localstorage
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const key = localStorage.key(i);
      if (key && key.startsWith("wc@2")) {
        localStorage.removeItem(key);
      }
    }
  };

  return {
    connect,
    changeNetwork,
    disconnect,
  };
};

export default useWalletConnectConnector;
