import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Nav: React.FC = () => {

  const { t, i18n } = useTranslation()

  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="https://bscscan.com/address/0x7A967DC0D42EBc8aBD24C8F3869f5F7cE3AcFC30"
      >
        {t('Contract')}
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://exchange.pancakeswap.finance/#/swap?inputCurrency=BNB&outputCurrency=0x82590F3273d60d33663e09f2AcBd1A0d661cbf51"
      >

        {t('BNB<->aiUSD')} 
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/rePs6xj835">
      {t('Community')} 
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/iobond">
      {t('Source Code')} {t('(Coming soon)')}

      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/aibcoin">
        {t('Twitter')}
      </StyledLink>
      
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
