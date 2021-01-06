import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { UserInput } from "../../Hooks/UserInput";
import { useMutation } from "@apollo/client";
import { LOG_IN } from "./AuthMutation";

const AuthContainer = () => {
    const [action, setAction] = useState("login");

    const username = UserInput("");
    const firstName = UserInput("");
    const lastName = UserInput("");
    const email = UserInput("");

    const [requestSecret] = useMutation(LOG_IN, {
        variables: {
            email: email.value,
        },
    });

    const onSubmit = async (e, form) => {
        console.log(e, form);
        e.preventDefault();

        switch (form) {
            case "login": {
                await requestSecret();
                break;
            }

            case "join": {
            }
        }
    };

    console.log(email);

    return (
        <AuthPresenter
            action={action}
            setAction={setAction}
            username={username}
            firstName={firstName}
            lastName={lastName}
            email={email}
            onSubmit={onSubmit}
        />
    );
};

export default AuthContainer;
