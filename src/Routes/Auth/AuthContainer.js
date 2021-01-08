import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT, LOG_IN } from "./AuthMutation";

import { toast } from "react-toastify";

export const LOGIN = "LOGIN";
export const JOIN = "JOIN";
export const SECRET = "SECRET";

const AuthContainer = () => {
  const [action, setAction] = useState(LOGIN);

  const [userData, setUserData] = useState({
    email: "",
  });
  console.log(userData);

  const [joinData, setJoinData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(joinData);

  //로그인
  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: {
      email: userData.email,
    },
  });
  //회원가입
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: joinData.username,
      firstName: joinData.firstName,
      lastName: joinData.lastName,
      email: joinData.email,
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
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret || !a) {
            toast.error("이메일을 다시 입력해주세요");
          } else if (requestSecret && a) {
            toast.success("메일이 전송 되었습니다.");
            setTimeout(() => {
              setAction(SECRET);
            }, 2000);
          }
        } catch {
          toast.error("지금은 로그인 할 수 없습니다");
        }
        break;

      //회원가입
      case JOIN: {
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

        break;
      }
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
    />
  );
};

export default AuthContainer;
