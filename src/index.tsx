import React from 'react'
import { hydrate, render } from "react-dom";
import App from './App'
import './index.css'
import './i18n/i18n'


import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>, rootElement);
} else {
  render(<Web3ReactProvider getLibrary={getLibrary}>
    <App />
    </Web3ReactProvider>, rootElement);
}