import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Featured from "../Module/Featured";
import NewsCard from "../UI/NewsCard";

const Container = styled.main`
  margin: 70px 0px; 
  padding 24px;
  background-color: ${props => props.theme.color.bg}
`;

const apiKey = "4eea0958bd6f43dda118acc084c7b357";
const url = "https://newsapi.org/v2/";
const sources = "=google-news-ca";

const News = props => {
  const [topNews, setTopNews] = useState({
    // author: "https://www.facebook.com/bbcnews",
    // content: "Image copyrightReutersImage caption Rights activists protesting against ICE near the organisation's headquarters in Washington DC last weekThe US government is introducing a new fast-track deportation process that will bypass immigration courts.nder th… [+2394 chars]",
    // description: "Under the rule, officers will be able to immediately deport more migrants without going to court.",
    // publishedAt: "2019-07-23T01:31:11+00:00",
    // source: {id: "google-news", name: "Google News"},
    // title: "US brings in new fast-track deportation rule",
    // url: "https://www.bbc.com/news/world-us-canada-49079495",
    // urlToImage: "https://ichef.bbci.co.uk/"
  });
  const [news, setNews] = useState([]);

  const getTop = async () => {
    const fetchNews = await axios.get(
      `${url}top-headlines?sources${sources}&apiKey=${apiKey}&pageSize=1`
    );
    const data = await fetchNews.data.articles[0];
    await setTopNews({ ...data });
  };

  const getNews = async () => {
    const fetchNews = await axios.get(
      `${url}everything?sources${sources}&apiKey=${apiKey}`
    );
    const data = await fetchNews.data;
    console.log(data)
    await setNews([...data.articles]);
  };

  useEffect(() => {
    getTop();
    getNews();
  }, []);


  console.log(topNews);
  console.log(news);
  return (
    <Container>
      <Featured data={topNews} />
      {news.map((newsitem, index) => <NewsCard data={newsitem} key={index} />)}
    </Container>
  );
};

export default News;
