import React from "react";
import styled from "styled-components";

const Container = styled.input`
    border: 0;
    border: ${(props) => props.theme.boxBorder};
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.bgColor};
    height: 35px;
    font-size: 12px;
    padding: 0 15px;
`;

const Input = ({ placeholder, required, value, onChange, type, className }) => {
    return (
        <>
            <Container
                className={className}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            ></Container>
        </>
    );
};

export default Input;
