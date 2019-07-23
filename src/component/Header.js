import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.header` 
  width: 100%;
  display:grid;
  position:fixed;
  top:0;
  grid-auto-flow: column;
  justify-content:left;
  align-items: baseline;
  grid-gap: 8px
  padding:16px 24px;
  z-index:10;
  box-shadow: ${props => props.theme.boxshadow};
  background-color:rgba(${props => props.theme.color.bg});
`


const Header = () => {
  return (
    <HeaderStyle>
      <h1>NONEWS</h1>
      <h6>WITH SOME NEWS</h6>
    </HeaderStyle>
  )
}

export default Header
