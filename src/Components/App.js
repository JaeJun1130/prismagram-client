import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { StyleTheme } from "../Styles/Theme";
import AppRouter from "./Routers";

import { cache } from "../Apollo/Client";
import { gql } from "@apollo/client";
import Footer from "./Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";

import { BrowserRouter as Router } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${(props) => props.theme.maxWidth}; //max가 935
`;

export const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

function App() {
  const { isLoggedIn } = cache.readQuery({ query: QUERY });

  console.log(isLoggedIn);

  return (
    <ThemeProvider theme={StyleTheme}>
      <>
        <GlobalStyles />
        <Router>
          <>
            {isLoggedIn && <Header />}
            <Wrapper>
              <AppRouter isLoggedIn={isLoggedIn} />
              <Footer />
            </Wrapper>
          </>
        </Router>
        <ToastContainer position="top-center" />
      </>
    </ThemeProvider>
  );
}

export default App;
