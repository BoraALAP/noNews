import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  padding: 24px;
  box-shadow: ${props=> props.theme.boxshadow};
  border-bottom: 3px solid rgba(${props => props.theme.color.accent});
  margin-bottom: 24px;
`;

const Img = styled.div`
  height: 120px;
  width: 100%;
  background:${props=> `url(${props.src})`};
  background-size:cover;
  background-position: center center;
`;

const BottomSection = styled.div`
  display: grid;
  grid-auto-flow:column;
  justify-content:space-between;
`

const NewsCard = (props) => {
  const data = props.data
  console.log(data)
  return (
    <Link to='news/featured'>
      <Container>
        {props.featured ? <Img src={props.data.urlToImage}/> :""}
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <BottomSection>
        <small>{data.id}</small>
        <small>{data.publishedAt}</small>
        </BottomSection>
      </Container>
    </Link>
  );
};

export default NewsCard;
