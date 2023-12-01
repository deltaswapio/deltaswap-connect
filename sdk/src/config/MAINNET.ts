import { Network as Environment, CONTRACTS } from '@deltaswapio/deltaswap-sdk';
import { DeltaswapConfig, Context, ChainConfig, Contracts } from '../types';

/**
 * Mainnet chain name to chain id mapping
 */
export const MAINNET_CHAINS = {
  solana: 1,
  ethereum: 2,
  bsc: 4,
  polygon: 5,
  avalanche: 6,
  fantom: 10,
  celo: 14,
  moonbeam: 16,
  sui: 21,
  aptos: 22,
  arbitrum: 23,
  optimism: 24,
  base: 30,
  sei: 32,
  planq: 7070,
  deltachain: 3104,
  osmosis: 20,
  cosmoshub: 4000,
  evmos: 4001,
  kujira: 4002,
} as const;

/**
 * mainnet chain name type
 */
export type MainnetChainName = keyof typeof MAINNET_CHAINS;
/**
 * mainnet chain id type
 */
export type MainnetChainId = (typeof MAINNET_CHAINS)[MainnetChainName];

/**
 * chain name to contracts mapping
 */
export type ChainContracts = {
  [chain in MainnetChainName]: Contracts;
};

const MAINNET: { [chain in MainnetChainName]: ChainConfig } = {
  bsc: {
    key: 'bsc',
    id: 4,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.bsc,
      relayer: '',
    },
    finalityThreshold: 15,
    nativeTokenDecimals: 18,
  },
  planq: {
    key: 'planq',
    id: 7070,
    context: Context.ETH,
    contracts: {
      ...CONTRACTS.MAINNET.planq,
      relayer: '',
    },
    finalityThreshold: 15,
    nativeTokenDecimals: 18,
  },
  ethereum: {
    key: 'ethereum',
    id: 2,
    context: Context.ETH,
    contracts: { },
    finalityThreshold: 64,
    nativeTokenDecimals: 18,
    cctpDomain: 0,
  },
  solana: {
    key: 'solana',
    id: 1,
    context: Context.SOLANA,
    contracts: { },
    finalityThreshold: 32,
    nativeTokenDecimals: 9,
  },
  polygon: {
    key: 'polygon',
    id: 5,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 512,
    nativeTokenDecimals: 18,
  },
  avalanche: {
    key: 'avalanche',
    id: 6,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 1,
    nativeTokenDecimals: 18,
    cctpDomain: 1,
  },
  fantom: {
    key: 'fantom',
    id: 10,
    context: Context.ETH,
    contracts: { },
    finalityThreshold: 1,
    nativeTokenDecimals: 18,
  },
  celo: {
    key: 'celo',
    id: 14,
    context: Context.ETH,
    contracts: { },
    finalityThreshold: 1,
    nativeTokenDecimals: 18,
  },
  moonbeam: {
    key: 'moonbeam',
    id: 16,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 1,
    nativeTokenDecimals: 18,
  },
  sui: {
    key: 'sui',
    id: 21,
    context: Context.SUI,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 9,
  },
  aptos: {
    key: 'aptos',
    id: 22,
    context: Context.APTOS,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 8,
  },
  arbitrum: {
    key: 'arbitrum',
    id: 23,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 18,
    cctpDomain: 3,
  },
  optimism: {
    key: 'optimism',
    id: 24,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 18,
    cctpDomain: 2,
  },
  base: {
    key: 'base',
    id: 30,
    context: Context.ETH,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 18,
    cctpDomain: 6,
  },
  sei: {
    key: 'sei',
    id: 32,
    context: Context.SEI,
    contracts: { },
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  deltachain: {
    context: Context.COSMOS,
    key: 'deltachain',
    id: 3104,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  osmosis: {
    key: 'osmosis',
    id: 20,
    context: Context.COSMOS,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  cosmoshub: {
    key: 'cosmoshub',
    id: 4000,
    context: Context.COSMOS,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  evmos: {
    key: 'evmos',
    id: 4001,
    context: Context.COSMOS,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 18,
  },
  kujira: {
    key: 'kujira',
    id: 4002,
    context: Context.COSMOS,
    contracts: {},
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
};

const env: Environment = 'MAINNET';
/**
 * default mainnet chain config
 */
const MAINNET_CONFIG: DeltaswapConfig = {
  env,
  rpcs: {
    ethereum: 'https://rpc.ankr.com/eth',
    solana: 'https://solana-mainnet.rpc.extrnode.com',
    polygon: 'https://rpc.ankr.com/polygon',
    bsc: 'https://bscrpc.com',
    avalanche: 'https://rpc.ankr.com/avalanche',
    fantom: 'https://rpc.ankr.com/fantom',
    celo: 'https://rpc.ankr.com/celo',
    moonbeam: 'https://rpc.ankr.com/moonbeam',
    sui: 'https://rpc.mainnet.sui.io',
    aptos: 'https://fullnode.mainnet.aptoslabs.com/v1',
    arbitrum: 'https://rpc.ankr.com/arbitrum',
    optimism: 'https://rpc.ankr.com/optimism',
    base: 'https://base.publicnode.com',
    sei: '', // TODO: fill in
    planq: 'https://evm-rpc.planq.network',
    deltachain: '',
    osmosis: 'https://osmosis-rpc.polkachu.com',
    cosmoshub: 'https://cosmos-rpc.polkachu.com',
    evmos: 'https://evmos-rpc.polkachu.com',
    kujira: 'https://kujira-rpc.polkachu.com',
  },
  rest: {
    sei: '',
    evmos: 'https://evmos-api.polkachu.com',
  },
  graphql: {
    aptos: 'https://indexer.mainnet.aptoslabs.com/v1/graphql',
  },
  chains: MAINNET,
  deltaswapHosts: [
    'https://deltaswap-v2-mainnet-api.certus.one',
    'https://deltaswap-v2-mainnet-api.mcf.rocks',
    'https://deltaswap-v2-mainnet-api.chainlayer.network',
    'https://deltaswap-v2-mainnet-api.staking.fund',
  ],
};

export default MAINNET_CONFIG;
