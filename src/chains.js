export const arbitrum = {
  id: 42161,
  name: "Arbitrum One",
  network: "arbitrum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://arbitrum-mainnet.infura.io/v3"],
      webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"],
    },
    default: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://arb1.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://arbiscan.io",
    },
    default: {
      name: "Arbiscan",
      url: "https://arbiscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7654707,
    },
  },
};

export const arbitrumGoerli = {
  id: 421613,
  name: "Arbitrum Goerli",
  network: "arbitrum-goerli",
  nativeCurrency: {
    name: "Arbitrum Goerli Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://arb-goerli.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://arbitrum-goerli.infura.io/v3"],
      webSocket: ["wss://arbitrum-goerli.infura.io/ws/v3"],
    },
    default: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://goerli-rollup.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io/",
    },
    default: {
      name: "Arbiscan",
      url: "https://goerli.arbiscan.io/",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 88114,
    },
  },
  testnet: true,
};

export const arbitrumSepolia ={
  id: 421614,
  name: "Arbitrum Sepolia",
  network: "arbitrum-sepolia",
  nativeCurrency: {
    name: "Arbitrum Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://arb-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://arb-sepolia.g.alchemy.com/v2"],
    },
    default: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://sepolia-rollup.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io/",
    },
    default: {
      name: "Arbiscan",
      url: "https://sepolia.arbiscan.io/",
    },
  },
  testnet: true,
};

export const arbitrumNova = {
  id: 42170,
  name: "Arbitrum Nova",
  network: "arbitrum-nova",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    blast: {
      http: ["https://arbitrum-nova.public.blastapi.io"],
      webSocket: ["wss://arbitrum-nova.public.blastapi.io"],
    },
    default: {
      http: ["https://nova.arbitrum.io/rpc"],
    },
    public: {
      http: ["https://nova.arbitrum.io/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Arbiscan",
      url: "https://nova.arbiscan.io",
    },
    blockScout: {
      name: "BlockScout",
      url: "https://nova-explorer.arbitrum.io/",
    },
    default: {
      name: "Arbiscan",
      url: "https://nova.arbiscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1746963,
    },
  },
};

export const aurora = {
  id: 1313161554,
  name: "Aurora",
  network: "aurora",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    infura: {
      http: ["https://aurora-mainnet.infura.io/v3"],
    },
    default: {
      http: ["https://mainnet.aurora.dev"],
    },
    public: {
      http: ["https://mainnet.aurora.dev"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Aurorascan",
      url: "https://aurorascan.dev",
    },
    default: {
      name: "Aurorascan",
      url: "https://aurorascan.dev",
    },
  },
};

export const auroraTestnet = {
  id: 1313161555,
  name: "Aurora Testnet",
  network: "aurora-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    infura: {
      http: ["https://aurora-testnet.infura.io/v3"],
    },
    default: {
      http: ["https://testnet.aurora.dev"],
    },
    public: {
      http: ["https://testnet.aurora.dev"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Aurorascan",
      url: "https://testnet.aurorascan.dev",
    },
    default: {
      name: "Aurorascan",
      url: "https://testnet.aurorascan.dev",
    },
  },
  testnet: true,
};

export const avalanche = {
  id: 43114,
  name: "Avalanche",
  network: "avalanche",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax.network/ext/bc/C/rpc"],
    },
    public: {
      http: ["https://api.avax.network/ext/bc/C/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://snowtrace.io",
    },
    default: {
      name: "SnowTrace",
      url: "https://snowtrace.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 11907934,
    },
  },
};

export const avalancheFuji = {
  id: 43113,
  name: "Avalanche Fuji",
  network: "avalanche-fuji",
  nativeCurrency: {
    decimals: 18,
    name: "Avalanche Fuji",
    symbol: "AVAX",
  },
  rpcUrls: {
    default: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
    },
    public: {
      http: ["https://api.avax-test.network/ext/bc/C/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
    default: {
      name: "SnowTrace",
      url: "https://testnet.snowtrace.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 7096959,
    },
  },
  testnet: true,
};

export const baseGoerli = {
  id: 84531,
  network: "base-goerli",
  name: "Base Goerli",
  nativeCurrency: {
    name: "Base Goerli",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://goerli.base.org"],
    },
    public: {
      http: ["https://goerli.base.org"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Basescan",
      url: "https://goerli.basescan.org",
    },
    default: {
      name: "Basescan",
      url: "https://goerli.basescan.org",
    },
  },
  testnet: true,
};

export const base = {
  id: 8453,
  network: "base",
  name: "Base",
  nativeCurrency: {
    name: "Base",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.base.org"],
    },
    public: {
      http: ["https://mainnet.base.org"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Basescan",
      url: "https://basescan.org",
    },
    default: {
      name: "Basescan",
      url: "https://basescan.org",
    },
  },
};

export const boba = {
  id: 288,
  name: "Boba Network",
  network: "boba",
  nativeCurrency: {
    decimals: 18,
    name: "Boba",
    symbol: "BOBA",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.boba.network"],
    },
    public: {
      http: ["https://mainnet.boba.network"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "BOBAScan",
      url: "https://bobascan.com",
    },
    default: {
      name: "BOBAScan",
      url: "https://bobascan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 446859,
    },
  },
};

export const bronos = {
  id: 1039,
  name: "Bronos",
  network: "bronos",
  nativeCurrency: {
    decimals: 18,
    name: "BRO",
    symbol: "BRO",
  },
  rpcUrls: {
    default: {
      http: ["https://evm.bronos.org"],
    },
    public: {
      http: ["https://evm.bronos.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://broscan.bronos.org",
    },
  },
};

export const bronosTestnet = {
  id: 1038,
  name: "Bronos Testnet",
  network: "bronos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Bronos Coin",
    symbol: "tBRO",
  },
  rpcUrls: {
    default: {
      http: ["https://evm-testnet.bronos.org"],
    },
    public: {
      http: ["https://evm-testnet.bronos.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "BronoScan",
      url: "https://tbroscan.bronos.org",
    },
  },
  testnet: true,
};

export const bsc = {
  id: 56,
  name: "BNB Smart Chain",
  network: "bsc",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "BNB",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/bsc"],
    },
    public: {
      http: ["https://rpc.ankr.com/bsc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "BscScan",
      url: "https://bscscan.com",
    },
    default: {
      name: "BscScan",
      url: "https://bscscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 15921452,
    },
  },
};

export const bscTestnet = {
  id: 97,
  name: "Binance Smart Chain Testnet",
  network: "bsc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BNB",
    symbol: "tBNB",
  },
  rpcUrls: {
    default: {
      http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    },
    public: {
      http: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
    },
    default: {
      name: "BscScan",
      url: "https://testnet.bscscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 17422483,
    },
  },
  testnet: true,
};

