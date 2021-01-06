import React from "react";
import styled from "styled-components";

import logo from "../Image/Logo.png"



const LogoTitle = styled.img`
    height: 80px;
    width: 190px;
    display:block;
    margin: -10px auto 30px;
`;

const Logo = () => {
    return( 
        <>
                <LogoTitle src={logo}></LogoTitle>
        </>
    );
}

export default Logo;