import { KCC } from './index'

export interface NavItemType {
  name: any
  hasChildren?: boolean
  hasGroup?: boolean
  route?: string
  childrens?: NavItemChildrenType[] | NavItemGroupType[]
}

export interface NavItemChildrenType {
  title: string
  subTitle: string
  route: string
  icon: string
  setOpenKeys?: any
}

export interface NavItemGroupType {
  groupName: string
  groupMember: NavItemChildrenType[]
}

export const HOME_MENU_LIST = [
  {
    title: 'Developer Docs',
    subTitle: 'Start building on KuCoin Community Chain',
    route: KCC.DOCS_URL,
    icon: require('../assets/images/Icons/menu/docs@2x.png').default,
  },
  {
    title: 'Github',
    subTitle: 'Visit our Github community',
    route: KCC.GITHUB_URL,
    icon: require('../assets/images/Icons/menu/github@2x.png').default,
  },
]

export const MENU_LIST = [
  {
    name: 'Home',
    route: '/home',
    hasChildren: false,
  },
]
