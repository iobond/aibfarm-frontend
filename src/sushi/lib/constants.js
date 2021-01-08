import BigNumber from 'bignumber.js/bignumber'


export const SUBTRACT_GAS_LIMIT = 10000000


const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
  AIB:  '0x10bDbE943B2b5d94A6B6Fd8061C77988f0f54e93', //bsc
}

export const contractAddresses = {
  sushi: {
    56:'0xcb4441184668C4B4979C42178D4603F192F6A22A',// '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
  },
  masterChef: {
    56:'0x7A967DC0D42EBc8aBD24C8F3869f5F7cE3AcFC30', //'0x0C422dFC037dF0a29eE26Eb1004C99A5Da8f0B86',// '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
  },
  weth: {
    56:'0x9e630a25a29a203A4a696287aDe2C262C336bCb8', //aiETH //'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', //WETH on ETH
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
13 AIB   0xc5a6c8d36655213d229466cf8606b8808c670de9

*/


export const supportedPools = [

  { pid: 9,
    lpAddresses: {
      56: '0x5f73d8e78b416e4f5bbd6520c20f2912dc9eb0bc', //aiUSD-aiBTC
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //aiUSD-aiProfit  Pancake LP 
    },

    name: 'Pizza',
    type: 'sale',
    symbol: 'aiUSD-aiBTC',
    tokenSymbol: 'aiUSD-aiBTC',
    
    icon: '🍕',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51&outputCurrency=0x8e6B5fe1a237C362415502D1272F0cfcB1712b7C',
    lplink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/0x8e6B5fe1a237C362415502D1272F0cfcB1712b7C',
  },


  { pid: 8,
    lpAddresses: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //aiUSD
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //Pancake LP
    },

    name: 'Hamburger',
    type: 'sale',
    symbol: 'aiUSD-aiProfit',
    tokenSymbol: 'aiUSD-aiProfit',
    
    icon: '🍔',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51&outputCurrency=0xcb4441184668C4B4979C42178D4603F192F6A22A',
    lplink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/0xcb4441184668C4B4979C42178D4603F192F6A22A',
  },

  { pid: 7,
    lpAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //Pancake LP
    },

    name: 'Corn',
    type: 'farm',
    symbol: 'aiUSD',
    tokenSymbol: 'aiUSD',
    
    icon: '🌽',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xcb4441184668C4B4979C42178D4603F192F6A22A&outputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51',
  },

  { pid: 2,
    lpAddresses: {
      56: '0x77ae52e0553AA58b344644Fb647b911672A2bB5e', //aiRMB
    },
    tokenAddresses: {
      56: '0x77ae52e0553AA58b344644Fb647b911672A2bB5e', //aiRMB
    },

    priceAddress: {
      56: '0x0cb70b1b7d60a6856692825ed87f72c1d5beb2d1', //Pancake LP
    },

    name: 'Rice',
    type: 'farm',
    symbol: 'aiRMB',
    tokenSymbol: 'aiRMB',
    
    icon: '🍚',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xcb4441184668C4B4979C42178D4603F192F6A22A&outputCurrency=0x77ae52e0553AA58b344644Fb647b911672A2bB5e',
  },

  { pid: 4,
    lpAddresses: {
      56: '0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7', //aiCAD
    },
    tokenAddresses: {
      56: '0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7', //aiCAD
    },

    priceAddress: {
      56: '0x825fea1d19a452267a827140994ad3958799b675', //Pancake LP aiCAD-aiProfit
    },

    name: 'Potato',
    type: 'farm',
    symbol: 'aiCAD',
    tokenSymbol: 'aiCAD',
    
    icon: '🥔',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0xcb4441184668C4B4979C42178D4603F192F6A22A&outputCurrency=0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7',
  },


  {

    
    pid: 0,
    lpAddresses: {
      56: '0x10bDbE943B2b5d94A6B6Fd8061C77988f0f54e93',//'0xc5a6c8d36655213d229466cf8606b8808c670de9',
    },
    tokenAddresses: {
      56: '0x10bDbE943B2b5d94A6B6Fd8061C77988f0f54e93'//'0x4b63ce7E179d1db5dDAC5d9D54e48356CF3E8b7D',
    },

    priceAddress: {
      56: '0x72d45fbb3983c0fa03c2d57cf3f15580a02392a4', //Pancake LP
    },
   
    name: 'Apple',
    type: 'cross-chain',
    symbol: 'AIB',
    tokenSymbol: 'AIB',
    icon: '🍎',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x10bDbE943B2b5d94A6B6Fd8061C77988f0f54e93',
  },
  
  // {
  //   pid: 1,
  //   lpAddresses: {
  //     56: '', //LP
  //   },
  //   tokenAddresses: {
  //     56: '', //aiUSD
  //   },
  //   name: 'Corn',
  //   symbol: 'aiCAD',
  //   tokenSymbol: 'aiCAD',
  //   icon: '🌽',
  //   buylink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/0x9e630a25a29a203A4a696287aDe2C262C336bCb8',
  // },



  {
    pid: 6,
    lpAddresses: {
      56: '0x745de2a74c06579253aa1d5e7f5676005203225f', 
      //LP aiRMB - aiUSD (PanCake)
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiRMB
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //aiUSD-aiProfit-LP  (PanCake): 
    },


    name: 'RiceBall',
    type: 'sale',
    symbol: 'aiUSD-BNB',
    tokenSymbol: 'aiUSD-BNB',
    icon: '🍙',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51&outputCurrency=BNB',
    lplink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/ETH',
  },


  {
    pid: 1,
    lpAddresses: {
      56: '0x1777036615aad253a245e85f20ba96a6cf2d3078', 
      //LP aiETH - aiUSD (PanCake)
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
      // 56: '0x9e630a25a29a203A4a696287aDe2C262C336bCb8', //aiETH
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //aiUSD-aiProfit-LP (PanCake):
    },


    name: 'HotDog',
    type: 'sale',
    symbol: 'aiUSD-aiETH',
    tokenSymbol: 'aiUSD-aiETH',
    icon: '🌭',

    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51&outputCurrency=0x9e630a25a29a203A4a696287aDe2C262C336bCb8',


    lplink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/0x9e630a25a29a203A4a696287aDe2C262C336bCb8',
  },


  {
    pid: 3,
    lpAddresses: {
      56: '0x663b4fa5ff581351c8d2aaf6f718561a1ee72cfb', 
      //LP aiRMB - aiUSD (PanCake)
    },
    tokenAddresses: {
      56: '0x82590F3273d60d33663e09f2AcBd1A0d661cbf51', //aiUSD
    },

    priceAddress: {
      56: '0x036038519fe8c07abd17e87e1c9ace72dcc06940', //aiUSD-aiProfit-LP (PanCake):
    },


    name: 'CNY-USD',
    type: 'fx',
    symbol: 'aiUSD-aiRMB',
    tokenSymbol: 'aiUSD-aiRMB',
    icon: '🇨🇳|🇺🇸',
    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x77ae52e0553AA58b344644Fb647b911672A2bB5e&outputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51',

    lplink: 'https://exchange.pancakeswap.finance/#/add/0x82590F3273d60d33663e09f2AcBd1A0d661cbf51/0x77ae52e0553AA58b344644Fb647b911672A2bB5e',
  },

  {
    pid: 5,
    lpAddresses: {
      56: '0xfdc3a1b9469258ed257c27c095f42691b8c7e1b2', 
      //LP aiRMB - aiUSD (PanCake)
    },
    tokenAddresses: {
      56: '0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7', //aiRMB
    },

    priceAddress: {
      56: '0x825fea1d19a452267a827140994ad3958799b675', //aiCAD-aiRMB-LP (PanCake): 
    },


    name: 'CNY-CAD',
    type: 'fx',
    symbol: 'aiRMB-aiCAD',
    tokenSymbol: 'aiRMB-aiCAD',
    icon: '🇨🇳|🇨🇦',
    lplink: 'https://exchange.pancakeswap.finance/#/add/0x77ae52e0553AA58b344644Fb647b911672A2bB5e/0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7',

    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x77ae52e0553AA58b344644Fb647b911672A2bB5e&outputCurrency=0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7',
  },

 
  {
    pid: 5,
    lpAddresses: {
      56: '0xfdc3a1b9469258ed257c27c095f42691b8c7e1b2', 
      //LP aiRMB - aiUSD (PanCake)
    },
    tokenAddresses: {
      56: '0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7', //aiRMB
    },

    priceAddress: {
      56: '0x825fea1d19a452267a827140994ad3958799b675', //aiCAD-aiRMB-LP (PanCake): 
    },


    name: 'BED',
    type: 'etf',
    symbol: 'aiUSD-aiBED',
    tokenSymbol: 'aiUSD-aiBED',
    icon: '🛌',
    lplink: 'https://exchange.pancakeswap.finance/#/add/0x77ae52e0553AA58b344644Fb647b911672A2bB5e/0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7',

    buylink: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x77ae52e0553AA58b344644Fb647b911672A2bB5e&outputCurrency=0x6e8A2c29925d41db7cc28EDBF4AC999383C5B8c7',
  },

 



  
]
