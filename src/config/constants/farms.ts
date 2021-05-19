import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SPCO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3424934D95d658EBb37239b948d377792D652fd5',
    },
    tokenSymbol: 'SPCO',     // default tokens COC
    tokenAddresses: {
      97: '',
      56: '0x26Cb8741253Ac3f6fAF34d91971934e1306d3790',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'SPCO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x55992F046f4B943843cFc18766213C3B5c4c386F',
    },
    tokenSymbol: 'SPCO',     // default tokens COC
    tokenAddresses: {
      97: '',
      56: '0x26Cb8741253Ac3f6fAF34d91971934e1306d3790',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'SPCA-SPCO LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'SPCA',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    risk: 1,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 2,
    lpSymbol: 'SPC-SPCZ LP',
    lpAddresses: {
      97: '',
      56: '',
    },
    tokenSymbol: 'SPC',
    tokenAddresses: {
      97: '',
      56: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 7,
    risk: 1,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF',
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SPCO',
    lpAddresses: {
      97: '',
      56: '0x3424934D95d658EBb37239b948d377792D652fd5', // SPCO-BUSD LP
    },
    tokenSymbol: 'SPCO',    // default tokens SPCO
    tokenAddresses: {
      97: '',
      56: '0x26Cb8741253Ac3f6fAF34d91971934e1306d3790',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x3424934D95d658EBb37239b948d377792D652fd5', // SPCO-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0Ed8E0A2D99643e1e65CCA22Ed4424090B8B7458', // CAKE-BUSD LP v1
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'ETH',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc', // ETH-BUSD LP
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'SPCY',
    lpAddresses: {
      97: '',
      56: '', // SPCY-BUSD LP
    },
    tokenSymbol: 'SPCY',
    tokenAddresses: {
      97: '',
      56: '0x9D5899bc1c93b37FA79b8DB0BDc5C095A9548c9d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'SPCX',
    lpAddresses: {
      97: '',
      56: '', // SPCX-BUSD LP
    },
    tokenSymbol: 'SPCX',
    tokenAddresses: {
      97: '',
      56: '0x79e6E581003D49929fd065cE8eA5d8794CA6B9D8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'SPCA',
    lpAddresses: {
      97: '',
      56: '', // SPCA-BUSD LP
    },
    tokenSymbol: 'SPCA',
    tokenAddresses: {
      97: '',
      56: '0xc5A81Bb5bDC7E8Eb0b04E09167f93F8c388a485f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
