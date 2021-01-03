import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { StyleTheme } from "../Styles/Theme";

import AppRouter from "./Router";

function App() {
    return (
        <ThemeProvider theme={StyleTheme}>
            <>
                <AppRouter isLoggedIn={false} />
                <GlobalStyles />
            </>
        </ThemeProvider>
    );
}

export default App;
