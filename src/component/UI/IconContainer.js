import React from 'react'
import styled from 'styled-components'

const Icon = styled.img`
  max-height:16px;
  max-width:16px;

  &.active{
      filter: brightness(0.8) drop-shadow(2px 2px 2px rgba(0,0,0, 0.2));
      transform: scale(1.15);
    }
`

const IconContainer = (props) => {
  return (
    <div>
      <Icon src={props.icon} alt={props.alt} className={props.active ? "active" : ""} /> 
    </div>
  )
}

export default IconContainer
