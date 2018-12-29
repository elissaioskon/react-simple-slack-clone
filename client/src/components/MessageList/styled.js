import styled from "@emotion/styled";

import { colors } from "../../constants";

export const Container = styled.ul`
    box-sizing: border-box;
    overflow: scroll;
    background: ${colors.messageListBgColor}
    color: ${colors.messageListTextColor}
    width:100%;
    margin:unset;
    padding:0;
    list-style:none;
    text-transform: capitalize;
    overflow:auto;
    
   li{
    margin-bottom: 23px;
  }
    
`;
