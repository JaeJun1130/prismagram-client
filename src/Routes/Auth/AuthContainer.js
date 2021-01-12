import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "@apollo/client";
import { CONFIRM_SECERT, CREATE_ACCOUNT, LOG_IN } from "./AuthMutation";

import { toast } from "react-toastify";

export const LOGIN = "LOGIN";
export const JOIN = "JOIN";
export const SECRET = "SECRET";

const AuthContainer = () => {
  //폼
  const [action, setAction] = useState(LOGIN);
  //로그인
  const [userData, setUserData] = useState({
    email: "",
  });
  //회원가입
  const [joinData, setJoinData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [userSecret, setUserSecret] = useState({
    secret: "",
  });

  //로그인 gql
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: userData.email,
    },
  });
  //회원가입 gql
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: joinData.username,
      firstName: joinData.firstName,
      lastName: joinData.lastName,
      email: joinData.email,
    },
  });
  //시크릿 gql
  const [confirmSecretMutation] = useMutation(CONFIRM_SECERT, {
    variables: {
      email: userData.email,
      secret: userSecret.secret,
    },
  });

  //서버통신
  const onSubmit = async (e, form) => {
    const a = userData.email.includes("@");
    const aa = joinData.email.includes("@");
    console.log(e, form);
    e.preventDefault();

    switch (form) {
      //로그인
      case LOGIN:
        if (userData.email !== "") {
          try {
            const {
              data: { requestSecret },
            } = await requestSecretMutation();
            if (!requestSecret || !a) {
              toast.error("이메일을 다시 확인하세요");
            } else if (requestSecret && a) {
              toast.success("메일이 전송 되었습니다.");
              setTimeout(() => {
                setAction(SECRET);
              }, 2000);
            }
          } catch {
            toast.error("지금은 로그인 할 수 없습니다");
          }
        } else {
          toast.error("이메일을 입력하세요");
        }
        break;

      //회원가입
      case JOIN: {
        if (
          joinData.email !== "" &&
          joinData.firstName !== "" &&
          joinData.username !== "" &&
          joinData.lastName
        ) {
          try {
            const {
              data: { createAccount },
            } = await createAccountMutation();
            if (!createAccount || !aa) {
              toast.error("회원정보를 다시 입력하세요");
            } else if (createAccount && aa) {
              toast.success("회원가입 완료");
            }
          } catch {
            toast.error("회원가입을 할 수 없습니다, 다시 시도하세요");
          }
        } else {
          toast.error("모든항목을 입력하세요");
        }

        break;
      }
      case SECRET: {
        if (userSecret.secert !== "") {
          try {
            const {
              data: { confirmSecret: token },
            } = await confirmSecretMutation();
            console.log(token);

            if (token) {
              localStorage.setItem("token", token);
              window.location.reload();
            } else {
              console.log("실패");
              localStorage.removeItem("token");
            }
          } catch {
            toast.error("암호가 일치하지 않습니다");
            localStorage.removeItem("token");
          }
        } else {
          toast.error("암호를 입력하세요");
          localStorage.removeItem("token");
        }
      }
      default:
    }
  };

  return (
    <AuthPresenter
      action={action}
      setAction={setAction}
      userData={userData}
      setUserData={setUserData}
      joinData={joinData}
      setJoinData={setJoinData}
      onSubmit={onSubmit}
      userSecret={userSecret}
      setUserSecret={setUserSecret}
    />
  );
};

export default AuthContainer;
