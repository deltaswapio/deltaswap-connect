import { CONFIG } from '@deltaswapio/deltaswap-connect-sdk';
import { ChainsConfig, Icon } from '../types';

const { chains } = CONFIG.MAINNET;

export const MAINNET_CHAINS: ChainsConfig = {
  planq: {
    ...chains.planq!,
    displayName: 'Planq',
    explorerUrl: 'https://evm.planq.network/',
    explorerName: 'Planq EVM Explorer',
    gasToken: 'PLQ',
    chainId: 7070,
    icon: Icon.PLQ,
    automaticRelayer: true,
    maxBlockSearch: 1000,
  },
  bsc: {
    ...chains.bsc!,
    displayName: 'BSC',
    explorerUrl: 'https://bscscan.com/',
    explorerName: 'BscScan',
    gasToken: 'BNB',
    chainId: 56,
    icon: Icon.BSC,
    automaticRelayer: true,
    maxBlockSearch: 2000,
  },
};
