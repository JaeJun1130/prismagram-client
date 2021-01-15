import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Helmet from "react-helmet";

import Post from "../../Components/Post";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  min-height: 80vh;
  border: 1px solid red;
`;

const FeedPresenter = ({ data, loading }) => {
  console.log(loading);
  console.log(data);
  return (
    <Wrapper>
      <Helmet>
        <title>Feed</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            user={post.user}
            files={post.files}
            likeCount={post.likeCount}
            isLiked={post.isLiked}
            comments={post.comments}
            createdAt={post.createdAt}
            location={post.location}
            caption={post.caption}
          />
        ))}
    </Wrapper>
  );
};

export default FeedPresenter;
