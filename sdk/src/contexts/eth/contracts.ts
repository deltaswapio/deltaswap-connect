import { ethers_contracts } from '@deltaswapio/deltaswap-sdk/lib/esm';
import {
  Deltaswap,
  Bridge,
  NFTBridge,
} from '@deltaswapio/deltaswap-sdk/lib/esm/ethers-contracts';

import { ChainName, ChainId, Contracts, Context } from '../../types';
import { TokenBridgeRelayer } from '../../abis/TokenBridgeRelayer';
import { TokenBridgeRelayer__factory } from '../../abis/TokenBridgeRelayer__factory';
import { CircleRelayer__factory } from '../../abis/CircleRelayer__factory';
import { ContractsAbstract } from '../abstracts/contracts';
import { DeltaswapContext } from '../../deltaswap';
import { filterByContext } from '../../utils';
import { ethers } from 'ethers';

/**
 * @category EVM
 * Evm Contracts class. Contains methods for accessing ts interfaces for all available contracts
 */
export class EthContracts<
  T extends DeltaswapContext,
> extends ContractsAbstract<T> {
  protected _contracts: Map<ChainName, any>;
  readonly context: T;

  constructor(context: T) {
    super();
    this.context = context;
    this._contracts = new Map();
    const chains = filterByContext(context.conf, Context.ETH);
    chains.forEach((c) => {
      this._contracts.set(c.key, c.contracts);
    });
  }

  getContracts(chain: ChainName | ChainId): Contracts | undefined {
    const chainName = this.context.toChainName(chain);
    return this._contracts.get(chainName);
  }

  mustGetContracts(chain: ChainName | ChainId): Contracts {
    const chainName = this.context.toChainName(chain);
    const contracts = this._contracts.get(chainName);
    if (!contracts) throw new Error(`no EVM contracts found for ${chain}`);
    return contracts;
  }

  /**
   * Returns core deltaswap contract for the chain
   *
   * @returns An interface for the core contract, undefined if not found
   */
  getCore(chain: ChainName | ChainId): Deltaswap | undefined {
    const connection = this.context.mustGetConnection(chain);
    const address = this.mustGetContracts(chain).core;
    if (!address) return undefined;
    return ethers_contracts.Deltaswap__factory.connect(address, connection);
  }

  /**
   * Returns core deltaswap contract for the chain
   *
   * @returns An interface for the core contract, errors if not found
   */
  mustGetCore(chain: ChainName | ChainId): Deltaswap {
    const core = this.getCore(chain);
    if (!core) throw new Error(`Core contract for domain ${chain} not found`);
    return core;
  }

  /**
   * Returns deltaswap bridge contract for the chain
   *
   * @returns An interface for the bridge contract, undefined if not found
   */
  getBridge(
    chain: ChainName | ChainId,
    provider?: ethers.providers.Provider,
  ): Bridge | undefined {
    const connection = provider || this.context.mustGetConnection(chain);
    const address = this.mustGetContracts(chain).token_bridge;
    if (!address) return undefined;
    return ethers_contracts.Bridge__factory.connect(address, connection);
  }

  /**
   * Returns deltaswap bridge contract for the chain
   *
   * @returns An interface for the bridge contract, errors if not found
   */
  mustGetBridge(
    chain: ChainName | ChainId,
    provider?: ethers.providers.Provider,
  ): Bridge {
    const bridge = this.getBridge(chain, provider);
    if (!bridge)
      throw new Error(`Bridge contract for domain ${chain} not found`);
    return bridge;
  }

  /**
   * Returns deltaswap NFT bridge contract for the chain
   *
   * @returns An interface for the NFT bridge contract, undefined if not found
   */
  getNftBridge(chain: ChainName | ChainId): NFTBridge | undefined {
    const connection = this.context.mustGetConnection(chain);
    const address = this.mustGetContracts(chain).nft_bridge;
    if (!address) return undefined;
    return ethers_contracts.NFTBridge__factory.connect(address, connection);
  }

  /**
   * Returns deltaswap NFT bridge contract for the chain
   *
   * @returns An interface for the NFT bridge contract, errors if not found
   */
  mustGetNftBridge(chain: ChainName | ChainId): NFTBridge {
    const nftBridge = this.getNftBridge(chain);
    if (!nftBridge)
      throw new Error(`NFT Bridge contract for domain ${chain} not found`);
    return nftBridge;
  }

  /**
   * Returns deltaswap Token Bridge Relayer contract for the chain
   *
   * @returns An interface for the Token Bridge Relayer contract, undefined if not found
   */
  getTokenBridgeRelayer(
    chain: ChainName | ChainId,
  ): TokenBridgeRelayer | undefined {
    const connection = this.context.mustGetConnection(chain);
    const address = this.mustGetContracts(chain).relayer;
    if (!address) return undefined;
    return TokenBridgeRelayer__factory.connect(address, connection);
  }

  /**
   * Returns deltaswap Token Bridge Relayer contract for the chain
   *
   * @returns An interface for the Token Bridge Relayer contract, errors if not found
   */
  mustGetTokenBridgeRelayer(chain: ChainName | ChainId): any {
    const relayer = this.getTokenBridgeRelayer(chain);
    if (!relayer)
      throw new Error(
        `Token Bridge Relayer contract for domain ${chain} not found`,
      );
    return relayer;
  }

  /**
   * Returns deltaswap CCTP relayer contract for the chain
   *
   * @returns An interface for the Deltaswap CCTP relayer contract, undefined if not found
   */
  getDeltaswapCircleRelayer(chain: ChainName | ChainId): any {
    const connection = this.context.mustGetConnection(chain);
    const address =
      this.mustGetContracts(chain).cctpContracts?.deltaswapCircleRelayer;
    if (!address) return undefined;
    return CircleRelayer__factory.connect(address, connection);
  }

  /**
   * Returns deltaswap CCTP relayer contract for the chain
   *
   * @returns An interface for the Deltaswap CCTP relayer contract, errors if not found
   */
  mustGetDeltaswapCircleRelayer(chain: ChainName | ChainId): any {
    const circleRelayer = this.getDeltaswapCircleRelayer(chain);
    if (!circleRelayer)
      throw new Error(
        `Deltaswap Circle relayer contract for domain ${chain} not found`,
      );
    return circleRelayer;
  }
}
