const tokens = {
  kcs: {
    symbol: 'KCS',
    projectLink: 'https://kcc.io/',
  },
  wkcs: {
    symbol: 'WKCS',
    address: {
      321: '0x4446fc4eb47f2f6586f9faab68b3498f86c07521',
      322: '0x6551358EDC7fee9ADAB1E2E49560E68a12E82d9e',
    },
    decimals: 18,
    projectLink: '',
  },
  usdt: {
    symbol: 'USDT',
    address: {
      321: '0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48',
      322: '0x67f6a7BbE0da067A747C6b2bEdF8aBBF7D6f60dc',
    },
    decimals: 18,
    projectLink: '',
  },
  usdc: {
    symbol: 'USDC',
    address: {
      321: '0x980a5AfEf3D17aD98635F6C5aebCBAedEd3c3430',
      322: '0xD6c7E27a598714c2226404Eb054e0c074C906Fc9',
    },
    decimals: 18,
    projectLink: '',
  },
  // dai: {
  //   symbol: 'DAI',
  //   address: {
  //     321: '0xc9baa8cfdde8e328787e29b4b078abf2dadc2055',
  //     322: '0x07d169F52fCB96a9f56325f510528E0D65ca4952',
  //   },
  //   decimals: 18,
  //   projectLink: '',
  // },
  mjt: {
    symbol: 'MJT',
    address: {
      321: '0x2cA48b4eeA5A731c2B54e7C3944DBDB87c0CFB6F',
      322: '0x208EecDBc49C137D0174B848DEf5F8cB74d6951E',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  uni: {
    symbol: 'UNI',
    address: {
      321: '0xEe58E4D62b10A92dB1089d4D040B759C28aE16Cd',
      322: '0xA4d35720Fe0B62c0eea9D272F5ea73189093ec82',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  eth: {
    symbol: 'ETH',
    address: {
      321: '0xf55aF137A98607F7ED2eFEfA4cd2DfE70E4253b1',
      322: '0xF8Cb9f1D136Ff4c883320b5B4fa80048b888F459',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  btck: {
    symbol: 'BTCK',
    address: {
      321: '0xfa93c12cd345c658bc4644d1d4e1b9615952258c',
      322: '0xf57a7eE19a628e4d475b72d6c9DD847c50636e01',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  swap: {
    symbol: 'SWAP',
    address: {
      321: '0x1093488F733d7be4cF341b9e4fBFAB628caB06Aa',
      322: '0x1093488F733d7be4cF341b9e4fBFAB628caB06Aa',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  ifo: {
    symbol: 'IFO',
    address: {
      321: '0x45321F236AB711F2013Ec11413E43c5b3B0F8AB9',
      322: '0x45321F236AB711F2013Ec11413E43c5b3B0F8AB9',
    },
    decimals: 18,
    projectLink: 'https://mojitoswap.finance/',
  },
  sfi: {
    symbol: 'SFI',
    address: {
      321: '0xd55d9df77b23a7455613f2244ee4b6a45b6e2d00',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://saffron.finance',
  },
  cooha: {
    symbol: 'COOHA',
    address: {
      321: '0xd0f2e8cf77c1d3dcc4d2d03f99d959bb5ce496bf',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://coolmining.io',
  },
  abc: {
    symbol: 'ABC',
    address: {
      321: '0x7D00A44920CC0A6020942b9d0043959EEEa28741',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://coolmining.io',
  },
  pencil: {
    symbol: 'PENCIL',
    address: {
      321: '0x44a6d299eed7ac941f090257380ee1d1934fadbe',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.pencildao.com',
  },
  sand: {
    symbol: 'SAND',
    address: {
      321: '0xb12c13e66ade1f72f71834f2fc5082db8c091358',
      322: '',
    },
    decimals: 18,
    projectLink: 'https://www.sandbox.game',
  },
  avax: {
    symbol: 'AVAX',
    address: {
      321: '0x09902c010bad58f17ac8b4143d6da3b969ee1d4b',
      322: '0x09902c010bad58f17ac8b4143d6da3b969ee1d4b',
    },
    decimals: 18,
    projectLink: 'https://www.sandbox.game',
  },
  mana: {
    symbol: 'MANA',
    address: {
      321: '0xc19a5cacc2bb68ff09f2fcc695f31493a039fa5e',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  ape: {
    symbol: 'APE',
    address: {
      321: '0xdae6c2a48bfaa66b43815c5548b10800919c993e',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  babydoge: {
    symbol: 'BABYDOGE',
    address: {
      321: '0xb2c22a9fb4fc02eb9d1d337655ce079a04a526c7',
      322: '',
    },
    decimals: 9,
    projectLink: '',
  },
  multi: {
    symbol: 'MULTI',
    address: {
      321: '0x9fb9a33956351cf4fa040f65a13b835a3c8764e3',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  sax: {
    symbol: 'SAX',
    address: {
      321: '0x8367B781316eDb622DB3847f863e610edf1f4a20',
      322: '0x8367B781316eDb622DB3847f863e610edf1f4a20',
    },
    decimals: 18,
    projectLink: '',
  },
  cooga: {
    symbol: 'COOGA',
    address: {
      321: '0x23e1acd3d979025cf38c5a1b4a9df20ecaf32d5d',
      322: '0x23e1acd3d979025cf38c5a1b4a9df20ecaf32d5d',
    },
    decimals: 18,
    projectLink: '',
  },
  mls: {
    symbol: 'MLS',
    address: {
      321: '0x974E54266708292383C2989DCA5FDbb115666D4f',
      322: '0x974E54266708292383C2989DCA5FDbb115666D4f',
    },
    decimals: 18,
    projectLink: '',
  },
  boring: {
    symbol: 'BORING',
    address: {
      321: '0x5d78bf8f79a66e43f5932c1ae0b8fa6563f97f74',
      322: '0x5d78bf8f79a66e43f5932c1ae0b8fa6563f97f74',
    },
    decimals: 18,
    projectLink: '',
  },
  cfx: {
    symbol: 'CFX',
    address: {
      321: '0x4792c1ecb969b036eb51330c63bd27899a13d84e',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  ppi: {
    symbol: 'PPI',
    address: {
      321: '0x4e720dd3ac5cfe1e1fbde4935f386bb1c66f4642',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  aave: {
    symbol: 'AAVE',
    address: {
      321: '0xE76e97C157658004eE22e01C03a5e21A4655A2Fd',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  crv: {
    symbol: 'CRV',
    address: {
      321: '0x4500E16dA66b99e0C55D7B46EBBD59bc413BA171',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
  rbs: {
    symbol: 'RBS',
    address: {
      321: '0x69af9744E9de7d1f4270811185579516De1fcC27',
      322: '',
    },
    decimals: 18,
    projectLink: '',
  },
}

export default tokens
