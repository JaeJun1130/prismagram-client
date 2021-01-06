import React from "react";
import styled from "styled-components";

const Container = styled.button`
    width: 100%;
    border: 0;
    border-radius: ${(props) => props.theme.borderRadius};
    color: white;
    font-weight: 600;
    background-color: ${(props) => props.theme.blueColor};
    text-align: center;
    padding: 7px;
    font-size: 14px;
`;

const Button = ({ text, onClick }) => {
    return <Container onClick={onClick}>{text}</Container>;
};

export default Button;