export const canto = {
  id: 7700,
  name: "Canto",
  network: "canto",
  nativeCurrency: {
    decimals: 18,
    name: "Canto",
    symbol: "CANTO",
  },
  rpcUrls: {
    default: {
      http: ["https://canto.slingshot.finance"],
    },
    public: {
      http: ["https://canto.slingshot.finance"],
    },
  },
  blockExplorers: {
    default: {
      name: "Canto EVM Explorer (Blockscout)",
      url: "https://evm.explorer.canto.io",
    },
  },
};

export const celo = {
  id: 42220,
  name: "Celo",
  network: "celo",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "CELO",
  },
  rpcUrls: {
    default: {
      http: ["https://forno.celo.org"],
    },
    infura: {
      http: ["https://celo-mainnet.infura.io/v3"],
    },
    public: {
      http: ["https://forno.celo.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/mainnet",
    },
    etherscan: {
      name: "CeloScan",
      url: "https://celoscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 13112599,
    },
  },
  testnet: false,
};

export const celoAlfajores = {
  id: 44787,
  name: "Alfajores",
  network: "celo-alfajores",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "A-CELO",
  },
  rpcUrls: {
    default: {
      http: ["https://alfajores-forno.celo-testnet.org"],
    },
    infura: {
      http: ["https://celo-alfajores.infura.io/v3"],
    },
    public: {
      http: ["https://alfajores-forno.celo-testnet.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/alfajores",
    },
    etherscan: {
      name: "CeloScan",
      url: "https://alfajores.celoscan.io/",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14569001,
    },
  },
  testnet: true,
};

export const celoCannoli = {
  id: 17323,
  name: "Cannoli",
  network: "celo-cannoli",
  nativeCurrency: {
    decimals: 18,
    name: "CELO",
    symbol: "C-CELO",
  },
  rpcUrls: {
    default: {
      http: ["https://forno.cannoli.celo-testnet.org"],
    },
    public: {
      http: ["https://forno.cannoli.celo-testnet.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Celo Explorer",
      url: "https://explorer.celo.org/cannoli",
    },
  },
  contracts: {
    multicall3: {
      address: "0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",
      blockCreated: 87429,
    },
  },
  testnet: true,
};

export const confluxESpace = {
  id: 1030,
  name: "Conflux eSpace",
  network: "cfx-espace",
  nativeCurrency: {
    name: "Conflux",
    symbol: "CFX",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://evm.confluxrpc.org"],
    },
    public: {
      http: ["https://evm.confluxrpc.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "ConfluxScan",
      url: "https://evm.confluxscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xEFf0078910f638cd81996cc117bccD3eDf2B072F",
      blockCreated: 68602935,
    },
  },
};

export const cronos = {
  id: 25,
  name: "Cronos",
  network: "cronos",
  nativeCurrency: {
    decimals: 18,
    name: "Cronos",
    symbol: "CRO",
  },
  rpcUrls: {
    default: {
      http: ["https://node.croswap.com/rpc"],
    },
    public: {
      http: ["https://node.croswap.com/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "CronosScan",
      url: "https://cronoscan.com",
    },
    default: {
      name: "CronosScan",
      url: "https://cronoscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1963112,
    },
  },
};

export const crossbell = {
  id: 3737,
  network: "crossbell",
  name: "Crossbell",
  nativeCurrency: {
    decimals: 18,
    name: "CSB",
    symbol: "CSB",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.crossbell.io"],
    },
    public: {
      http: ["https://rpc.crossbell.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "CrossScan",
      url: "https://scan.crossbell.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xBB9759009cDaC82774EfC84D94cD9F7440f75Fcf",
      blockCreated: 23499787,
    },
  },
};

export const dfk = {
  id: 53935,
  name: "DFK Chain",
  network: "dfk",
  nativeCurrency: {
    decimals: 18,
    name: "Jewel",
    symbol: "JEWEL",
  },
  rpcUrls: {
    default: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
    },
    public: {
      http: ["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms",
    },
    default: {
      name: "DFKSubnetScan",
      url: "https://subnets.avax.network/defi-kingdoms",
    },
  },
};

export const dogechain = {
  id: 2000,
  name: "Dogechain",
  network: "dogechain",
  nativeCurrency: {
    decimals: 18,
    name: "Dogechain",
    symbol: "DC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.dogechain.dog"],
    },
    public: {
      http: ["https://rpc.dogechain.dog"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog",
    },
    default: {
      name: "DogeChainExplorer",
      url: "https://explorer.dogechain.dog",
    },
  },
};

export const evmos = {
  id: 9001,
  name: "Evmos",
  network: "evmos",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS",
  },
  rpcUrls: {
    default: {
      http: ["https://eth.bd.evmos.org:8545"],
    },
    public: {
      http: ["https://eth.bd.evmos.org:8545"],
    },
  },
  blockExplorers: {
    default: {
      name: "Evmos Block Explorer",
      url: "https://escan.live/",
    },
  },
};

