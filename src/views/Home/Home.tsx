import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import { useTranslation } from 'react-i18next'


const Home: React.FC = () => {

  const { t, i18n } = useTranslation()


  return (
    <Page>
      <PageHeader
        icon={<img src={chef} height={180} />}
        title={t('Entrepreneurs are ready to seed the dreams ...')}
        subtitle={t('An Evolution crosschains with Yield Farming!')}
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
        🏆<b>{t('Super Rewards')}</b>: {t('45 Days of 10 times reward since Dec 15,2020!')}
      </StyledInfo>

      <StyledInfo>
        ⚠️<b>{t('Import Notice')}</b>: {t('Currently is only working on Binance Smart Chain!')}
      </StyledInfo>

      <Spacer size="lg" />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text={t('🚀 Startup')} to="/farms" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
