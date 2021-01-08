import React, { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UseWalletProvider } from 'use-wallet'
import DisclaimerModal from './components/DisclaimerModal'
import MobileMenu from './components/MobileMenu'
import TopBar from './components/TopBar'
import FarmsProvider from './contexts/Farms'
import ModalsProvider from './contexts/Modals'
import TransactionProvider from './contexts/Transactions'
import SushiProvider from './contexts/SushiProvider'
import useModal from './hooks/useModal'
import theme from './theme'

import Home from './views/Home'
import Farms from './views/Farms'
import Sales from './views/Sales'
import FXs from './views/FXs'
import ETFs from './views/ETFs'



// import Stake from './views/Stake'

import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { useEagerConnect, useInactiveListener } from './hooks/hooks'
import { Web3Provider } from '@ethersproject/providers'

const App: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, chainId, account, activate, deactivate, active, error } = context

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])


  const triedEager = useEagerConnect()
  useInactiveListener(!triedEager || !!activatingConnector)

  /////

  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu])



  return (
    <Providers>
      <Router>
        <TopBar onPresentMobileMenu={handlePresentMobileMenu} />
        <MobileMenu onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/farms">
            <Farms />
          </Route>

          <Route path="/sales">
            <Sales />
          </Route>

          <Route path="/fxs">
            <FXs />
          </Route>


          <Route path="/etfs">
            <ETFs />
          </Route>


{/* 
          <Route path="/staking">
            <Stake />
          </Route> */}

          
        </Switch>
      </Router>
      <Disclaimer />
    </Providers>
  )
}

const Providers: React.FC = ({ children }) => {
  const { chainId } = useWeb3React()

  return (
    <ThemeProvider theme={theme}>
      <UseWalletProvider
        chainId={chainId!== undefined?chainId:56}
        connectors={{
          // walletconnect: { rpcUrl: 'https://mainnet.eth.aragon.network/' },
          walletconnect: { rpcUrl: 'https://ropsten.infura.io/v3/15cc15c962cd40fe8fbb85feb1ca3df5' },
          portis: { dAppId: '1a17fc09-d898-4112-99ae-b736232586c1' },
          

        }}
      >
        <SushiProvider>
          <TransactionProvider>
            <FarmsProvider>
              <ModalsProvider>{children}</ModalsProvider>
            </FarmsProvider>
          </TransactionProvider>
        </SushiProvider>
      </UseWalletProvider>
    </ThemeProvider>
  )
}

const Disclaimer: React.FC = () => {
  const markSeen = useCallback(() => {
    localStorage.setItem('disclaimer', 'seen')
  }, [])

  const [onPresentDisclaimerModal] = useModal(
    <DisclaimerModal onConfirm={markSeen} />,
  )

  useEffect(() => {
    const seenDisclaimer = true // localStorage.getItem('disclaimer')
    if (!seenDisclaimer) {
      onPresentDisclaimerModal()
    }
  }, [])

  return <div />
}

export default App
