import { ChainId, ChainName } from '@deltaswapio/deltaswap-connect-sdk';
import { CHAIN_ID_DELTACHAIN } from '@deltaswapio/deltaswap-sdk';
import { CHAINS } from 'config';
import { wh } from 'utils/sdk';
import { getCosmWasmClient, getQueryClient } from './client';
import { IBC_PORT } from './consts';
import { isGatewayChain } from 'utils/cosmos';

export function getTranslatorAddress(): string {
  const addr = CHAINS['deltachain']?.contracts.ibcShimContract;
  if (!addr) throw new Error('IBC Shim contract not configured');
  return addr;
}

export async function getIbcDestinationChannel(
  chain: ChainId | ChainName,
): Promise<string> {
  const sourceChannel = await getIbcSourceChannel(chain);
  const queryClient = await getQueryClient(CHAIN_ID_DELTACHAIN);
  const conn = await queryClient.ibc.channel.channel(IBC_PORT, sourceChannel);

  const destChannel = conn.channel?.counterparty?.channelId;
  if (!destChannel) {
    throw new Error(`No destination channel found on chain ${chain}`);
  }

  return destChannel;
}

export async function getIbcSourceChannel(
  chain: ChainId | ChainName,
): Promise<string> {
  const id = wh.toChainId(chain);
  if (!isGatewayChain(id))
    throw new Error(`Chain ${chain} is not a gateway chain`);
  const client = await getCosmWasmClient(CHAIN_ID_DELTACHAIN);
  const { channel } = await client.queryContractSmart(getTranslatorAddress(), {
    ibc_channel: {
      chain_id: id,
    },
  });
  return channel;
}
