import React from "react";
import styled from 'styled-components'

const Container = styled.main`
  margin: 70px 0px; 
  padding 24px;
  background-color: ${props => props.theme.color.bg}
`

const New = () => {
  return (
    <Container>
      <h3> I'm a news </h3>
    </Container>
  );
};

export default New;