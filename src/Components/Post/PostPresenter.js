import React from "react";
import styled from "styled-components";
import Avatar from "../Avater";

import { FatText } from "../FatText";

const Post = styled.div`
  ${(props) => props.theme.whiteBox}
  width:100%;
  max-width: 600px;
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

const Meta = styled.div`
  padding: 15px;
`;

const Buttons = styled.div``;

const Button = styled.span``;

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
          {/* <Button>{isLikedS ? <HeartFull /> : <HeartEmpty />}</Button> */}
        </Meta>
      </Post>
    </>
  );
};

export default PostPresenter;
