import { CONFIG } from '@wormhole-foundation/wormhole-connect-sdk';
import { NetworksConfig, TokenConfig, Icon, GasEstimates } from './types';

const { chains } = CONFIG.TESTNET;

export const TESTNET_NETWORKS: NetworksConfig = {
  goerli: {
    ...chains.goerli!,
    displayName: 'Goerli',
    explorerUrl: 'https://goerli.etherscan.io/',
    explorerName: 'Etherscan',
    gasToken: 'ETH',
    chainId: 5,
    icon: Icon.ETH,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  mumbai: {
    ...chains.mumbai!,
    displayName: 'Mumbai',
    explorerUrl: 'https://mumbai.polygonscan.com/',
    explorerName: 'Polygonscan',
    gasToken: 'MATIC',
    chainId: 80001,
    icon: Icon.POLYGON,
    automaticRelayer: true,
    maxBlockSearch: 1000,
  },
  bsc: {
    ...chains.bsc!,
    displayName: 'BSC',
    explorerUrl: 'https://testnet.bscscan.com/',
    explorerName: 'BscScan',
    gasToken: 'BNB',
    chainId: 97,
    icon: Icon.BSC,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  fuji: {
    ...chains.fuji!,
    displayName: 'Fuji',
    explorerUrl: 'https://testnet.snowtrace.io/',
    explorerName: 'Snowtrace',
    gasToken: 'AVAX',
    chainId: 43113,
    icon: Icon.AVAX,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  fantom: {
    ...chains.fantom!,
    displayName: 'Fantom',
    explorerUrl: 'https://testnet.ftmscan.com/',
    explorerName: 'FtmScan',
    gasToken: 'FTM',
    chainId: 4002,
    icon: Icon.FANTOM,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  alfajores: {
    ...chains.alfajores!,
    displayName: 'Alfajores',
    explorerUrl: 'https://explorer.celo.org/alfajores/',
    explorerName: 'Celo Explorer',
    gasToken: 'CELO',
    chainId: 44787,
    icon: Icon.CELO,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  moonbasealpha: {
    ...chains.moonbasealpha!,
    displayName: 'Moonbase',
    explorerUrl: 'https://moonbase.moonscan.io/',
    explorerName: 'Moonscan',
    gasToken: 'GLMR',
    chainId: 1287,
    icon: Icon.GLMR,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
  solana: {
    ...chains.solana!,
    displayName: 'Solana',
    explorerUrl: 'https://explorer.solana.com/',
    explorerName: 'Solana Explorer',
    gasToken: 'SOL',
    chainId: 0,
    icon: Icon.SOLANA,
    automaticRelayer: false,
    maxBlockSearch: 2000,
  },
  sui: {
    ...chains.sui!,
    displayName: 'Sui',
    explorerUrl: 'https://explorer.sui.io/',
    explorerName: 'Sui Explorer',
    gasToken: 'SUI',
    chainId: 0,
    icon: Icon.SUI,
    automaticRelayer: true,
    maxBlockSearch: 0,
  },
  aptos: {
    ...chains.aptos!,
    displayName: 'Aptos',
    explorerUrl: 'https://explorer.aptoslabs.com/',
    explorerName: 'Aptos Explorer',
    gasToken: 'APT',
    chainId: 0,
    icon: Icon.APT,
    maxBlockSearch: 0,
  },
  sei: {
    ...chains.sei!,
    displayName: 'Sei',
    explorerUrl: 'https://sei.explorers.guru/',
    explorerName: 'Sei Explorer',
    gasToken: 'SEI',
    chainId: 0,
    icon: Icon.SEI,
    automaticRelayer: false,
    maxBlockSearch: 0,
  },
};

export const TESTNET_TOKENS: { [key: string]: TokenConfig } = {
  ETH: {
    key: 'ETH',
    symbol: 'ETH',
    nativeNetwork: 'goerli',
    icon: Icon.ETH,
    coinGeckoId: 'ethereum',
    color: '#62688F',
    decimals: 18,
    wrappedAsset: 'WETH',
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  WETH: {
    key: 'WETH',
    symbol: 'WETH',
    nativeNetwork: 'goerli',
    icon: Icon.ETH,
    tokenId: {
      chain: 'goerli',
      address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    },
    coinGeckoId: 'ethereum',
    color: '#62688F',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  USDCeth: {
    key: 'USDCeth',
    symbol: 'USDC',
    nativeNetwork: 'goerli',
    icon: Icon.USDC,
    tokenId: {
      chain: 'goerli',
      address: '0x07865c6e87b9f70255377e024ace6630c1eaa37f',
    },
    coinGeckoId: 'usd-coin',
    color: '#2774CA',
    decimals: 6,
    solDecimals: 6,
    suiDecimals: 6,
    aptosDecimals: 6,
    seiDecimals: 6,
  },
  MATIC: {
    key: 'MATIC',
    symbol: 'MATIC',
    nativeNetwork: 'mumbai',
    icon: Icon.POLYGON,
    coinGeckoId: 'matic-network',
    color: '#8247E5',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WMATIC',
  },
  WMATIC: {
    key: 'WMATIC',
    symbol: 'WMATIC',
    nativeNetwork: 'mumbai',
    icon: Icon.POLYGON,
    tokenId: {
      chain: 'mumbai',
      address: '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
    },
    coinGeckoId: 'matic-network',
    color: '#8247E5',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  USDCpolygon: {
    key: 'USDCpolygon',
    symbol: 'USDC',
    nativeNetwork: 'mumbai',
    icon: Icon.USDC,
    tokenId: {
      chain: 'mumbai',
      address: '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23',
    },
    coinGeckoId: 'usd-coin',
    color: '#2774CA',
    decimals: 6,
    solDecimals: 6,
    suiDecimals: 6,
    aptosDecimals: 6,
    seiDecimals: 6,
  },
  BNB: {
    key: 'BNB',
    symbol: 'BNB',
    nativeNetwork: 'bsc',
    icon: Icon.BNB,
    coinGeckoId: 'binancecoin',
    color: '#F3BA30',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WBNB',
  },
  WBNB: {
    key: 'WBNB',
    symbol: 'WBNB',
    nativeNetwork: 'bsc',
    icon: Icon.BNB,
    tokenId: {
      chain: 'bsc',
      address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    },
    coinGeckoId: 'binancecoin',
    color: '#F3BA30',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  AVAX: {
    key: 'AVAX',
    symbol: 'AVAX',
    nativeNetwork: 'fuji',
    icon: Icon.AVAX,
    coinGeckoId: 'avalanche-2',
    color: '#E84141',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WAVAX',
  },
  WAVAX: {
    key: 'WAVAX',
    symbol: 'WAVAX',
    nativeNetwork: 'fuji',
    icon: Icon.AVAX,
    tokenId: {
      chain: 'fuji',
      address: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
    },
    coinGeckoId: 'avalanche-2',
    color: '#E84141',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  USDCavax: {
    key: 'USDCavax',
    symbol: 'USDC',
    nativeNetwork: 'fuji',
    icon: Icon.USDC,
    tokenId: {
      chain: 'fuji',
      address: '0x5425890298aed601595a70AB815c96711a31Bc65',
    },
    coinGeckoId: 'usd-coin',
    color: '#2774CA',
    decimals: 6,
    solDecimals: 6,
    suiDecimals: 6,
    aptosDecimals: 6,
    seiDecimals: 6,
  },
  FTM: {
    key: 'FTM',
    symbol: 'FTM',
    nativeNetwork: 'fantom',
    icon: Icon.FANTOM,
    coinGeckoId: 'fantom',
    color: '#12B4EC',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WFTM',
  },
  WFTM: {
    key: 'WFTM',
    symbol: 'WFTM',
    nativeNetwork: 'fantom',
    icon: Icon.FANTOM,
    tokenId: {
      chain: 'fantom',
      address: '0xf1277d1Ed8AD466beddF92ef448A132661956621',
    },
    coinGeckoId: 'fantom',
    color: '#12B4EC',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  CELO: {
    key: 'CELO',
    symbol: 'CELO',
    nativeNetwork: 'alfajores',
    icon: Icon.CELO,
    tokenId: {
      chain: 'alfajores',
      address: '0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9',
    },
    coinGeckoId: 'celo',
    color: '#35D07E',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  GLMR: {
    key: 'GLMR',
    symbol: 'GLMR',
    nativeNetwork: 'moonbasealpha',
    icon: Icon.GLMR,
    coinGeckoId: 'moonbeam',
    color: '#e1147b',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WGLMR',
  },
  WGLMR: {
    key: 'WGLMR',
    symbol: 'WGLMR',
    nativeNetwork: 'moonbasealpha',
    icon: Icon.GLMR,
    tokenId: {
      chain: 'moonbasealpha',
      address: '0xD909178CC99d318e4D46e7E66a972955859670E1',
    },
    coinGeckoId: 'moonbeam',
    color: '#e1147b',
    decimals: 18,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  SOL: {
    key: 'SOL',
    symbol: 'SOL',
    nativeNetwork: 'solana',
    icon: Icon.SOLANA,
    coinGeckoId: 'solana',
    color: '#8457EF',
    decimals: 9,
    solDecimals: 9,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
    wrappedAsset: 'WSOL',
  },
  WSOL: {
    key: 'WSOL',
    symbol: 'WSOL',
    nativeNetwork: 'solana',
    tokenId: {
      chain: 'solana',
      address: 'So11111111111111111111111111111111111111112',
    },
    icon: Icon.SOLANA,
    coinGeckoId: 'solana',
    color: '#8457EF',
    decimals: 9,
    solDecimals: 9,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  USDCsol: {
    key: 'USDCsol',
    symbol: 'USDC',
    nativeNetwork: 'solana',
    tokenId: {
      chain: 'solana',
      address: '4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU',
    },
    icon: Icon.USDC,
    coinGeckoId: 'usd-coin',
    color: '#2774CA',
    decimals: 6,
    solDecimals: 6,
    suiDecimals: 6,
    aptosDecimals: 6,
    seiDecimals: 6,
  },
  SUI: {
    key: 'SUI',
    symbol: 'SUI',
    nativeNetwork: 'sui',
    tokenId: {
      chain: 'sui',
      address: '0x2::sui::SUI',
    },
    icon: Icon.SUI,
    coinGeckoId: 'sui',
    color: '#8457EF',
    decimals: 9,
    solDecimals: 8,
    suiDecimals: 9,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  APT: {
    key: 'APT',
    symbol: 'APT',
    nativeNetwork: 'aptos',
    tokenId: {
      chain: 'aptos',
      address: '0x1::aptos_coin::AptosCoin',
    },
    icon: Icon.APT,
    coinGeckoId: 'aptos',
    color: '#8457EF',
    decimals: 8,
    solDecimals: 8,
    suiDecimals: 8,
    aptosDecimals: 8,
    seiDecimals: 8,
  },
  SEI: {
    key: 'SEI',
    symbol: 'SEI',
    nativeNetwork: 'sei',
    tokenId: {
      chain: 'sei',
      address: 'usei',
    },
    icon: Icon.SEI,
    coinGeckoId: 'sei',
    color: '#FFFFFF',
    decimals: 6,
    solDecimals: 6,
    suiDecimals: 6,
    aptosDecimals: 6,
    seiDecimals: 6,
  },
};

export const TESTNET_GAS_ESTIMATES: GasEstimates = {
  goerli: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 200000,
  },
  mumbai: {
    sendNative: 200000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 250000,
    claim: 200000,
  },
  bsc: {
    sendNative: 100000,
    sendToken: 200000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 175000,
  },
  fuji: {
    sendNative: 100000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 200000,
  },
  fantom: {
    sendNative: 150000,
    sendToken: 150000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 200000,
  },
  alfajores: {
    sendNative: 100000,
    sendToken: 100000,
    sendNativeWithRelay: 300000,
    sendTokenWithRelay: 300000,
    claim: 175000,
  },
  moonbasealpha: {
    sendNative: 100000,
    sendToken: 200000,
    sendNativeWithRelay: 200000,
    sendTokenWithRelay: 300000,
    claim: 200000,
  },
  solana: {
    sendNative: 15000,
    sendToken: 15000,
    claim: 25000,
  },
  sui: {
    sendNative: 20000000,
    sendToken: 20000000,
    sendNativeWithRelay: 20000000,
    sendTokenWithRelay: 20000000,
    claim: 20000000,
  },
  aptos: {
    sendNative: 34,
    sendToken: 34,
    claim: 615,
  },
  sei: {
    claim: 1000000,
    sendNative: 1000000,
    sendToken: 1000000,
  },
};