export const evmosTestnet = {
  id: 9000,
  name: "Evmos Testnet",
  network: "evmos-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Evmos",
    symbol: "EVMOS",
  },
  rpcUrls: {
    default: {
      http: ["https://eth.bd.evmos.dev:8545"],
    },
    public: {
      http: ["https://eth.bd.evmos.dev:8545"],
    },
  },
  blockExplorers: {
    default: {
      name: "Evmos Testnet Block Explorer",
      url: "https://evm.evmos.dev/",
    },
  },
};

export const fantom = {
  id: 250,
  name: "Fantom",
  network: "fantom",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/fantom"],
    },
    public: {
      http: ["https://rpc.ankr.com/fantom"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "FTMScan",
      url: "https://ftmscan.com",
    },
    default: {
      name: "FTMScan",
      url: "https://ftmscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 33001987,
    },
  },
};

export const fantomTestnet = {
  id: 4002,
  name: "Fantom Testnet",
  network: "fantom-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Fantom",
    symbol: "FTM",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.fantom.network"],
    },
    public: {
      http: ["https://rpc.testnet.fantom.network"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com",
    },
    default: {
      name: "FTMScan",
      url: "https://testnet.ftmscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 8328688,
    },
  },
};

export const filecoin = {
  id: 314,
  name: "Filecoin Mainnet",
  network: "filecoin-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "filecoin",
    symbol: "FIL",
  },
  rpcUrls: {
    default: {
      http: ["https://api.node.glif.io/rpc/v1"],
    },
    public: {
      http: ["https://api.node.glif.io/rpc/v1"],
    },
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://filfox.info/en",
    },
    filscan: {
      name: "Filscan",
      url: "https://filscan.io",
    },
    filscout: {
      name: "Filscout",
      url: "https://filscout.io/en",
    },
    glif: {
      name: "Glif",
      url: "https://explorer.glif.io",
    },
  },
};

export const filecoinHyperspace = {
  id: 3141,
  name: "Filecoin Hyperspace",
  network: "filecoin-hyperspace",
  nativeCurrency: {
    decimals: 18,
    name: "testnet filecoin",
    symbol: "tFIL",
  },
  rpcUrls: {
    default: {
      http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
    },
    public: {
      http: ["https://api.hyperspace.node.glif.io/rpc/v1"],
    },
  },
  blockExplorers: {
    default: {
      name: "Filfox",
      url: "https://hyperspace.filfox.info/en",
    },
    filscan: {
      name: "Filscan",
      url: "https://hyperspace.filscan.io",
    },
  },
};

export const foundry = {
  id: 31337,
  name: "Foundry",
  network: "foundry",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
      webSocket: ["ws://127.0.0.1:8545"],
    },
  },
};

export const fuse = {
  id: 122,
  name: "Fuse",
  network: "fuse",
  nativeCurrency: {
    name: "Fuse",
    symbol: "FUSE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.fuse.io"],
    },
    public: {
      http: ["https://fuse-mainnet.chainstacklabs.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Fuse Explorer",
      url: "https://explorer.fuse.io",
    },
  },
};

export const iotex = {
  id: 4689,
  name: "IoTeX",
  network: "iotex",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX",
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"],
    },
    public: {
      http: ["https://babel-api.mainnet.iotex.io"],
      webSocket: ["wss://babel-api.mainnet.iotex.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://iotexscan.io",
    },
  },
};

export const iotexTestnet = {
  id: 4690,
  name: "IoTeX Testnet",
  network: "iotex-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "IoTeX",
    symbol: "IOTX",
  },
  rpcUrls: {
    default: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"],
    },
    public: {
      http: ["https://babel-api.testnet.iotex.io"],
      webSocket: ["wss://babel-api.testnet.iotex.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "IoTeXScan",
      url: "https://testnet.iotexscan.io",
    },
  },
};

export const goerli = {
  id: 5,
  network: "goerli",
  name: "Goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://eth-goerli.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://goerli.infura.io/v3"],
      webSocket: ["wss://goerli.infura.io/ws/v3"],
    },
    default: {
      http: ["https://rpc.ankr.com/eth_goerli"],
    },
    public: {
      http: ["https://rpc.ankr.com/eth_goerli"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://goerli.etherscan.io",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xA292E2E58d4ddEb29C33c63173d0E8B7a2A4c62e",
      blockCreated: 8610406,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670,
    },
  },
  testnet: true,
};

export const gnosis = {
  id: 100,
  name: "Gnosis",
  network: "gnosis",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.gnosischain.com"],
    },
    public: {
      http: ["https://rpc.gnosischain.com"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Gnosisscan",
      url: "https://gnosisscan.io/",
    },
    default: {
      name: "Gnosis Chain Explorer",
      url: "https://blockscout.com/xdai/mainnet/",
    },
  },
};

