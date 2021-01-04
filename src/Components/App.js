import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { StyleTheme } from "../Styles/Theme";
import AppRouter from "./Router";

import { cache } from "../Apollo/Client";
import { gql } from "@apollo/client";

const QUERY = gql`
    {
        isLoggedIn @client
    }
`;

function App() {
    const { isLoggedIn } = cache.readQuery({ query: QUERY });
    console.log(isLoggedIn);

    return (
        <ThemeProvider theme={StyleTheme}>
            <AppRouter isLoggedIn={isLoggedIn} />
            <GlobalStyles />
        </ThemeProvider>
    );
}

export default App;
