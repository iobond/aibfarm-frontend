import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Label from '../../../components/Label'
import Value from '../../../components/Value'
import useEarnings from '../../../hooks/useEarnings'
import useReward from '../../../hooks/useReward'
import { getBalanceNumber } from '../../../utils/formatBalance'
import { useTranslation } from 'react-i18next'
import useFarms from '../../../hooks/useFarms'
import BigNumber from 'bignumber.js'
import useAllStakedValue from '../../../hooks/useAllStakedValue'

interface HarvestProps {
  pid: number
}

const Harvest: React.FC<HarvestProps> = ({ pid }) => {
  const earnings = useEarnings(pid)
  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useReward(pid)
  const { t, i18n } = useTranslation()
  const [farms] = useFarms()

  const earned = new BigNumber(getBalanceNumber(earnings))

  const stakedValue = useAllStakedValue()

  var checkPID = pid
  const aiProfitIndex = farms.findIndex(
    ({ pid }) => pid === checkPID,
  )

  const aiProfitPerToken =
    aiProfitIndex >= 0 && stakedValue[aiProfitIndex]
      ? stakedValue[aiProfitIndex].aiProfitPerToken
      : new BigNumber(1124850000)

  const farm = farms.find((farm) => farm.pid === checkPID)
  const tokenName=farm? farm.tokenSymbol.toString() : 'USD'

 

  var price = aiProfitPerToken// 1124850000 //  aiProfit/ai???  
  console.debug('price', price.toString())



  return (
    <Card>
      <CardContent>
        <StyledCardContentInner>
          <StyledCardHeader>
            <CardIcon>💰</CardIcon>
            <Label text={t('Earned') + ' aiProfit '} />
            <Value value={getBalanceNumber(earnings)} />
            

            <Label text={t('Converted') + " "+
              earned
                .div(price)
                .toNumber()
                .toLocaleString('en-US')
                // .slice(0, -4)
              +" "
              
              + t(tokenName) 

            } />




          </StyledCardHeader>
          <StyledCardActions>
            <Button
              disabled={!earnings.toNumber() || pendingTx}
              text={pendingTx ? t('Harvesting ...') : t('Harvest')}
              onClick={async () => {
                setPendingTx(true)
                await onReward()
                setPendingTx(false)
              }}
            />
          </StyledCardActions>
        </StyledCardContentInner>
      </CardContent>
    </Card>
  )
}

const StyledCardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`
const StyledCardActions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing[6]}px;
  width: 100%;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledCardContentInner = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
`

export default Harvest
