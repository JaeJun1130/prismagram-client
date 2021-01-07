import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { UserInput } from "../../Hooks/UserInput";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT, LOG_IN } from "./AuthMutation";


import { toast } from 'react-toastify';

export const LOGIN = "LOGIN";
export const JOIN = "JOIN";

const AuthContainer = () => {
    const [action, setAction] = useState(LOGIN);

    const username = UserInput("");
    const firstName = UserInput("");
    const lastName = UserInput("");
    const email = UserInput("");

    const [requestSecret] = useMutation(LOG_IN, {
        update:(_,{data}) => {
            const {requestSecret} = data;
            if(!requestSecret){
                toast.error("해당 이메일을 찾을 수 없습니다.");
                setTimeout(()=>setAction(JOIN),2000)
            }
        },
        variables: {
            email: email.value,
        },
    });

    const [createAccount] =useMutation(CREATE_ACCOUNT,{
        variables:{
            username:username.value,
            firstName:firstName.value,
            lastName:lastName.value,
            email:email.value,
        }
    })

    const onSubmit = async (e, form) => {
        console.log(e, form);
        e.preventDefault();

        switch (form) {
            case LOGIN: {
                if(email.value !== ""){
                    await requestSecret();
                }
                else{
                    toast.error("이메일을 입력하세요");
                }
                break;
            }

            case JOIN: {
                if(username.value !== "" && firstName.value!=="" && lastName.value !== "" && email.value !=="")
                {
                    await createAccount();
                }
                else{
                    toast.error("모든 항목을 기입하세요");
                }
                break;
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
