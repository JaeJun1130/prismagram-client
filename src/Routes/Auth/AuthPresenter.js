import React from "react";

import styled from "styled-components";
import Button from "../../Components/Button";
import Input from "../../Components/Input";
import Logo from "../../Components/Logo";
import { UserInput } from "../../Hooks/UserInput";

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
    padding: 20px 0px; ;
`;

const Link = styled.span`
    color: ${(props) => props.theme.blueColor};
    cursor: pointer;
`;


const AuthPresenter = ({ action, setAction }) => {
    const username = UserInput("");
    const password = UserInput("");

    const firstName = UserInput("");
    const lastName = UserInput("");
    const Email = UserInput("");

    console.log(username, password, firstName, lastName, Email);

    return (
        <>
            <Wrapper>
                <Form>
                <Logo/>
                    {action === "login" ? (
                        <form>
                            <Input placeholder={"Username"} {...username}></Input>
                            <Input placeholder={"PassWord"} {...password} type="password"></Input>
                            <Button text={"로그인"}></Button>
                        </form>
                    ) : (
                        <form>
                            <Input placeholder={"First name"} {...firstName}></Input>
                            <Input placeholder={"Last name"} {...lastName}></Input>
                            <Input placeholder={"Email"} {...Email} type="email"></Input>
                            <Input placeholder={"Username"} {...username}></Input>
                            <Input placeholder={"Password"} {...password} type="password"></Input>
                            <Button text={"회원가입"}></Button>
                        </form>
                    )}
                </Form>
                <StateChanger>
                    {action === "login" ? (
                        <>
                            계정이 없으신가요? <Link onClick={() => setAction("signUp")}>가입하기</Link>
                        </>
                    ) : (
                        <>
                            계정이 있으신가요? <Link onClick={() => setAction("login")}>로그인</Link>
                        </>
                    )}
                </StateChanger>
            </Wrapper>
        </>
    );
};

export default AuthPresenter;

//
