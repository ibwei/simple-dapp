import FullLoading from 'components/FullLoading'
import WalletListModal from 'components/WalletListModal'
import Web3ReactManager, { getLibrary } from 'components/Web3ReactManager'
import AppLayout from 'layouts/AppLayout'
import Home from 'pages/home/'
import React, { Suspense, useEffect } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { useConnectWalletModalShow } from 'state/wallet/hooks'
import { useFetchStakerPublicData } from 'state/hooks'
import { useFetchPriceList } from 'utils/prices'

export default function App() {
  const walletListModalShow = useConnectWalletModalShow()
  useFetchPriceList()

  return (
    <Suspense fallback={<FullLoading />}>
      <Web3ReactManager getLibrary={getLibrary}>
        <AppLayout>
          <WalletListModal visible={walletListModalShow} />
          <Switch>
            <Route path="/" exact={true} component={Home} />
          </Switch>
        </AppLayout>
      </Web3ReactManager>
    </Suspense>
  )
}
