import React, { useState, useEffect } from "react";
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

  const [currentItem, setCurrentItem] = useState(0);
  const totalFile = files.length;

  const nextSilde = () => {
    setCurrentItem(currentItem === totalFile - 1 ? 0 : currentItem + 1);
    console.log(currentItem);
  };
  const prevSlide = () => {
    setCurrentItem(currentItem === 0 ? totalFile - 1 : currentItem - 1);
    console.log(currentItem);
  };

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
      currentItem={currentItem}
      nextSilde={nextSilde}
      prevSlide={prevSlide}
      totalFile={totalFile}
    />
  );
};

export default PostContainer;
