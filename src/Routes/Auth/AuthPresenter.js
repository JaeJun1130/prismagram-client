import React from "react";
import styled from "styled-components";

import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import { LOGIN, JOIN, SECRET } from "./AuthContainer";

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh; // 높이가 70vh 밑으로 안내려감
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Box = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius: 0px;
  max-width: 348px;
  width: 100%;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  input {
    width: 100%;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${(props) => props.theme.blueColor};
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 50px;
  }
`;

const AuthPresenter = ({
  action,
  setAction,
  onSubmit,
  userData,
  setUserData,
  joinData,
  setJoinData,
}) => {
  return (
    <>
      <Wrapper>
        <Form>
          <Logo />
          {action === LOGIN && (
            <>
              <form>
                <Input
                  placeholder={"Email"}
                  type={"email"}
                  value={userData.email}
                  onChange={(e) => {
                    setUserData({ ...userData, email: e.target.value });
                  }}
                ></Input>

                <Button
                  onClick={(e) => {
                    onSubmit(e, LOGIN);
                  }}
                  text={"로그인"}
                ></Button>
              </form>
            </>
          )}
          {action === JOIN && (
            <>
              <Input
                placeholder={"First name"}
                value={joinData.firstName}
                onChange={(e) => {
                  setJoinData({ ...joinData, firstName: e.target.value });
                }}
              ></Input>
              <Input
                placeholder={"Last name"}
                value={joinData.lastName}
                onChange={(e) => {
                  setJoinData({ ...joinData, lastName: e.target.value });
                }}
              ></Input>
              <Input
                placeholder={"Email"}
                type={"email"}
                value={joinData.email}
                onChange={(e) => {
                  setJoinData({ ...joinData, email: e.target.value });
                }}
              ></Input>
              <Input
                placeholder={"Username"}
                value={joinData.username}
                onChange={(e) => {
                  setJoinData({ ...joinData, username: e.target.value });
                }}
              ></Input>
              <Button
                onClick={(e) => {
                  onSubmit(e, JOIN);
                }}
                text={"회원가입"}
              ></Button>
            </>
          )}
          {action === SECRET && (
            <>
              <Input></Input>
            </>
          )}
        </Form>
        <StateChanger>
          {action === LOGIN && (
            <>
              계정이 없으신가요?
              <Link onClick={() => setAction(JOIN)}>가입하기</Link>
            </>
          )}
          {action === JOIN && (
            <>
              계정이 있으신가요?
              <Link onClick={() => setAction(LOGIN)}>로그인</Link>
            </>
          )}
          {action === SECRET && (
            <>
              <Link onClick={() => setAction(LOGIN)}>돌아가기</Link>
              <Link onClick={() => setAction(LOGIN)}>인증하기</Link>
            </>
          )}
        </StateChanger>
      </Wrapper>
    </>
  );
};

export default AuthPresenter;

//
