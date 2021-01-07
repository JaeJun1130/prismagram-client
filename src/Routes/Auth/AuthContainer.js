import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { UserInput } from "../../Hooks/UserInput";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT, LOG_IN } from "./AuthMutation";

import { toast } from "react-toastify";

export const LOGIN = "LOGIN";
export const JOIN = "JOIN";

const AuthContainer = () => {
    const [action, setAction] = useState(LOGIN);

    const username = UserInput("");
    const firstName = UserInput("");
    const lastName = UserInput("");
    const email = UserInput("");

    //로그인
    const [requestSecretMutation] = useMutation(LOG_IN, {
        variables: {
            email: email.value,
        },
    });
    //회원가입
    const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
        variables: {
            username: username.value,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
        },
    });
    //서버통신
    const onSubmit = async (e, form) => {
        console.log(e, form);
        e.preventDefault();

        switch (form) {
            //로그인
            case LOGIN: {
                if (email.value !== "") {
                    try {
                        const {
                            data: { requestSecret },
                        } = await requestSecretMutation();
                        if (!requestSecret) {
                            toast.error("해당 이메일이 존재하지 않습니다");
                        } else if (requestSecret) {
                            toast.success("로그인 성공");
                        }
                    } catch {
                        toast.error("지금은 로그인 할 수 없습니다");
                    }
                } else {
                    toast.error("이메일을 입력하세요");
                }
                break;
            }
            //회원가입
            case JOIN: {
                if (
                    username.value !== "" &&
                    firstName.value !== "" &&
                    lastName.value !== "" &&
                    email.value !== ""
                ) {
                    try {
                        const {
                            data: { createAccount },
                        } = await createAccountMutation();
                        if (!createAccount) {
                            toast.error("존재하는 이메일 입니다");
                        } else if (createAccount) {
                            toast.success("회원가입 완료");
                        }
                    } catch {
                        toast.error("회원가입을 할 수 없습니다, 다시 시도하세요");
                    }
                } else {
                    toast.error("모든 항목을 기입하세요");
                }
                break;
            }
        }
    };

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
