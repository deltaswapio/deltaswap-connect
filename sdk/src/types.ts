import { Network as Environment } from '@deltaswapio/deltaswap-sdk';
import { BigNumber } from 'ethers';
import { MainnetChainId, MainnetChainName } from './config/MAINNET';
import { TestnetChainId, TestnetChainName } from './config/TESTNET';
import { AptosContext, AptosContracts } from './contexts/aptos';
import { EthContext, EthContracts } from './contexts/eth';
import { SolanaContext, SolContracts } from './contexts/solana';
import { SuiContext, SuiContracts } from './contexts/sui';
import { SeiContext, SeiContracts } from './contexts/sei';
import { DeltaswapContext } from './deltaswap';
import { DevnetChainId, DevnetChainName } from './config/DEVNET';
import { CosmosContext } from './contexts/cosmos';
import { CosmosContracts } from './contexts/cosmos/contracts';

export const NATIVE = 'native';
// TODO: conditionally set these types
export type ChainName = MainnetChainName | TestnetChainName | DevnetChainName;
export type ChainId = MainnetChainId | TestnetChainId | DevnetChainId;
export enum Context {
  ETH = 'Ethereum',
  TERRA = 'Terra',
  INJECTIVE = 'Injective',
  XPLA = 'XPLA',
  SOLANA = 'Solana',
  ALGORAND = 'Algorand',
  NEAR = 'Near',
  APTOS = 'Aptos',
  SUI = 'Sui',
  SEI = 'Sei',
  COSMOS = 'Cosmos',
  OTHER = 'OTHER',
}

export type ChainResourceMap = {
  [chain in ChainName]?: string;
};

export type Contracts = {
  core?: string;
  token_bridge?: string;
  nft_bridge?: string;
  relayer?: string;
  cctpContracts?: {
    cctpTokenMessenger: string;
    cctpMessageTransmitter: string;
    deltaswapCCTP?: string;
    deltaswapCircleRelayer?: string;
  };
  suiOriginalTokenBridgePackageId?: string;
  suiRelayerPackageId?: string;
  seiTokenTranslator?: string;
  ibcShimContract?: string;
  tbtcGateway?: string;
};

export type ChainConfig = {
  key: ChainName;
  id: ChainId;
  context: Context;
  contracts: Contracts;
  finalityThreshold: number;
  nativeTokenDecimals: number;
  cctpDomain?: number;
};

export type DeltaswapConfig = {
  env: Environment;
  rpcs: ChainResourceMap;
  rest: ChainResourceMap;
  graphql: ChainResourceMap;
  deltaswapHosts: string[];
  chains: {
    [chain in ChainName]?: ChainConfig;
  };
};

export type Address = string;

export type TokenId = {
  chain: ChainName;
  address: string;
};

export type AnyContext =
  | EthContext<DeltaswapContext>
  | SolanaContext<DeltaswapContext>
  | SuiContext<DeltaswapContext>
  | AptosContext<DeltaswapContext>
  | SeiContext<DeltaswapContext>
  | CosmosContext<DeltaswapContext>;

export type AnyContracts =
  | EthContracts<DeltaswapContext>
  | SolContracts<DeltaswapContext>
  | SuiContracts<DeltaswapContext>
  | AptosContracts<DeltaswapContext>
  | SeiContracts<DeltaswapContext>
  | CosmosContracts<DeltaswapContext>;

export interface ParsedMessage {
  sendTx: string;
  sender: string;
  amount: BigNumber;
  payloadID: number;
  recipient: string;
  toChain: ChainName;
  fromChain: ChainName;
  tokenAddress: string;
  tokenChain: ChainName;
  tokenId: TokenId;
  sequence?: BigNumber;
  emitterAddress?: string;
  block: number;
  gasFee?: BigNumber;
  payload?: string;
}

export interface ParsedRelayerPayload {
  relayerPayloadId: number;
  to: string;
  relayerFee: BigNumber;
  toNativeTokenAmount: BigNumber;
}

export type ParsedRelayerMessage = ParsedMessage & ParsedRelayerPayload;

export type AnyMessage = ParsedMessage | ParsedRelayerMessage;

export type TokenDetails = {
  symbol: string;
  decimals: number;
};

export type SendResult = Awaited<ReturnType<AnyContext['send']>>;
export type RedeemResult = Awaited<ReturnType<AnyContext['redeem']>>;
