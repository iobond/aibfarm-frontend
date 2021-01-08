import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'


const Nav: React.FC = () => {
  const { t, i18n } = useTranslation()

  return (
    <StyledNav>
      <StyledLink exact activeClassName="active" to="/">
        {t('👨🏻‍💻Home')}
      </StyledLink>
      
      <StyledLink exact activeClassName="active" to="/farms">
      {t('👩‍🌾Farm')} 
      </StyledLink>

      <StyledLink exact activeClassName="active" to="/sales">
      {t('👨🏻‍🍳Sale')} 
      </StyledLink>      

      {/* <StyledLink exact activeClassName="active" to="#">
      {t('🏭Make')} 
      </StyledLink>

      <StyledLink exact activeClassName="active" to="#">
      {t('📊Stock')} 
      </StyledLink>
       */}

<StyledLink exact activeClassName="active" to="/etfs">
      {t('📦ETF')} 
      </StyledLink>   
      

      <StyledLink exact activeClassName="active" to="/fxs">
      {t('💰FX')} 
      </StyledLink>
   
      <StyledAbsoluteLink
        href= {'https://'+t('aibfarm.gitbook.io')}
        target="_blank"
      >
      {t('💬About')}
      </StyledAbsoluteLink>

    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 500px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

const StyledAbsoluteLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  font-weight: 700;
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
  &.active {
    color: ${(props) => props.theme.color.primary.main};
  }
  @media (max-width: 500px) {
    padding-left: ${(props) => props.theme.spacing[2]}px;
    padding-right: ${(props) => props.theme.spacing[2]}px;
  }
`

export default Nav
