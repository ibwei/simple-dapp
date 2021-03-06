import { useSelector } from 'react-redux'

// import { addPopup, PopupContent, removePopup, toggleWalletModal, toggleSettingsMenu } from './actions'
import { AppState } from '../index'
import { useActiveWeb3React } from 'hooks'

export function useDark(): boolean {
  return useSelector((state: AppState) => state.application.darkMode === true)
}

export function useLanguage(): string {
  return useSelector((state: AppState) => state.application.language)
}

export function useMobileMenuShow(): boolean {
  return useSelector((state: AppState) => state.application.mobileMenuShow)
}

export function useBlockNumber(): number | undefined {
  const { chainId } = useActiveWeb3React()
  return useSelector((state: AppState) => state.application.blockNumber[chainId ?? -1])
}

// get the list of active popups
/* export function useActivePopups(): AppState['application']['popupList'] {
  const list = useSelector((state: AppState) => state.application.popupList)
  return useMemo(() => list.filter(item => item.show), [list])
} */
