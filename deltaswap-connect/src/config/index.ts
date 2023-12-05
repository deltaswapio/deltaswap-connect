import {
  DeltaswapContext,
  MainnetChainName,
  TestnetChainName,
} from '@deltaswapio/deltaswap-connect-sdk';
import MAINNET from './mainnet';
import TESTNET from './testnet';
import DEVNET from './devnet';
import {
  TokenConfig,
  ChainConfig,
  DeltaswapConnectConfig,
  Route,
} from './types';
import { dark, light } from 'theme';
import { validateConfigs, validateDefaults } from './utils';
import { Alignment } from 'components/Header';

const el = document.getElementById('deltaswap-connect');
if (!el)
  throw new Error('must specify an anchor element with id deltaswap-connect');
const configJson = el.getAttribute('config');
export const config: DeltaswapConnectConfig = JSON.parse(configJson!) || {};

const getEnv = () => {
  const processEnv = process.env.REACT_APP_CONNECT_ENV?.toLowerCase();
  if (config.env === 'mainnet' || processEnv === 'mainnet') return 'MAINNET';
  if (config.env === 'devnet' || processEnv === 'devnet') return 'DEVNET';
  return 'TESTNET';
};

const getPageHeader = (): { text: string; align: Alignment } => {
  const defaults: { text: string; align: Alignment } = {
    text: '',
    align: 'left',
  };
  if (typeof config.pageHeader === 'string') {
    return { ...defaults, text: config.pageHeader };
  } else {
    return { ...defaults, ...config.pageHeader };
  }
};

export const ENV = getEnv();
export const isMainnet = ENV === 'MAINNET';
export const sdkConfig = DeltaswapContext.getConfig(ENV);
export const showHamburgerMenu =
  config.showHamburgerMenu === undefined || config.showHamburgerMenu === true;
export const pageHeader = getPageHeader();
export const partnerLogo = config.partnerLogo;

export const WORMSCAN = 'https://deltaswapscan.io/#/';
export const DELTASWAP_API =
  ENV === 'MAINNET'
    ? 'https://p-1.deltaswap.io/'
    : ENV === 'DEVNET'
    ? ''
    : 'https://api.testnet.deltaswapscan.io/';

export const ATTEST_URL =
  ENV === 'MAINNET'
    ? 'https://deltaswap.io/#/register'
    : ENV === 'DEVNET'
    ? ''
    : 'https://deltaswapio.github.io/example-token-bridge-ui/#/register';

export const USDC_BRIDGE_URL = config.cctpWarning?.href || '';

export const DELTASWAP_RPC_HOSTS =
  ENV === 'MAINNET'
    ? [
        'https://p-1.deltaswap.io',
        'https://p-2.deltaswap.io',
        'https://p-3.deltaswap.io',
      ]
    : ENV === 'TESTNET'
    ? ['https://deltaswap-v2-testnet-api.certus.one']
    : ['http://localhost:7071'];

export const NETWORK_DATA =
  ENV === 'MAINNET' ? MAINNET : ENV === 'DEVNET' ? DEVNET : TESTNET;

export const CHAINS = NETWORK_DATA.chains;
export const CHAINS_ARR =
  config && config.networks
    ? Object.values(CHAINS).filter((c) => config.networks!.includes(c.key))
    : (Object.values(CHAINS) as ChainConfig[]);

export const SEARCH_TX = config && config.searchTx;

export const MORE_NETWORKS = config && config.moreNetworks;
export const MORE_TOKENS = config && config.moreTokens;
export const TOKENS = NETWORK_DATA.tokens;
export const TOKENS_ARR =
  config && config.tokens
    ? Object.values(TOKENS).filter((c) => config.tokens!.includes(c.key))
    : (Object.values(TOKENS) as TokenConfig[]);

export const MENU_ENTRIES = config.menu || [];

export const ROUTES =
  config && config.routes ? config.routes : Object.values(Route);

export const RPCS =
  config && config.rpcs
    ? Object.assign({}, sdkConfig.rpcs, NETWORK_DATA.rpcs, config.rpcs)
    : Object.assign({}, sdkConfig.rpcs, NETWORK_DATA.rpcs);

export const REST =
  config && config.rest
    ? Object.assign({}, sdkConfig.rest, NETWORK_DATA.rest, config.rest)
    : Object.assign({}, sdkConfig.rest, NETWORK_DATA.rest);

export const GRAPHQL =
  config && config.graphql
    ? Object.assign({}, NETWORK_DATA.graphql, config.graphql)
    : NETWORK_DATA.graphql;

export const GAS_ESTIMATES = NETWORK_DATA.gasEstimates;

export const THEME_MODE = config && config.mode ? config.mode : 'dark';
export const CUSTOM_THEME = config && config.customTheme;
const BASE_THEME = THEME_MODE === 'dark' ? dark : light;
export const THEME = CUSTOM_THEME
  ? Object.assign({}, BASE_THEME, CUSTOM_THEME)
  : BASE_THEME;

export const CTA = config && config.cta;
export const BRIDGE_DEFAULTS =
  config && validateDefaults(config.bridgeDefaults);

export const TESTNET_TO_MAINNET_CHAIN_NAMES: {
  [k in TestnetChainName]: MainnetChainName;
} = {
  unset: 'unset',
  solana: 'solana',
  ethereum: 'ethereum',
  terra: 'terra',
  bsc: 'bsc',
  polygon: 'polygon',
  avalanche: 'avalanche',
  oasis: 'oasis',
  algorand: 'algorand',
  aurora: 'aurora',
  fantom: 'fantom',
  karura: 'karura',
  acala: 'acala',
  klaytn: 'klaytn',
  celo: 'celo',
  near: 'near',
  moonbeam: 'moonbeam',
  neon: 'neon',
  terra2: 'terra2',
  injective: 'injective',
  osmosis: 'osmosis',
  sui: 'sui',
  aptos: 'aptos',
  arbitrum: 'arbitrum',
  optimism: 'optimism',
  gnosis: 'gnosis',
  pythnet: 'pythnet',
  xpla: 'xpla',
  btc: 'btc',
  base: 'base',
  sei: 'sei',
  rootstock: 'rootstock',
  scroll: 'scroll',
  tron: 'tron',
  planq: 'planq',
  deltachain: 'deltachain',
  cosmoshub: 'cosmoshub',
  evmos: 'evmos',
  kujira: 'kujira',
  celestia: 'celestia',
  sepolia: 'sepolia',
};

validateConfigs();



