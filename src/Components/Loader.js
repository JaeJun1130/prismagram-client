import React from "react";
import styled, { keyframes } from "styled-components";
import { Instar } from "./Icons";

const Animation = keyframes`
0%{
  opacity:0
}
50%{
  opacity:1
}
100%{
  opacity:0
}
`;

const Wrapper = styled.div`
  animation: ${Animation} 1s linear infinite;
`;

const Loader = () => {
  return (
    <>
      <Wrapper>
        <Instar size={36} />
      </Wrapper>
    </>
  );
};

export default Loader;
