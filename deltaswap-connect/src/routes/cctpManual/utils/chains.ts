import { ChainName } from '@deltaswapio/deltaswap-connect-sdk';
import { isMainnet } from 'config';

export const CCTPManual_CHAINS: ChainName[] = [
  'ethereum',
  'avalanche',
  'base',
  'optimism',
  'arbitrum',
];

export function getChainNameCCTP(domain: number): ChainName {
  switch (domain) {
    case 0:
      return isMainnet ? 'ethereum' : 'unset';
    case 1:
      return isMainnet ? 'avalanche' : 'unset';
    case 2:
      return isMainnet ? 'optimism' : 'unset';
    case 3:
      return isMainnet ? 'arbitrum' : 'unset';
    case 6:
      return isMainnet ? 'base' : 'unset';
  }
  throw new Error('Invalid CCTP domain');
}
