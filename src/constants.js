export const rpc = {
  1: "https://eth-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  10: "https://opt-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  56: "https://bsc-mainnet.gateway.pokt.network/v1/lb/c8c059ff",
  100: "https://rpc.gnosischain.com",
  42161: "https://arb-mainnet.g.alchemy.com/v2/vma47TKOLkZ-xH_XQh1tQFfLADEJiHQt",
  43114: "https://avalanche-mainnet.infura.io/v3/551b04b59b124e308a08ba3098033d7c",
  1559: "https://rpc.tenet.org",
  155: "https://rpc.testnet.tenet.org",
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

export default { rpc, enums, id };