export const gnosisChiado = {
  id: 10200,
  name: "Gnosis Chiado",
  network: "chiado",
  nativeCurrency: {
    decimals: 18,
    name: "Gnosis",
    symbol: "xDAI",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chiadochain.net"],
    },
    public: {
      http: ["https://rpc.chiadochain.net"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.chiadochain.net",
    },
  },
};

export const hardhat = {
  id: 31337,
  name: "Hardhat",
  network: "hardhat",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
    },
  },
};

export const harmonyOne = {
  id: 1666600000,
  name: "Harmony One",
  network: "harmony",
  nativeCurrency: {
    name: "Harmony",
    symbol: "ONE",
    decimals: 18,
  },
  rpcUrls: {
    public: {
      http: ["https://rpc.ankr.com/harmony"],
    },
    default: {
      http: ["https://rpc.ankr.com/harmony"],
    },
  },
  blockExplorers: {
    default: {
      name: "Harmony Explorer",
      url: "https://explorer.harmony.one",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 24185753,
    },
  },
};

export const haqqMainnet = {
  id: 11235,
  name: "HAQQ Mainnet",
  network: "haqq-mainnet",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLM",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.haqq.network"],
    },
    public: {
      http: ["https://rpc.eth.haqq.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.haqq.network",
    },
  },
};

export const haqqTestedge2 = {
  id: 54211,
  name: "HAQQ Testedge 2",
  network: "haqq-testedge-2",
  nativeCurrency: {
    decimals: 18,
    name: "Islamic Coin",
    symbol: "ISLMT",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.eth.testedge2.haqq.network"],
    },
    public: {
      http: ["https://rpc.eth.testedge2.haqq.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "HAQQ Explorer",
      url: "https://explorer.testedge2.haqq.network",
    },
  },
};

export const klaytn = {
  id: 8217,
  name: "Klaytn",
  network: "klaytn",
  nativeCurrency: {
    decimals: 18,
    name: "Klaytn",
    symbol: "KLAY",
  },
  rpcUrls: {
    default: {
      http: ["https://cypress.fautor.app/archive"],
    },
    public: {
      http: ["https://cypress.fautor.app/archive"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "KlaytnScope",
      url: "https://scope.klaytn.com",
    },
    default: {
      name: "KlaytnScope",
      url: "https://scope.klaytn.com",
    },
  },
};

export const lineaTestnet = {
  id: 59140,
  name: "Linea Goerli Testnet",
  network: "linea-testnet",
  nativeCurrency: {
    name: "Linea Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    infura: {
      http: ["https://consensys-zkevm-goerli-prealpha.infura.io/v3"],
      webSocket: ["wss://consensys-zkevm-goerli-prealpha.infura.io/ws/v3"],
    },
    default: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"],
    },
    public: {
      http: ["https://rpc.goerli.linea.build"],
      webSocket: ["wss://rpc.goerli.linea.build"],
    },
  },
  blockExplorers: {
    default: {
      name: "BlockScout",
      url: "https://explorer.goerli.linea.build",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 498623,
    },
  },
  testnet: true,
};

export const linea = {
  id: 59144,
  name: "Linea",
  network: "linea",
  nativeCurrency: {
    name: "Linea Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    infura: {
      http: ["https://linea.blockpi.network/v1/rpc/public"],
    },
    default: {
      http: ["https://linea.blockpi.network/v1/rpc/public"],
    },
    public: {
      http: ["https://linea.blockpi.network/v1/rpc/public"],
    },
  },
  blockExplorers: {
    default: {
      name: "Lineascan",
      url: "https://lineascan.build",
    },
  },
};

export const localhost = {
  id: 1337,
  name: "Localhost",
  network: "localhost",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["http://127.0.0.1:8545"],
    },
    public: {
      http: ["http://127.0.0.1:8545"],
    },
  },
};

