import React from "react";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { StyleTheme } from "../Styles/Theme";
import AppRouter from "./Router";

import { cache } from "../Apollo/Client";
import { gql } from "@apollo/client";
import Footer from "./Footer";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 935px; //max가 935
    width: 100%;
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
                <ToastContainer position="top-center"/>
            </ThemeProvider>
        </Wrapper>
    );
}

export default App;
