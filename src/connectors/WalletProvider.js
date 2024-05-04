import React, { useEffect, useRef, useState } from "react";
import useInjectedConnector from "./InjectedConnector";
import useWalletConnectConnector from "./WalletConnectConnector";
import { enums, id } from "../constants";
import walletContext from "./WalletContext";

const WalletProvider = ({ children, chains }) => {
  const [userAddress, _setUserAddress] = useState();
  const [chainId, _setChainId] = useState();
  const [provider, _setProvider] = useState();
  const [signer, _setSigner] = useState();
  const [connectorType, _setConnectorType] = useState(localStorage.getItem(id.storage.walletConnector));

  const _userAddressRef = useRef();
  const _chainIdRef = useRef();
  const _providerRef = useRef();
  const _signerRef = useRef();
  const _connectorTypeRef = useRef();

  const getUserAddress = () => _userAddressRef.current;
  const getChainId = () => _chainIdRef.current;
  const getProvider = () => _providerRef.current;
  const getSigner = () => _signerRef.current;
  const getConnector = () => connectors[_connectorTypeRef.current];

  const setUserAddress = (value) => {
    _userAddressRef.current = value;
    _setUserAddress(_userAddressRef.current);
  };
  const setChainId = (value) => {
    _chainIdRef.current = value;
    _setChainId(_chainIdRef.current);
  };
  const setProvider = async (value) => {
    _providerRef.current = value;
    _setProvider(_providerRef.current);

    if (value) {
      setSigner(await value.getSigner());
    } else {
      setSigner(undefined);
    }
  };
  const setSigner = (value) => {
    _signerRef.current = value;
    _setSigner(_signerRef.current);
  };
  const setConnectorType = (value) => {
    _connectorTypeRef.current = value;
    _setConnectorType(_connectorTypeRef.current);
  };

  useEffect(() => {
    _userAddressRef.current = userAddress;
  }, [userAddress]);
  useEffect(() => {
    _chainIdRef.current = chainId;
  }, [chainId]);
  useEffect(() => {
    _providerRef.current = provider;
  }, [provider]);
  useEffect(() => {
    _signerRef.current = signer;
  }, [signer]);
  useEffect(() => {
    _connectorTypeRef.current = connectorType;
  }, [connectorType]);

  const connectors = {
    [enums.ConnectorTypes.injected]: useInjectedConnector({
      chains,
      chainId,
      provider,
      setUserAddress,
      setChainId,
      setProvider,
    }),
    [enums.ConnectorTypes.walletConnect]: useWalletConnectConnector({
      chains,
      chainId,
      provider,
      setUserAddress,
      setChainId,
      setProvider,
    }),
  };

  const connect = async (_type = connectorType) => {
    if (!connectors[_type]) throw new Error("Invalid Connector");
    localStorage.setItem(id.storage.walletConnector, _type);
    setConnectorType(_type);
    return await connectors[_type].connect({ invasive: true });
  };

  const disconnect = async () => {
    await connectors[connectorType].disconnect();
    localStorage.removeItem(id.storage.walletConnector);
  };

  const changeNetwork = async (chainId) => {
    return await connectors[connectorType].changeNetwork(chainId);
  };

  useEffect(() => {
    connectors[connectorType]?.connect()?.catch((e) => {
      console.error(e);
    });
  }, []);

  return (
    <walletContext.Provider
      value={{
        getUserAddress,
        getChainId,
        getProvider,
        getSigner,
        getConnector,

        connect,
        disconnect,
        changeNetwork,
      }}
    >
      {children}
    </walletContext.Provider>
  );
};

export default WalletProvider;
