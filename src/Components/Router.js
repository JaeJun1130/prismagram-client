import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

const LoggedInRoutes = () => {
    return (
        <>
            <Route path="/" exact>
                <Feed />
            </Route>
        </>
    );
};

const LoggedOutRoutes = () => {
    return (
        <>
            <Route path="/" exact>
                <Auth />
            </Route>
        </>
    );
};

const AppRouter = ({ isLoggedIn }) => {
    return <Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>;
};

export default AppRouter;
