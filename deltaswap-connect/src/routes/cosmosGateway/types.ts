import { ChainId } from '@deltaswapio/deltaswap-connect-sdk';

export interface GatewayTransferMsg {
  gateway_transfer: {
    chain: ChainId;
    recipient: string;
    fee: string;
    nonce: number;
  };
}

export interface FromCosmosPayload {
  gateway_ibc_token_bridge_payload: GatewayTransferMsg;
}

export interface IBCTransferInfo {
  sequence: string;
  timeout: string;
  srcChannel: string;
  dstChannel: string;
  data: string;
}

export interface IBCTransferData {
  amount: string;
  denom: string;
  memo: string;
  receiver: string;
  sender: string;
}