export const mainnet = {
  id: 1,
  network: "homestead",
  name: "Ethereum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://mainnet.infura.io/v3"],
      webSocket: ["wss://mainnet.infura.io/ws/v3"],
    },
    default: {
      http: ["https://cloudflare-eth.com"],
    },
    public: {
      http: ["https://cloudflare-eth.com"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    ensUniversalResolver: {
      address: "0xE4Acdd618deED4e6d2f03b9bf62dc6118FC9A4da",
      blockCreated: 16773775,
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
};

export const mantle = {
  id: 5000,
  name: "Mantle",
  network: "Mantle",
  nativeCurrency: {
    decimals: 18,
    name: "Mantle",
    symbol: "MNT",
  },
  rpcUrls: {
    public: {
      http: ["https://mantle.publicnode.com"],
    },
    default: {
      http: ["https://rpc.mantle.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "MantleScan",
      url: "https://mantlescan.info",
    },
  },
};

export const metis = {
  id: 1088,
  name: "Metis",
  network: "andromeda",
  nativeCurrency: {
    decimals: 18,
    name: "Metis",
    symbol: "METIS",
  },
  rpcUrls: {
    default: {
      http: ["https://andromeda.metis.io/?owner=1088"],
    },
    public: {
      http: ["https://andromeda.metis.io/?owner=1088"],
    },
  },
  blockExplorers: {
    default: {
      name: "Andromeda Explorer",
      url: "https://andromeda-explorer.metis.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 2338552,
    },
  },
};

export const metisGoerli = {
  id: 599,
  name: "Metis Goerli",
  network: "metis-goerli",
  nativeCurrency: {
    decimals: 18,
    name: "Metis Goerli",
    symbol: "METIS",
  },
  rpcUrls: {
    default: {
      http: ["https://goerli.gateway.metisdevops.link"],
    },
    public: {
      http: ["https://goerli.gateway.metisdevops.link"],
    },
  },
  blockExplorers: {
    default: {
      name: "Metis Goerli Explorer",
      url: "https://goerli.explorer.metisdevops.link",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 1006207,
    },
  },
};

export const moonbaseAlpha = {
  id: 1287,
  name: "Moonbase Alpha",
  network: "moonbase-alpha",
  nativeCurrency: {
    decimals: 18,
    name: "DEV",
    symbol: "DEV",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
    },
    public: {
      http: ["https://rpc.api.moonbase.moonbeam.network"],
      webSocket: ["wss://wss.api.moonbase.moonbeam.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io",
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonbase.moonscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1850686,
    },
  },
  testnet: true,
};

export const moonbeam = {
  id: 1284,
  name: "Moonbeam",
  network: "moonbeam",
  nativeCurrency: {
    decimals: 18,
    name: "GLMR",
    symbol: "GLMR",
  },
  rpcUrls: {
    public: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"],
    },
    default: {
      http: ["https://moonbeam.public.blastapi.io"],
      webSocket: ["wss://moonbeam.public.blastapi.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonscan.io",
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 609002,
    },
  },
  testnet: false,
};

export const moonriver = {
  id: 1285,
  name: "Moonriver",
  network: "moonriver",
  nativeCurrency: {
    decimals: 18,
    name: "MOVR",
    symbol: "MOVR",
  },
  rpcUrls: {
    public: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"],
    },
    default: {
      http: ["https://moonriver.public.blastapi.io"],
      webSocket: ["wss://moonriver.public.blastapi.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io",
    },
    etherscan: {
      name: "Moonscan",
      url: "https://moonriver.moonscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 1597904,
    },
  },
  testnet: false,
};

export const neonDevnet = {
  id: 245022926,
  network: "neonDevnet",
  name: "Neon EVM DevNet",
  nativeCurrency: {
    name: "NEON",
    symbol: "NEON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://devnet.neonevm.org"],
    },
    public: {
      http: ["https://devnet.neonevm.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Neonscan",
      url: "https://neonscan.org",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 205206112,
    },
  },
  testnet: true,
};

export const nexi = {
  id: 4242,
  name: "Nexi",
  network: "nexi",
  nativeCurrency: {
    name: "Nexi",
    symbol: "NEXI",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.chain.nexi.technology"],
    },
    public: {
      http: ["https://rpc.chain.nexi.technology"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "NexiScan",
      url: "https://www.nexiscan.com",
    },
    default: {
      name: "NexiScan",
      url: "https://www.nexiscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",
      blockCreated: 25770160,
    },
  },
};

export const oasys = {
  id: 248,
  name: "Oasys",
  network: "oasys",
  nativeCurrency: {
    name: "Oasys",
    symbol: "OAS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.oasys.games"],
    },
    public: {
      http: ["https://rpc.mainnet.oasys.games"],
    },
  },
  blockExplorers: {
    default: {
      name: "OasysScan",
      url: "https://scan.oasys.games",
    },
  },
};

export const okc = {
  id: 66,
  name: "OKC",
  network: "okc",
  nativeCurrency: {
    decimals: 18,
    name: "OKT",
    symbol: "OKT",
  },
  rpcUrls: {
    default: {
      http: ["https://exchainrpc.okex.org"],
    },
    public: {
      http: ["https://exchainrpc.okex.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "oklink",
      url: "https://www.oklink.com/okc",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 10364792,
    },
  },
};

export const optimism = {
  id: 10,
  name: "Optimism",
  network: "optimism",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://opt-mainnet.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://optimism-mainnet.infura.io/v3"],
      webSocket: ["wss://optimism-mainnet.infura.io/ws/v3"],
    },
    default: {
      http: ["https://mainnet.optimism.io"],
    },
    public: {
      http: ["https://mainnet.optimism.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://optimistic.etherscan.io",
    },
    default: {
      name: "Optimism Explorer",
      url: "https://explorer.optimism.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 4286263,
    },
  },
};

export const optimismGoerli = {
  id: 420,
  name: "Optimism Goerli",
  network: "optimism-goerli",
  nativeCurrency: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://opt-goerli.g.alchemy.com/v2"],
      webSocket: ["wss://opt-goerli.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://optimism-goerli.infura.io/v3"],
      webSocket: ["wss://optimism-goerli.infura.io/ws/v3"],
    },
    default: {
      http: ["https://goerli.optimism.io"],
    },
    public: {
      http: ["https://goerli.optimism.io"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://goerli-optimism.etherscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 49461,
    },
  },
  testnet: true,
};

export const polygon = {
  id: 137,
  name: "Polygon",
  network: "matic",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mainnet.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://polygon-mainnet.infura.io/v3"],
      webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"],
    },
    default: {
      http: ["https://polygon-rpc.com"],
    },
    public: {
      http: ["https://polygon-rpc.com"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://polygonscan.com",
    },
    default: {
      name: "PolygonScan",
      url: "https://polygonscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160,
    },
  },
};

