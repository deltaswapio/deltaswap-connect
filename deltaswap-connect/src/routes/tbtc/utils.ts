import { ChainId, ChainName } from '@deltaswapio/deltaswap-connect-sdk';
import { wh } from 'utils/sdk';

export const isTBTCCanonicalChain = (chain: ChainId | ChainName): boolean =>
  !!wh.getContracts(chain)?.tbtcGateway;
