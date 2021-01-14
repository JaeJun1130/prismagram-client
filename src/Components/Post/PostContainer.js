import React, { useState } from "react";
import PostPresenter from "./PostPresenter";

const PostContainer = ({
  id,
  user,
  files,
  likeCount,
  isLiked,
  comments,
  createdAt,
  location,
  caption,
}) => {
  const [isLikedS, setIsLiked] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [comment, setComment] = useState([]);
  return (
    <PostPresenter
      user={user}
      files={files}
      comments={comments}
      createdAt={createdAt}
      location={location}
      caption={caption}
      isLikedS={isLikedS}
      setIsLiked={setIsLiked}
      likeCountS={likeCountS}
      setLikeCount={setLikeCount}
      comment={comment}
      setComment={setComment}
    />
  );
};

export default PostContainer;
