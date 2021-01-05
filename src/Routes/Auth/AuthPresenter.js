import React from "react";

import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";

const Wrapper = styled.div`
    width: 100%;
    min-height: 80vh; // 높이가 70vh 밑으로 안내려감
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid red;
`;
const Box = styled.div`
    ${(props) => props.theme.whiteBox}
    border-radius: 0px;
    max-width: 348px;
    width: 100%;
`;

const StateChanger = styled(Box)`
    text-align: center;
    padding: 20px 0px; ;
`;

const Link = styled.span`
    color: ${(props) => props.theme.blueColor};
    cursor: pointer;
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

const AuthPresenter = ({ action, setAction }) => {
    return (
        <>
            <Wrapper>
                <Form>
                    {action === "login" ? (
                        <form>
                            <Input placeholder={"Username"}></Input>
                            <Input placeholder={"PassWord"}></Input>
                            <Button text={"로그인"}></Button>
                        </form>
                    ) : (
                        <form>
                            <Input placeholder={"First name"}></Input>
                            <Input placeholder={"Last name"}></Input>
                            <Input placeholder={"Email"}></Input>
                            <Input placeholder={"Username"}></Input>
                            <Input placeholder={"Password"}></Input>
                            <Button text={"회원가입"}></Button>
                        </form>
                    )}
                </Form>
                <StateChanger>
                    {action === "login" ? (
                        <>
                            계정이 있으신가요? <Link onClick={() => setAction("signUp")}>로그인</Link>
                        </>
                    ) : (
                        <>
                            계정이 없으신가요? <Link onClick={() => setAction("login")}>가입하기</Link>
                        </>
                    )}
                </StateChanger>
            </Wrapper>
        </>
    );
};

export default AuthPresenter;

//
