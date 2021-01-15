import React from "react";
import styled from "styled-components";
import Avatar from "../Avater";

import { FatText } from "../FatText";
import { Bubble, Heart, HeartFull } from "../Icons";

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

const Files = styled.div``;

const File = styled.img`
  width: 100%;
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
            files.map((file) => <File id={file.id} src={file.url}></File>)}
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
        </Meta>
      </Post>
    </>
  );
};

export default PostPresenter;
