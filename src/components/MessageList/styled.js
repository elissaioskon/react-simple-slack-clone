import styled from "@emotion/styled";

import { colors, dimensions } from "../../constants";

export const Container = styled.ul`
    box-sizing: border-box;
    padding:15px 15px 0 15px;
    overflow: scroll;
    background: ${colors.messageListBgColor}
    color: ${colors.messageListTextColor}
    width:100%;
    width: calc(100% - ${dimensions.chatRightBarWidth}px);
    margin:unset;
    list-style:none;
    font-size: 14px;
    text-transform: capitalize;
    border-right:1px solid grey;
    border-top:1px solid grey;
    border-radius:3px;
    
   li:not(:last-child) {
    margin-bottom: 23px;
  }
    
`;
