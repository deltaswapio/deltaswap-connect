export type TokenBridge = {
  version: '0.1.0';
  name: 'deltaswap';
  instructions: [
    {
      name: 'initialize';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'deltaswap';
          type: 'publicKey';
        },
      ];
    },
    {
      name: 'attestToken';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'wrappedMeta';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'splMetadata';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapBridge';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapMessage';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'deltaswapEmitter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapSequence';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapFeeCollector';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u32';
        },
      ];
    },
    {
      name: 'completeNative';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vaa';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'endpoint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'to';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'toFees';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'custodySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'completeWrapped';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vaa';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'endpoint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'to';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'toFees';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'wrappedMeta';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'mintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'transferWrapped';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'from';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fromOwner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'wrappedMeta';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authoritySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapBridge';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapMessage';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'deltaswapEmitter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapSequence';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapFeeCollector';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u32';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'fee';
          type: 'u64';
        },
        {
          name: 'targetAddress';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'targetChain';
          type: 'u16';
        },
      ];
    },
    {
      name: 'transferNative';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'from';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authoritySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'custodySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapBridge';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapMessage';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'deltaswapEmitter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapSequence';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapFeeCollector';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u32';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'fee';
          type: 'u64';
        },
        {
          name: 'targetAddress';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'targetChain';
          type: 'u16';
        },
      ];
    },
    {
      name: 'registerChain';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'endpoint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'vaa';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'createWrapped';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'endpoint';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'vaa';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'wrappedMeta';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'splMetadata';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mintAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'splMetadataProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'upgradeContract';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'vaa';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'claim';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'upgradeAuthority';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'spill';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'implementation';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'programData';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'tokenBridgeProgram';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'bpfLoaderUpgradeable';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [];
    },
    {
      name: 'transferWrappedWithPayload';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'from';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'fromOwner';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'wrappedMeta';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'authoritySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapBridge';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapMessage';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'deltaswapEmitter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapSequence';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapFeeCollector';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'sender';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u32';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'targetAddress';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'targetChain';
          type: 'u16';
        },
        {
          name: 'payload';
          type: 'bytes';
        },
        {
          name: 'cpiProgramId';
          type: {
            option: 'publicKey';
          };
        },
      ];
    },
    {
      name: 'transferNativeWithPayload';
      accounts: [
        {
          name: 'payer';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'config';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'from';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'mint';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'custody';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'authoritySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'custodySigner';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapBridge';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapMessage';
          isMut: true;
          isSigner: true;
        },
        {
          name: 'deltaswapEmitter';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapSequence';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'deltaswapFeeCollector';
          isMut: true;
          isSigner: false;
        },
        {
          name: 'clock';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'sender';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'rent';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'systemProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'tokenProgram';
          isMut: false;
          isSigner: false;
        },
        {
          name: 'deltaswapProgram';
          isMut: false;
          isSigner: false;
        },
      ];
      args: [
        {
          name: 'nonce';
          type: 'u32';
        },
        {
          name: 'amount';
          type: 'u64';
        },
        {
          name: 'targetAddress';
          type: {
            array: ['u8', 32];
          };
        },
        {
          name: 'targetChain';
          type: 'u16';
        },
        {
          name: 'payload';
          type: 'bytes';
        },
        {
          name: 'cpiProgramId';
          type: {
            option: 'publicKey';
          };
        },
      ];
    },
  ];
  accounts: [];
};
