import { ChainName, ChainId, Context, Contracts } from '../../types';
import { filterByContext } from '../../utils';
import { DeltaswapContext } from '../../deltaswap';
import { ContractsAbstract } from '../abstracts/contracts';

export class SeiContracts<
  T extends DeltaswapContext,
> extends ContractsAbstract<T> {
  protected _contracts: Map<ChainName, any>;
  protected context: T;

  constructor(context: T) {
    super();
    this.context = context;
    this._contracts = new Map();
    const chains = filterByContext(context.conf, Context.SEI);
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

  getCore(chain: ChainName | ChainId) {
    return undefined;
  }

  mustGetCore(chain: ChainName | ChainId) {
    throw new Error('Method not implemented.');
  }

  getBridge(chain: ChainName | ChainId) {
    return undefined;
  }

  mustGetBridge(chain: ChainName | ChainId) {
    throw new Error('Method not implemented.');
  }

  getNftBridge(chain: ChainName | ChainId) {
    return undefined;
  }

  mustGetNftBridge(chain: ChainName | ChainId) {
    throw new Error('Method not implemented.');
  }

  getTokenBridgeRelayer(chain: ChainName | ChainId) {
    return undefined;
  }

  mustGetTokenBridgeRelayer(chain: ChainName | ChainId) {
    throw new Error('Method not implemented.');
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
