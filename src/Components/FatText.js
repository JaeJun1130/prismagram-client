import React from "react";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
`;

export const FatText = ({ text }) => <Text>{text}</Text>;
