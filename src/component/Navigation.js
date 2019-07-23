import React, { useContext } from "react";
import styled from "styled-components";

import { Context } from "../data/store";

import NavButton from "./UI/NavButton";
import categoryIcon from "../assets/nav/category.svg";
import likesIcon from "../assets/nav/likes.svg";
import newsIcon from "../assets/nav/news.svg";
import menuIcon from "../assets/nav/profile.svg";
import searchIcon from "../assets/nav/search.svg";

const Nav = styled.nav`
  display: grid;
  position: fixed;
  bottom: 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(30px, auto));
  justify-items: center;
  padding: 10px 10px;
  align-items: center;
  box-sizing: border-box;
  z-index:1000;
  box-shadow: ${props => props.theme.boxshadow};
  background-color:rgba(${props => props.theme.color.bg});
`;

const handleClick = e => {
  console.log(e);
};

const Navigation = () => {
  const { store } = useContext(Context);

  const MenuItems = [
    {
      name: "Search",
      alt: "search icon",
      icon: searchIcon,
      active: false
    },
    {
      name: "Category",
      alt: "category icon",
      icon: categoryIcon,
      active: false
    },
    {
      name: "News",
      alt: "news icon",
      icon: newsIcon,
      active: true
    },
    {
      name: "Likes",
      alt: "likes icon",
      icon: likesIcon,
      active: false
    },
    {
      name: "Menu",
      alt: "menu icon",
      icon: menuIcon,
      active: false
    }
  ];

  return (
    <Nav>
      {MenuItems.map((item, index) => (
        <NavButton
          key={index}
          icon={item.icon}
          alt={item.alt}
          className={item.active}
          handleClick={handleClick}
        />
      ))}
    </Nav>
  );
};

export default Navigation;
