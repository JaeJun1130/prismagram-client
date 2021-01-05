import React from "react";

import styled from "styled-components";

const AFooter = styled.footer``;

const List = styled.ul``;

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Link = styled.a`
    &:not(:last-child) {
        margin-right: 25px;
    }
    margin-bottom: 10px;
    font-size: 12px;
    color: rgba(var(--f52, 142, 142, 142), 1);
`;

const RightBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Copyright = styled.span`
    font-size: 12px;
    color: rgba(var(--f52, 142, 142, 142), 1);
    margin-top: 10px;
`;

const Footer = () => {
    return (
        <AFooter>
            <List>
                <ListItem>
                    <Link href="#">소개</Link>
                    <Link href="#">블로그</Link>
                    <Link href="#">채용 정보</Link>
                    <Link href="#">도움말</Link>
                    <Link href="#">API</Link>
                    <Link href="#">개인정보처리방침</Link>
                    <Link href="#">약관</Link>
                    <Link href="#">인기 계정</Link>
                    <Link href="#">해시태그</Link>
                    <Link href="#">위치</Link>
                </ListItem>

                <ListItem>
                    <Link href="#">뷰티</Link>
                    <Link href="#">댄스 및 공연</Link>
                    <Link href="#">피트니스</Link>
                    <Link href="#">식음료</Link>
                    <Link href="#">집 및 정원</Link>
                    <Link href="#">음악</Link>
                    <Link href="#">시각 예술</Link>
                </ListItem>
            </List>
            <RightBox>
                <Copyright>Instaclone {new Date().getFullYear()} &copy;</Copyright>
            </RightBox>
        </AFooter>
    );
};

export default Footer;
