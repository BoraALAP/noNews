import React from "react";
import styled from "styled-components";

import PopupsContainer from "./PopupsContainer"; 

const Container = styled.div`
`;

const Menu = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Menu</h1>
    </PopupsContainer> 
  );
};

export default Menu;