export const polygonMumbai = {
  id: 80001,
  name: "Polygon Mumbai",
  network: "maticmum",
  nativeCurrency: {
    name: "MATIC",
    symbol: "MATIC",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://polygon-mumbai.g.alchemy.com/v2"],
      webSocket: ["wss://polygon-mumbai.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://polygon-mumbai.infura.io/v3"],
      webSocket: ["wss://polygon-mumbai.infura.io/ws/v3"],
    },
    default: {
      http: ["https://matic-mumbai.chainstacklabs.com"],
    },
    public: {
      http: ["https://matic-mumbai.chainstacklabs.com"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
    },
    default: {
      name: "PolygonScan",
      url: "https://mumbai.polygonscan.com",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 25770160,
    },
  },
  testnet: true,
};

export const polygonZkEvmTestnet = {
  id: 1442,
  name: "Polygon zkEVM Testnet",
  network: "polygon-zkevm-testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.public.zkevm-test.net"],
    },
    public: {
      http: ["https://rpc.public.zkevm-test.net"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://explorer.public.zkevm-test.net",
    },
  },
  testnet: true,
};

export const polygonZkEvm = {
  id: 1101,
  name: "Polygon zkEVM",
  network: "polygon-zkevm",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://zkevm-rpc.com"],
    },
    public: {
      http: ["https://zkevm-rpc.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "PolygonScan",
      url: "https://zkevm.polygonscan.com",
    },
  },
};

export const pulsechain = {
  id: 369,
  network: "pulsechain",
  name: "Pulsechain",
  nativeCurrency: {
    name: "Pulse",
    symbol: "PLS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.pulsechain.com"],
      webSocket: ["wss://ws.mainnet.pulsechain.com"],
    },
    public: {
      http: ["https://rpc.mainnet.pulsechain.com"],
      webSocket: ["wss://ws.mainnet.pulsechain.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://scan.pulsechain.com",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
};

export const pulsechainV4 = {
  id: 943,
  network: "pulsechainV4",
  name: "Pulsechain V4",
  testnet: true,
  nativeCurrency: {
    name: "Pulse",
    symbol: "PLS",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
    },
    public: {
      http: ["https://rpc.v4.testnet.pulsechain.com"],
      webSocket: ["wss://ws.v4.testnet.pulsechain.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://scan.v4.testnet.pulsechain.com",
    },
  },
  contracts: {
    ensRegistry: {
      address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    },
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 14353601,
    },
  },
};

export const scrollTestnet = {
  id: 534353,
  name: "Scroll Testnet",
  network: "scroll-testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
    },
    public: {
      http: ["https://alpha-rpc.scroll.io/l2"],
      webSocket: ["wss://alpha-rpc.scroll.io/l2/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://blockscout.scroll.io",
    },
  },
  testnet: true,
};

export const scroll = {
  id: 534352,
  name: "Scroll",
  network: "scroll",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.scroll.io"],
    },
    public: {
      http: ["https://rpc.scroll.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Scrollscan",
      url: "https://scrollscan.com",
    },
  },
};

export const sepolia = {
  id: 11155111,
  network: "sepolia",
  name: "Sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "SEP",
    decimals: 18,
  },
  rpcUrls: {
    alchemy: {
      http: ["https://eth-sepolia.g.alchemy.com/v2"],
      webSocket: ["wss://eth-sepolia.g.alchemy.com/v2"],
    },
    infura: {
      http: ["https://sepolia.infura.io/v3"],
      webSocket: ["wss://sepolia.infura.io/ws/v3"],
    },
    default: {
      http: ["https://rpc.sepolia.org"],
    },
    public: {
      http: ["https://rpc.sepolia.org"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
    },
    default: {
      name: "Etherscan",
      url: "https://sepolia.etherscan.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0xca11bde05977b3631167028862be2a173976ca11",
      blockCreated: 6507670,
    },
  },
  testnet: true,
};

export const skaleBlockBrawlers = {
  id: 391845894,
  name: "SKALE | Block Brawlers",
  network: "skale-brawl",
  nativeCurrency: {
    name: "BRAWL",
    symbol: "BRAWL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://frayed-decent-antares.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleCalypso = {
  id: 1564830818,
  name: "SKALE | Calypso NFT Hub",
  network: "skale-calypso",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleCalypsoTestnet = {
  id: 344106930,
  name: "SKALE | Calypso NFT Hub Testnet",
  network: "skale-calypso-testnet",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"],
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com",
    },
  },
  contracts: {},
  testnet: true,
};

export const skaleChaosTestnet = {
  id: 1351057110,
  name: "SKALE | Chaos Testnet",
  network: "skale-chaos-testnet",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"],
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
    },
  },
  contracts: {},
  testnet: true,
};

export const skaleCryptoBlades = {
  id: 1026062157,
  name: "SKALE | CryptoBlades",
  network: "skale-cryptoblades",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleCryptoColosseum = {
  id: 2046399126,
  name: "SKALE | Crypto Colosseum",
  network: "skale-crypto-coloseeum",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleEuropa = {
  id: 2046399126,
  name: "SKALE | Europa Liquidity Hub",
  network: "skale-europa",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/elated-tan-skat"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://elated-tan-skat.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleEuropaTestnet = {
  id: 476158412,
  name: "SKALE | Europa Liquidity Hub Testnet",
  network: "skale-europa-testnet",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com",
    },
  },
  contracts: {},
  testnet: true,
};

export const skaleExorde = {
  id: 2139927552,
  name: "SKALE | Exorde",
  network: "skale-exorde",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/light-vast-diphda"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://light-vast-diphda.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleHumanProtocol = {
  id: 1273227453,
  name: "SKALE | Human Protocol",
  network: "skale-human-protocol",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/wan-red-ain"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://wan-red-ain.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleNebula = {
  id: 1482601649,
  name: "SKALE | Nebula Gaming Hub",
  network: "skale-nebula",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://green-giddy-denebola.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleNebulaTestnet = {
  id: 503129905,
  name: "SKALE | Nebula Gaming Hub Testnet",
  network: "skale-nebula-testnet",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com",
    },
  },
  contracts: {},
  testnet: true,
};

