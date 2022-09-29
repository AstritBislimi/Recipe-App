import React from 'react'
import { FooterLink, FooterWrapper } from '../styles/styledDivs'

const Footer = () => {
  return <FooterWrapper>
  <FooterLink
    to={"/"}>
    <p className="footer--header">Delicious Recepies for All Your Cravings</p>
  </FooterLink>
  <p className="footer--text">Designed and developed by <b>Astrit Bislimi</b></p>
  </FooterWrapper>
}

export default Footer