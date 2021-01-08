import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const LanguageSelector: React.FC = () => {

  const { t, i18n } = useTranslation()

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }


  return (
    <StyledLang onChange={changeLanguage}>
      <input type="radio" value="en" name="language" defaultChecked />🇺🇸
      <input type="radio" value="zh-cn" name="language"/>🇨🇳
    </StyledLang>
  )
}
const StyledLang = styled.div`
  align-items: center;
  display: flex;
  width: 100px;

`

export default LanguageSelector
