import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { StyleTheme } from "../Styles/Theme";
import AppRouter from "./Router";

import { cache } from "../Apollo/Client";
import { gql } from "@apollo/client";
import Footer from "./Footer";

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 935px; //max가 935
    width: 100%;
    border: 1px solid black;
`;

const QUERY = gql`
    {
        isLoggedIn @client
    }
`;

function App() {
    const { isLoggedIn } = cache.readQuery({ query: QUERY });
    console.log(isLoggedIn);

    return (
        <Wrapper>
            <ThemeProvider theme={StyleTheme}>
                <AppRouter isLoggedIn={isLoggedIn} />
                <GlobalStyles />
                <Footer />
            </ThemeProvider>
        </Wrapper>
    );
}

export default App;
