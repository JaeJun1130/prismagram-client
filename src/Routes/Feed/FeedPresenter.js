import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  border: 1px solid red;
`;

const FeedPresenter = ({ data, loading }) => {
  console.log(loading);
  console.log(data);
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && data && data.seeFeed && "We have photos"}
    </Wrapper>
  );
};

export default FeedPresenter;
