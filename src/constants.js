export const WALLET_CONNECT_PROJECT_ID = "d8028ba5ebb41cbf8fd5593e26340994";

export const rpc = {
  1: "https://eth-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  10: "https://opt-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  56: "https://bsc-mainnet.gateway.pokt.network/v1/lb/c8c059ff",
  100: "https://rpc.gnosischain.com",
  42161: "https://arb-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  43114: "https://avalanche-mainnet.infura.io/v3/551b04b59b124e308a08ba3098033d7c",
  1559: "https://rpc.tenet.org",
  155: "https://rpc.testnet.tenet.org",
  810180:"https://rpc.zklink.io"
};

export const enums = {
  ConnectorTypes: {
    injected: "injected",
    walletConnect: "walletConnect",
  },
};

export const id = {
  storage: {
    walletConnector: "walletConnector",
  },
};

export default { WALLET_CONNECT_PROJECT_ID, rpc, enums, id };
