import {
  Connection,
  PublicKey,
  PublicKeyInitData,
  SystemProgram,
  SYSVAR_RENT_PUBKEY,
  TransactionInstruction,
} from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { createReadOnlyTokenBridgeProgramInterface } from '../program';
import { deriveClaimKey, derivePostedVaaKey } from '../../deltaswap';
import {
  deriveEndpointKey,
  deriveMintAuthorityKey,
  deriveSplTokenMetadataKey,
  deriveWrappedMetaKey,
  deriveTokenBridgeConfigKey,
  deriveWrappedMintKey,
} from '../accounts';
import {
  isBytes,
  parseAttestMetaVaa,
  ParsedAttestMetaVaa,
  SignedVaa,
} from '../../../../../vaa';
import { SplTokenMetadataProgram } from '../../utils';

export function createCreateWrappedInstruction(
  connection: Connection,
  tokenBridgeProgramId: PublicKeyInitData,
  deltaswapProgramId: PublicKeyInitData,
  payer: PublicKeyInitData,
  vaa: SignedVaa | ParsedAttestMetaVaa,
): TransactionInstruction {
  const methods = createReadOnlyTokenBridgeProgramInterface(
    tokenBridgeProgramId,
    connection,
  ).methods.createWrapped();

  // @ts-ignore
  return methods._ixFn(...methods._args, {
    accounts: getCreateWrappedAccounts(
      tokenBridgeProgramId,
      deltaswapProgramId,
      payer,
      vaa,
    ) as any,
    signers: undefined,
    remainingAccounts: undefined,
    preInstructions: undefined,
    postInstructions: undefined,
  });
}

export interface CreateWrappedAccounts {
  payer: PublicKey;
  config: PublicKey;
  endpoint: PublicKey;
  vaa: PublicKey;
  claim: PublicKey;
  mint: PublicKey;
  wrappedMeta: PublicKey;
  splMetadata: PublicKey;
  mintAuthority: PublicKey;
  rent: PublicKey;
  systemProgram: PublicKey;
  tokenProgram: PublicKey;
  splMetadataProgram: PublicKey;
  deltaswapProgram: PublicKey;
}

export function getCreateWrappedAccounts(
  tokenBridgeProgramId: PublicKeyInitData,
  deltaswapProgramId: PublicKeyInitData,
  payer: PublicKeyInitData,
  vaa: SignedVaa | ParsedAttestMetaVaa,
): CreateWrappedAccounts {
  const parsed = isBytes(vaa) ? parseAttestMetaVaa(vaa) : vaa;
  const mint = deriveWrappedMintKey(
    tokenBridgeProgramId,
    parsed.tokenChain,
    parsed.tokenAddress,
  );
  return {
    payer: new PublicKey(payer),
    config: deriveTokenBridgeConfigKey(tokenBridgeProgramId),
    endpoint: deriveEndpointKey(
      tokenBridgeProgramId,
      parsed.emitterChain,
      parsed.emitterAddress,
    ),
    vaa: derivePostedVaaKey(deltaswapProgramId, parsed.hash),
    claim: deriveClaimKey(
      tokenBridgeProgramId,
      parsed.emitterAddress,
      parsed.emitterChain,
      parsed.sequence,
    ),
    mint,
    wrappedMeta: deriveWrappedMetaKey(tokenBridgeProgramId, mint),
    splMetadata: deriveSplTokenMetadataKey(mint),
    mintAuthority: deriveMintAuthorityKey(tokenBridgeProgramId),
    rent: SYSVAR_RENT_PUBKEY,
    systemProgram: SystemProgram.programId,
    tokenProgram: TOKEN_PROGRAM_ID,
    splMetadataProgram: SplTokenMetadataProgram.programId,
    deltaswapProgram: new PublicKey(deltaswapProgramId),
  };
}
