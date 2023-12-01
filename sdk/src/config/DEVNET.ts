import { CONTRACTS, Network as Environment } from '@certusone/deltaswap-sdk';
import { ChainConfig, Context, Contracts, DeltaswapConfig } from '../types';

/**
 * devnet chain name to chain id mapping
 */
export const DEVNET_CHAINS = {
  ethereum: 2,
  terra2: 18,
  osmosis: 20,
  deltachain: 3104,
} as const;

/**
 * devnet chain name type
 */
export type DevnetChainName = keyof typeof DEVNET_CHAINS;
/**
 * devnet chain id type
 */
export type DevnetChainId = (typeof DEVNET_CHAINS)[DevnetChainName];
/**
 * chain name to contracts mapping
 */
export type ChainContracts = {
  [chain in DevnetChainName]: Contracts;
};

const DEVNET: { [chain in DevnetChainName]: ChainConfig } = {
  ethereum: {
    key: 'ethereum',
    id: 2,
    context: Context.ETH,
    contracts: {
      core: '0xC89Ce4735882C9F0f0FE26686c53074E09B0D550',
      token_bridge: '0x0290FB167208Af455bB137780163b7B7a9a10C16',
    },
    finalityThreshold: 64,
    nativeTokenDecimals: 18,
  },
  osmosis: {
    key: 'osmosis',
    id: 20,
    context: Context.COSMOS,
    contracts: {
      core: '',
      token_bridge: '',
    },
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  deltachain: {
    context: Context.COSMOS,
    key: 'deltachain',
    id: 3104,
    contracts: {
      core: 'deltaswap17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgshdnj3k',
      token_bridge:
        'deltaswap1ghd753shjuwexxywmgs4xz7x2q732vcnkm6h2pyv9s6ah3hylvrqtm7t3h',
      ibcShimContract:
        'deltaswap1mf6ptkssddfmxvhdx0ech0k03ktp6kf9yk59renau2gvht3nq2gq6n0sg2',
    },
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
  terra2: {
    context: Context.COSMOS,
    key: 'terra2',
    id: 18,
    contracts: {
      ...CONTRACTS.DEVNET.terra2,
    },
    finalityThreshold: 0,
    nativeTokenDecimals: 6,
  },
};

const env: Environment = 'DEVNET';
/**
 * default devnet chain config
 */
const DEVNET_CONFIG: DeltaswapConfig = {
  env,
  rpcs: {
    ethereum: 'http://localhost:8545',
    deltachain: 'http://localhost:26659',
    osmosis: 'http://localhost:33043',
    terra2: 'http://localhost:26658',
  },
  rest: {},
  graphql: {},
  chains: DEVNET,
  deltaswapHosts: ['http://localhost:7071'],
};

export default DEVNET_CONFIG;
