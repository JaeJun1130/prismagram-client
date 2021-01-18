import React from "react";
import styled, { css } from "styled-components";
import Avatar from "../Avater";
import TextareaAutosize from "react-autosize-textarea";

import { FatText } from "../FatText";
import { Bubble, Heart, HeartFull } from "../Icons";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

const Post = styled.div`
  ${(props) => props.theme.whiteBox}
  width:100%;
  max-width: 600px;
  margin-bottom: 25px;
`;

const Header = styled.header`
  border: 1px solid red;
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColum = styled.div`
  margin-left: 10px;
`;

const Location = styled.span`
  display: block;
  margin-top: 5px;
  font-size: 12px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
`;

const File = styled.img`
  max-width: 100%;

  width: 100%;
  height: 600px;
  position: absolute;
  top: 0;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  transition: opacity 0.5s linear;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const Meta = styled.div`
  padding: 15px;
`;
const Timestamp = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme.lightGreyColor};
  opacity: 0.9;
  display: block;
  margin: 10px 0px;
  padding-bottom: 10px;
  font-size: 12px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 1px solid;
`;

const TextArea = styled(TextareaAutosize)`
  width: 100%;
  resize: none;
  border: none;
  font-size: 14px;
  a &:focus {
    outline: none;
  }
`;

const arrowButton = css`
  width: 30px;
  height: 30px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 5px;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
`;
const PrevArrow = styled(IoArrowBack)`
  ${arrowButton}
`;
const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;

const SliderNextButton = styled.div`
  position: absolute;
  bottom: 15vw;
  right: 8px;
  display: flex;
  z-index: 10;
`;

const SliderPrevButton = styled.div`
  position: absolute;
  bottom: 15vw;
  left: 10px;
  display: flex;
  z-index: 10;
`;

const PostPresenter = ({
  user,
  files,
  comments,
  createdAt,
  isLikedS,
  setIsLiked,
  likeCountS,
  setLikeCount,
  comment,
  setComment,
  location,
  caption,
  nextSilde,
  prevSlide,
  currentItem,
  totalFile,
}) => {
  return (
    <>
      <Post>
        <Header>
          <Avatar size={"sm"} url={user.avatar} />
          <UserColum>
            <FatText text={user.username} />
            <Location>{location}</Location>
          </UserColum>
        </Header>

        <Files>
          {files &&
            totalFile <= 2 &&
            files.map((file, index) => {
              return (
                <>
                  {index === currentItem && (
                    <>
                      <File id={file.id} src={file.url}></File>
                      <SliderPrevButton>
                        <PrevArrow onClick={prevSlide} />
                      </SliderPrevButton>

                      <SliderNextButton>
                        <NextArrow onClick={nextSilde} />
                      </SliderNextButton>
                    </>
                  )}
                </>
              );
            })}
          {files &&
            totalFile === 1 &&
            files.map((file, index) => {
              return (
                <>
                  {index === currentItem && (
                    <>
                      <File id={file.id} src={file.url}></File>
                    </>
                  )}
                </>
              );
            })}
        </Files>
        <Meta>
          <Buttons>
            <Button>{isLikedS ? <HeartFull /> : <Heart />}</Button>
            <Button>
              <Bubble />
            </Button>
          </Buttons>
          <FatText text={likeCountS === 1 ? "1 like" : `${likeCountS} likes`} />
          <Timestamp>{createdAt}</Timestamp>
          <form>
            <TextArea
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
              }}
              placeholder={"댓글 달기..."}
            />
          </form>
        </Meta>
      </Post>
    </>
  );
};

export default PostPresenter;
