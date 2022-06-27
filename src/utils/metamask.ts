import BigNumber from 'bignumber.js'
import store from '../state'
import { updateBalance as updateCurrentBalace } from '../state/wallet/actions'

export namespace Metamask {
  export const updateBalance = async (library: any, account: string) => {
    library.getBalance(account).then((balance: BigNumber) => {
      const dispatch = store.dispatch
      dispatch(updateCurrentBalace({ balance: balance.toString(10) }))
    })
  }
}
