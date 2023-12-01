import { ChainName, ChainId, Contracts, Context } from '../../types';
import { ContractsAbstract } from '../abstracts/contracts';
import { DeltaswapContext } from '../../deltaswap';
import { filterByContext } from '../../utils';
import { SuiRelayer } from './relayer';
import { JsonRpcProvider } from '@mysten/sui.js';

/**
 * @category Sui
 */
export class SuiContracts<
  T extends DeltaswapContext,
> extends ContractsAbstract<T> {
  protected _contracts: Map<ChainName, any>;
  readonly context: T;
  readonly provider: JsonRpcProvider;

  constructor(context: T, provider: JsonRpcProvider) {
    super();
    this.context = context;
    this.provider = provider;
    this._contracts = new Map();
    const chains = filterByContext(context.conf, Context.SUI);
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
    if (!contracts) throw new Error(`no Sui contracts found for ${chain}`);
    return contracts;
  }

  /**
   * Returns core deltaswap contract for the chain
   *
   * @returns An interface for the core contract, undefined if not found
   */
  getCore(chain: ChainName | ChainId) {
    return undefined;
  }

  /**
   * Returns core deltaswap contract for the chain
   *
   * @returns An interface for the core contract, errors if not found
   */
  mustGetCore(chain: ChainName | ChainId) {
    throw new Error('not implemented');
  }

  /**
   * Returns deltaswap bridge contract for the chain
   *
   * @returns An interface for the bridge contract, undefined if not found
   */
  getBridge(chain: ChainName | ChainId) {
    return undefined;
  }

  /**
   * Returns deltaswap bridge contract for the chain
   *
   * @returns An interface for the bridge contract, errors if not found
   */
  mustGetBridge(chain: ChainName | ChainId) {
    throw new Error('not implemented');
  }

  /**
   * Returns deltaswap NFT bridge contract for the chain
   *
   * @returns An interface for the NFT bridge contract, undefined if not found
   */
  getNftBridge(chain: ChainName | ChainId) {
    return undefined;
  }

  /**
   * Returns deltaswap NFT bridge contract for the chain
   *
   * @returns An interface for the NFT bridge contract, errors if not found
   */
  mustGetNftBridge(chain: ChainName | ChainId) {
    throw new Error('not implemented');
  }

  /**
   * Returns deltaswap Token Bridge Relayer contract for the chain
   *
   * @returns An interface for the Token Bridge Relayer contract, undefined if not found
   */
  getTokenBridgeRelayer(chain: ChainName | ChainId): any {
    const { relayer: suiRelayerObjectId, suiRelayerPackageId } =
      this.mustGetContracts(chain);
    if (!suiRelayerObjectId || !suiRelayerPackageId) return undefined;
    return new SuiRelayer(
      this.provider,
      suiRelayerObjectId,
      suiRelayerPackageId,
    );
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
    return undefined;
  }

  /**
   * Returns deltaswap CCTP relayer contract for the chain
   *
   * @returns An interface for the Deltaswap CCTP relayer contract, errors if not found
   */
  mustGetDeltaswapCircleRelayer(chain: ChainName | ChainId): any {
    throw new Error(
      `Deltaswap circle relayer contract for domain ${chain} not found`,
    );
  }
}
