import React, { useState } from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

import Input from "./Input";
import { Explore, Heart, Instar, Message, Parson, Home } from "./Icons";

import { gql, useQuery } from "@apollo/client";

const HeaderSy = styled.header`
  width: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  padding: 25px 0px;
  z-index: 2;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  width: 70%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  border: 1px solid blue;
`;
const HeaderColum = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  height: auto;
  font-size: 14px;
  border-radius: 3px;
  text-align: center;
  width: 100%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

const HeaderLink = styled(Link)`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const ME = gql`
  query me {
    me {
      username
    }
  }
`;

const Header = withRouter(({ history }) => {
  const [search, setSerach] = useState("");
  const { data } = useQuery(ME);
  console.log(data);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?them=${search}`);
  };
  console.log(search);
  return (
    <>
      <HeaderSy>
        <HeaderWrapper>
          <HeaderColum>
            <Link to="/">
              <Instar />
            </Link>
          </HeaderColum>
          <HeaderColum>
            <form onSubmit={onSearchSubmit}>
              <SearchInput
                value={search}
                onChange={(e) => {
                  setSerach(e.target.value);
                }}
                placeholder={"Search"}
              ></SearchInput>
            </form>
          </HeaderColum>
          <HeaderColum>
            <HeaderLink to="/">
              <Home />
            </HeaderLink>
            <HeaderLink to="/explore">
              <Message />
            </HeaderLink>
            <HeaderLink to="/explore">
              <Explore />
            </HeaderLink>
            <HeaderLink to="/explore">
              <Heart />
            </HeaderLink>
            {!data ? (
              <HeaderLink to="/username">
                <Parson />
              </HeaderLink>
            ) : (
              <HeaderLink to={data.me.username}>
                <Parson />
              </HeaderLink>
            )}
          </HeaderColum>
        </HeaderWrapper>
      </HeaderSy>
    </>
  );
});

export default Header;
