import React, { useEffect, useState } from "react";
import styled from "styled-components";

import ImageContainer from '../UI/ImageContainer'

const Container = styled.div`
  padding: 68px 0px;
`;

const Content = styled.div`
  padding: 0px 24px;
`;

const BottomSection = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.color.accent};
  padding: 16px 0px;
`;

const New = props => {
  const [ item , setItem ]  = useState({})
  const source = {...item.source}

  useEffect(() => {
    setItem({...props.location.state})
  }, []);

  console.log("about", props.location);

  return (
    <Container>
      <ImageContainer url={item.urlToImage} />
      <Content>
        <h3>{item.title}</h3>
        <BottomSection>
          <small>{source.name}</small>
          <small>{item.publishedAt}</small>
        </BottomSection>
        <p>{item.content}</p>
      </Content>
    </Container>
  );
};

export default New;
