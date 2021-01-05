import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
${reset}
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');


*{
    box-sizing:border-box
}
body{
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.blackColor};
    padding-top: 50px;
}
a{
    color:${(props) => props.theme.blueColor};
    text-decoration:none;
}
input:focus{ //인풋창 클릭시 테두리 없애기
        outline:none;
    }
`;