export const skaleRazor = {
  id: 278611351,
  name: "SKALE | Razor Network",
  network: "skale-razor",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleTitan = {
  id: 1350216234,
  name: "SKALE | Titan Community Hub",
  network: "skale-titan",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
    },
    public: {
      http: ["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://parallel-stormy-spica.explorer.mainnet.skalenodes.com",
    },
  },
  contracts: {},
};

export const skaleTitanTestnet = {
  id: 1517929550,
  name: "SKALE | Titan Community Hub Testnet",
  network: "skale-titan-testnet",
  nativeCurrency: {
    name: "sFUEL",
    symbol: "sFUEL",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"],
    },
    public: {
      http: ["https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com",
    },
    default: {
      name: "SKALE Explorer",
      url: "https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com",
    },
  },
  contracts: {},
  testnet: true,
};

export const shardeumSphinx = {
  id: 8082,
  name: "Shardeum Sphinx",
  network: "shmSphinx",
  nativeCurrency: {
    name: "SHARDEUM",
    symbol: "SHM",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://sphinx.shardeum.org"],
    },
    public: {
      http: ["https://sphinx.shardeum.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "Shardeum Explorer",
      url: "https://explorer-sphinx.shardeum.org",
    },
  },
  testnet: true,
};

export const syscoin = {
  id: 57,
  name: "Syscoin Mainnet",
  network: "syscoin",
  nativeCurrency: {
    decimals: 8,
    name: "Syscoin",
    symbol: "SYS",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.syscoin.org"],
    },
    public: {
      http: ["https://rpc.syscoin.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "SyscoinExplorer",
      url: "https://explorer.syscoin.org",
    },
  },
  contracts: {
    multicall3: {
      address: "0x000562033783B1136159E10d976B519C929cdE8e",
      blockCreated: 80637,
    },
  },
};

export const taraxa = {
  id: 841,
  name: "Taraxa Mainnet",
  network: "taraxa",
  nativeCurrency: {
    name: "Tara",
    symbol: "TARA",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.mainnet.taraxa.io"],
    },
    public: {
      http: ["https://rpc.mainnet.taraxa.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.mainnet.taraxa.io",
    },
  },
};

export const taraxaTestnet = {
  id: 842,
  name: "Taraxa Testnet",
  network: "taraxa-testnet",
  nativeCurrency: {
    name: "Tara",
    symbol: "TARA",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.testnet.taraxa.io"],
    },
    public: {
      http: ["https://rpc.testnet.taraxa.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Taraxa Explorer",
      url: "https://explorer.testnet.taraxa.io",
    },
  },
  testnet: true,
};

export const telos = {
  id: 40,
  name: "Telos",
  network: "telos",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.telos.net/evm"],
    },
    public: {
      http: ["https://mainnet.telos.net/evm"],
    },
  },
  blockExplorers: {
    default: {
      name: "Teloscan",
      url: "https://www.teloscan.io/",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 246530709,
    },
  },
};

export const telosTestnet = {
  id: 41,
  name: "Telos",
  network: "telosTestnet",
  nativeCurrency: {
    decimals: 18,
    name: "Telos",
    symbol: "TLOS",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.telos.net/evm"],
    },
    public: {
      http: ["https://testnet.telos.net/evm"],
    },
  },
  blockExplorers: {
    default: {
      name: "Teloscan (testnet)",
      url: "https://testnet.teloscan.io/",
    },
  },
  testnet: true,
};

export const tenet = {
  id: 1559,
  name: "Tenet",
  network: "TENET",
  nativeCurrency: {
    decimals: 18,
    name: "TENET",
    symbol: "TENET",
  },
  rpcUrls: {
    public: {
      http: ["https://tenet-evm.publicnode.com"],
    },
    default: {
      http: ["https://rpc.tenet.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "TenetScan",
      url: "https://tenetscan.io",
    },
  },
};

export const thunderTestnet = {
  id: 997,
  name: "5ireChain Thunder Testnet",
  network: "5ireChain",
  nativeCurrency: {
    name: "5ire Token",
    symbol: "5IRE",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc-testnet.5ire.network"],
    },
    public: {
      http: ["https://rpc-testnet.5ire.network"],
    },
  },
  blockExplorers: {
    default: {
      name: "5ireChain Explorer",
      url: "https://explorer.5ire.network",
    },
  },
  testnet: true,
};

export const wanchain = {
  id: 888,
  name: "Wanchain",
  network: "wanchain",
  nativeCurrency: {
    name: "WANCHAIN",
    symbol: "WAN",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:56891", "https://gwan2-ssl.wandevs.org"],
    },
    public: {
      http: ["https://gwan-ssl.wandevs.org:56891", "https://gwan2-ssl.wandevs.org"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "WanScan",
      url: "https://wanscan.org",
    },
    default: {
      name: "WanScan",
      url: "https://wanscan.org",
    },
  },
  contracts: {
    multicall3: {
      address: "0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",
      blockCreated: 25312390,
    },
  },
};

