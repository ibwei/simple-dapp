import React from 'react'
import { FunctionComponent } from 'react'
import styled from 'styled-components'
import AppFooter from '../components/AppFooter'
import AppHeader from '../components/AppHeader/index'

const AppContentWrap = styled.div`
  height: auto;
  background: #fff;
`

// Not fullscreen mode
const AppBaseLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <AppHeader />
      <AppContentWrap style={{ marginTop: '80px' }}>{children}</AppContentWrap>
      {/* <AppFooter /> */}
    </>
  )
}

// App layout
const AppLayout: FunctionComponent = ({ children }) => {
  const isFullScreen = localStorage.getItem('FULLSCREEN_MODE')
  if (isFullScreen) return <div>{children}</div>
  return <AppBaseLayout>{children}</AppBaseLayout>
}

export default AppLayout
