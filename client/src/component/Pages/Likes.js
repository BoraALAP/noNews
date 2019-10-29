import React from "react";
import styled from "styled-components";

import PopupsContainer from "./PopupsContainer"; 

const Container = styled.div` 
`;

const Likes = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Likes</h1>
    </PopupsContainer>
  );
};

export default Likes;
