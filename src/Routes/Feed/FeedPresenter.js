import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

const FeedPresenter = ({ data, loading }) => {
  console.log(loading);
  return <Wrapper>{loading ? <Loader /> : <div>null</div>}</Wrapper>;
};

export default FeedPresenter;
