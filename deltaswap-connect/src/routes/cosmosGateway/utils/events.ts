import { CHAIN_ID_DELTACHAIN } from '@deltaswapio/deltaswap-sdk';
import { utils } from 'ethers';
import {
  SignedRelayTransferMessage,
  SignedTokenTransferMessage,
} from '../../types';
import { getCosmWasmClient } from './client';
import { getTranslatorAddress } from './contracts';
import {
  findDestinationIBCTransferTx,
  getTransactionIBCTransferInfo,
} from './transaction';
import { BridgeRoute } from '../../bridge';
import { isGatewayChain } from '../../../utils/cosmos';

export async function fetchRedeemedEventNonCosmosSource(
  message: SignedTokenTransferMessage | SignedRelayTransferMessage,
): Promise<string | null> {
  const deltachainClient = await getCosmWasmClient(CHAIN_ID_DELTACHAIN);
  if (!message.payload) {
    throw new Error('Missing payload from transfer');
  }

  // find the transaction on deltachain based on the gateway transfer payload
  // since it has a nonce, we can assume it will be unique
  const txs = await deltachainClient.searchTx([
    { key: 'wasm.action', value: 'complete_transfer_with_payload' },
    { key: 'wasm.recipient', value: getTranslatorAddress() },
    {
      key: 'wasm.transfer_payload',
      value: Buffer.from(utils.arrayify(message.payload)).toString('base64'),
    },
  ]);
  if (txs.length === 0) {
    return null;
  }
  if (txs.length > 1) {
    throw new Error('Multiple transactions found');
  }

  // extract the ibc transfer info from the transaction logs
  const ibcInfo = getTransactionIBCTransferInfo(txs[0], 'send_packet');

  // find the transaction on the target chain based on the ibc transfer info
  const destTx = await findDestinationIBCTransferTx(message.toChain, ibcInfo);
  if (!destTx) {
    throw new Error(`No redeem transaction found on chain ${message.toChain}`);
  }
  return destTx.hash;
}

export async function fetchRedeemedEventCosmosSource(
  message: SignedTokenTransferMessage | SignedRelayTransferMessage,
): Promise<string | null> {
  if (!isGatewayChain(message.toChain)) {
    return (await new BridgeRoute().tryFetchRedeemTx(message)) || null;
  }

  // find tx in the source chain and extract the ibc transfer to deltachain
  const sourceClient = await getCosmWasmClient(message.fromChain);
  const tx = await sourceClient.getTx(message.sendTx);
  if (!tx) return null;
  const sourceIbcInfo = getTransactionIBCTransferInfo(tx, 'send_packet');

  // find tx in the ibc receive in deltachain and extract the ibc transfer to the dest tx
  const deltachainTx = await findDestinationIBCTransferTx(
    CHAIN_ID_DELTACHAIN,
    sourceIbcInfo,
  );
  if (!deltachainTx) return null;
  const deltachainToDestIbcInfo = getTransactionIBCTransferInfo(
    deltachainTx,
    'send_packet',
  );

  // find the tx that deposits the funds in the final recipient
  const destTx = await findDestinationIBCTransferTx(
    message.toChain,
    deltachainToDestIbcInfo,
  );
  if (!destTx) return null;
  return destTx.hash;
}
