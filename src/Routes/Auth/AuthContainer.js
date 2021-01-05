import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";

const AuthContainer = () => {
    const [action, setAction] = useState("login");

    return <AuthPresenter action={action} setAction={setAction} />;
};

export default AuthContainer;