export const wanchainTestnet = {
  id: 999,
  name: "Wanchain Testnet",
  network: "wanchainTestnet",
  nativeCurrency: {
    name: "WANCHAIN",
    symbol: "WANt",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://gwan-ssl.wandevs.org:46891"],
    },
    public: {
      http: ["https://gwan-ssl.wandevs.org:46891"],
    },
  },
  blockExplorers: {
    etherscan: {
      name: "WanScanTest",
      url: "https://wanscan.org",
    },
    default: {
      name: "WanScanTest",
      url: "https://wanscan.org",
    },
  },
  contracts: {
    multicall3: {
      address: "0x11c89bF4496c39FB80535Ffb4c92715839CC5324",
      blockCreated: 24743448,
    },
  },
  testnet: true,
};

export const xdc = {
  id: 50,
  name: "XinFin Network",
  network: "xdc",
  nativeCurrency: {
    decimals: 18,
    name: "XDC",
    symbol: "XDC",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.xinfin.network"],
    },
    public: {
      http: ["https://rpc.xinfin.network"],
    },
  },
  blockExplorers: {
    xinfin: {
      name: "XinFin",
      url: "https://explorer.xinfin.network",
    },
    default: {
      name: "Blocksscan",
      url: "https://xdc.blocksscan.io",
    },
  },
};

export const xdcTestnet = {
  id: 51,
  name: "Apothem Network",
  network: "xdc-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "TXDC",
    symbol: "TXDC",
  },
  rpcUrls: {
    default: {
      http: ["https://erpc.apothem.network"],
    },
    public: {
      http: ["https://erpc.apothem.network"],
    },
  },
  blockExplorers: {
    xinfin: {
      name: "XinFin",
      url: "https://explorer.apothem.network",
    },
    default: {
      name: "Blocksscan",
      url: "https://apothem.blocksscan.io",
    },
  },
};

export const zhejiang = {
  id: 1337803,
  network: "zhejiang",
  name: "Zhejiang",
  nativeCurrency: {
    name: "Zhejiang Ether",
    symbol: "ZhejETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zhejiang.ethpandaops.io"],
    },
    public: {
      http: ["https://rpc.zhejiang.ethpandaops.io"],
    },
  },
  blockExplorers: {
    beaconchain: {
      name: "Etherscan",
      url: "https://zhejiang.beaconcha.in",
    },
    blockscout: {
      name: "Blockscout",
      url: "https://blockscout.com/eth/zhejiang-testnet",
    },
    default: {
      name: "Beaconchain",
      url: "https://zhejiang.beaconcha.in",
    },
  },
  testnet: true,
};

export const zkSync = {
  id: 324,
  name: "zkSync Era",
  network: "zksync-era",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"],
    },
    public: {
      http: ["https://mainnet.era.zksync.io"],
      webSocket: ["wss://mainnet.era.zksync.io/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://explorer.zksync.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0x47898B2C52C957663aE9AB46922dCec150a2272c",
    },
  },
};

export const zkSyncTestnet = {
  id: 280,
  name: "zkSync Era Testnet",
  network: "zksync-era-testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"],
    },
    public: {
      http: ["https://testnet.era.zksync.dev"],
      webSocket: ["wss://testnet.era.zksync.dev/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "zkExplorer",
      url: "https://goerli.explorer.zksync.io",
    },
  },
  contracts: {
    multicall3: {
      address: "0x89e4EDbEC85362a285d7a1D5D255ccD2b8106be2",
    },
  },
  testnet: true,
};

export const manta = {
  id: 169,
  name: "Manta",
  network: "manta",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://pacific-rpc.manta.network/http"],
      webSocket: ["wss://pacific-rpc.manta.network/ws"],
    },
    public: {
      http: ["https://manta-pacific.drpc.org"],
      webSocket: ["wss://pacific-rpc.manta.network/ws"],
    },
  },
  blockExplorers: {
    default: {
      name: "Manta Pacific Explorer",
      url: "https://pacific-explorer.manta.network/",
    },
  },
};
export const zklink = {
  id: 810180,
  name: "zklink",
  network: "zklink",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.zklink.io"],
      webSocket: ["wss://rpc.zklink.io"],
    },
    public: {
      http: ["https://rpc.zklink.io"],
      webSocket: ["wss://rpc.zklink.io"],
    },
  },
  blockExplorers: {
    default: {
      name: "Zklink Nova Explorer",
      url: "https://explorer.zklink.io/",
    },
  },
};


export default {
  arbitrum,
  arbitrumGoerli,
  arbitrumSepolia,
  arbitrumNova,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  baseGoerli,
  base,
  boba,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  canto,
  celo,
  celoAlfajores,
  celoCannoli,
  confluxESpace,
  cronos,
  crossbell,
  dfk,
  dogechain,
  evmos,
  evmosTestnet,
  fantom,
  fantomTestnet,
  filecoin,
  filecoinHyperspace,
  foundry,
  fuse,
  gnosis,
  gnosisChiado,
  goerli,
  haqqMainnet,
  haqqTestedge2,
  hardhat,
  harmonyOne,
  iotex,
  iotexTestnet,
  klaytn,
  lineaTestnet,
  linea,
  localhost,
  mainnet,
  mantle,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  neonDevnet,
  nexi,
  oasys,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  polygonZkEvm,
  polygonZkEvmTestnet,
  pulsechain,
  pulsechainV4,
  scrollTestnet,
  scroll,
  sepolia,
  shardeumSphinx,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  syscoin,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  tenet,
  thunderTestnet,
  wanchain,
  wanchainTestnet,
  xdc,
  xdcTestnet,
  zhejiang,
  zkSync,
  zkSyncTestnet,
  manta,
  zklink
};
