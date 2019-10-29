import React from "react";
import styled from "styled-components";
import PopupsContainer from "./PopupsContainer"; 

const Container = styled.div` 
`;

const Search = (props) => {
  return (
    <PopupsContainer show={props.active}>
      <h1>Search</h1>
    </PopupsContainer> 
  );
};

export default Search;