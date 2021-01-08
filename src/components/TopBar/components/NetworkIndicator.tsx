import React from 'react'
import Button from '../../Button'
import { Text } from 'rebass'

import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
 

export enum ChainId {
  BSC = 56,
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42
}

 

const NetworkIndicator: React.FC = () => {
  const { t, i18n } = useTranslation()

  // const { ethereum }: { ethereum: any } = useWallet()
  // console.debug ("!!! ethereum",ethereum)

  // const chainId =  Number(ethereum.chainId)

   
  const { chainId } = useWeb3React()

   console.debug ("!!! chainId",chainId)
if (chainId!==undefined){
   const CHAIN_NAME: { [chainId in ChainId]: string } = {    
    56:'Binance Smart Chain',
    1: 'ETH Mainnet',
    3: 'Ropsten Testnet',
    4: 'Rinkeby Testnet',
    5: 'Goerli Testnet',
    42: 'Kovan Testnet'
  }

 
  return (
    <StyledNetworkRoundedBox >  
         {t(CHAIN_NAME[chainId]) ?? t('Not Connected')}            
    </StyledNetworkRoundedBox>  
    )
  }else{
    return (
      <StyledNetworkRoundedBox >  
        {t('Not Connected')}        
      </StyledNetworkRoundedBox>  
    )
  }
}

const StyledNetworkRoundedBox = styled.div`
  color: white;
  background-color: coral ;
  text-align: center;
  vertical-align: middle;
  margin: auto;
  border-radius: 25px;
  border: 3px solid #223344;
  padding: 1px;
  width: 150px;
  height: 23px;
`

export default NetworkIndicator
