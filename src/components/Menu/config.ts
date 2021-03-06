import { MenuEntry } from 'uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0x26Cb8741253Ac3f6fAF34d91971934e1306d3790',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/0x26Cb8741253Ac3f6fAF34d91971934e1306d3790/BNB', 
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x26Cb8741253Ac3f6fAF34d91971934e1306d3790',     // default tokens COC
      },
      {
        label: 'Chart',
        href: 'https://goswapp-bsc.web.app/0x1fc962aeb339c7230c4597e0df2743dccea872a8',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Fast-Food-Defi',
      },
      {
        label: 'Docs',
        href: 'https://defifastfood.gitbook.io/fast-food-defi/tokenomics/fast-food-SPCO',
      },
    ],
  },
  {
    label: 'Audit by Techrate',
    icon: 'AuditIcon',
    href: 'https://defifastfood.gitbook.io/fast-food-defi/security/audit',
  },
]

export default config
