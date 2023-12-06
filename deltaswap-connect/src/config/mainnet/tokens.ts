import { Icon, TokensConfig } from '../types';

export const MAINNET_TOKENS: TokensConfig = {
  ETH: {
    key: 'ETH',
    symbol: 'ETH',
    nativeChain: 'ethereum',
    icon: Icon.ETH,
    coinGeckoId: 'ethereum',
    color: '#62688F',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },
  MATIC: {
    key: 'MATIC',
    symbol: 'MATIC',
    nativeChain: 'polygon',
    icon: Icon.POLYGON,
    coinGeckoId: 'matic-network',
    color: '#8247E5',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },
  PLQ: {
    key: 'PLQ',
    symbol: 'PLQ',
    nativeChain: 'planq',
    icon: Icon.PLQ,
    coinGeckoId: 'planq',
    color: '#47e0e5',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    wrappedAsset: 'WPLQ',
  },
  WPLQ: {
    key: 'WPLQ',
    symbol: 'WPLQ',
    nativeChain: 'planq',
    icon: Icon.PLQ,
    tokenId: {
      chain: 'planq',
      address: '0x5EBCdf1De1781e8B5D41c016B0574aD53E2F6E1A',
    },
    coinGeckoId: 'planq',
    color: '#47e0e5',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    foreignAssets: {
      bsc: {
        address: '0x13ef69f64de07d14517b667728db8b9f23856a38',
        decimals: 18,
      },

    },
  },
  BNB: {
    key: 'BNB',
    symbol: 'BNB',
    nativeChain: 'bsc',
    icon: Icon.BNB,
    coinGeckoId: 'binancecoin',
    color: '#F3BA30',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    wrappedAsset: 'WBNB',
  },
  WBNB: {
    key: 'WBNB',
    symbol: 'WBNB',
    nativeChain: 'bsc',
    icon: Icon.BNB,
    tokenId: {
      chain: 'bsc',
      address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    coinGeckoId: 'binancecoin',
    color: '#F3BA30',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    foreignAssets: {
      planq: {
        address: '0xeAcB5c09612F90eb2EE3bA9896d8421084FFb921',
        decimals: 18,
      },

    },
  },
  USDCbnb: {
    key: 'USDCbnb',
    symbol: 'USDC',
    nativeChain: 'bsc',
    icon: Icon.USDC,
    tokenId: {
      chain: 'bsc',
      address: '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
    },
    coinGeckoId: 'usd-coin',
    color: '#2774CA',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    foreignAssets: {
      planq: {
        address: '0x75E20C5d4aade76143b8b74d1C5E2865347f9d3B',
        decimals: 18,
      },
    },
  },
  USDTbnb: {
    key: 'USDTbnb',
    symbol: 'USDT',
    nativeChain: 'bsc',
    icon: Icon.USDT,
    tokenId: {
      chain: 'bsc',
      address: '0x55d398326f99059ff775485246999027b3197955',
    },
    coinGeckoId: 'tether',
    color: '#27caca',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
    foreignAssets: {
      planq: {
        address: '0xfD6fF17b542260f95660BBD71470Fe6eEC72801D',
        decimals: 18,
      },
    },
  },
  AVAX: {
    key: 'AVAX',
    symbol: 'AVAX',
    nativeChain: 'avalanche',
    icon: Icon.AVAX,
    coinGeckoId: 'avalanche-2',
    color: '#E84141',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },

  FTM: {
    key: 'FTM',
    symbol: 'FTM',
    nativeChain: 'fantom',
    icon: Icon.FANTOM,
    coinGeckoId: 'fantom',
    color: '#12B4EC',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },

  GLMR: {
    key: 'GLMR',
    symbol: 'GLMR',
    nativeChain: 'moonbeam',
    icon: Icon.GLMR,
    coinGeckoId: 'moonbeam',
    color: '#e1147b',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },

  SOL: {
    key: 'SOL',
    symbol: 'SOL',
    nativeChain: 'solana',
    icon: Icon.SOLANA,
    coinGeckoId: 'solana',
    color: '#8457EF',
    decimals: {
      Ethereum: 9,
      Solana: 9,
      default: 8,
    },
  },

  ETHbase: {
    key: 'ETHbase',
    symbol: 'ETH',
    displayName: 'ETH (Base)',
    nativeChain: 'base',
    icon: Icon.ETH,
    coinGeckoId: 'ethereum',
    color: '#62688F',
    decimals: {
      Ethereum: 18,
      default: 8,
    },
  },

  OSMO: {
    key: 'OSMO',
    symbol: 'OSMO',
    nativeChain: 'osmosis',
    tokenId: {
      chain: 'osmosis',
      address: 'uosmo',
    },
    icon: Icon.OSMO,
    coinGeckoId: 'osmosis',
    color: '#FFFFFF',
    decimals: {
      default: 6,
    },
  },

  EVMOS: {
    key: 'EVMOS',
    symbol: 'EVMOS',
    nativeChain: 'evmos',
    tokenId: {
      chain: 'evmos',
      address: 'aevmos',
    },
    icon: Icon.EVMOS,
    coinGeckoId: 'evmos',
    color: '#ed4e33',
    decimals: {
      Cosmos: 18,
      Ethereum: 18,
      default: 8,
    },
  },
  KUJI: {
    key: 'KUJI',
    symbol: 'KUJI',
    nativeChain: 'kujira',
    tokenId: {
      chain: 'kujira',
      address: 'ukuji',
    },
    icon: Icon.KUJI,
    coinGeckoId: 'kujira',
    color: '#f51f1e',
    decimals: {
      default: 6,
    },
  },
};
