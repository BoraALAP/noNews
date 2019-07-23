import React from "react";
import styled from "styled-components";
import IconContainer from "./IconContainer";

const Button = styled.button`
  padding: 10px 10px;
  cursor: pointer;
  .line {
    height: 3px;
    width: 16px;
    bottom: 0;
    background-color: rgba(${props => props.theme.color.accent});
    position: absolute;
    
    display: none;
  }

  &.menu_active {
    .line {
      display: grid;
    }
  }
`;



const NavButton = props => {
  return (
    <Button
      className={props.className ? "menu_active" : ""}
      onClick={props.handleClick}
    >
      <IconContainer
        icon={props.icon}
        alt={props.alt}
        active={props.className}
      />
      <div className="line" />
    </Button>
  );
};

export default NavButton;
