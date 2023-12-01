import { Network } from '@deltaswapio/deltaswap-sdk';

export const getSeiChainId = (env: Network) =>
  env === 'MAINNET' ? 'pacific-1' : 'atlantic-2';
