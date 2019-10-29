import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 24px;
  box-shadow: ${props => props.theme.boxshadow};
  border-bottom: 3px solid ${props => props.theme.color.accent};
  margin-bottom: 24px;
`;

const Img = styled.div`
  height: 120px;
  width: 100%;
  background: ${props => `url(${props.source})`};
  background-size: cover;
  background-position: center center;
`;

const BottomSection = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
`;

const NewsCard = props => {
  const data = { ...props.data };
  const source = { ...data.source };

  return (
    <Link to={{ 
      pathname:`news/${data.id}`, 
      state:{ ...data } 
    }}>
      <Container>
        {props.featured ? <Img source={props.data.urlToImage} /> : ""}
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <BottomSection>
          <small>{source.name}</small>
          <small>{data.publishedAt}</small>
        </BottomSection>
      </Container>
    </Link>
  );
};

export default NewsCard;
