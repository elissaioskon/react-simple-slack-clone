import { css } from "@emotion/core";
import styled from "@emotion/styled";

import { dimensions } from "../constants";

export const globalCss = css`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: monospace;
    font-weight: 200;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  height: 100%;
`;

export const MainContainer = styled.div`
  height: calc(100% - ${dimensions.chatBottomHeight}px);
  display: flex;
  font-size: 13px;
`;

export const MessageListContainer = styled.div`
  height: 100%;
  width: calc(100% - ${dimensions.chatRightBarWidth}px);
  overflow: scroll;
  border-right: 1px solid grey;
  border-top: 1px solid grey;
  border-radius: 3px;
  padding: 19px 15px 0 22px;
  box-sizing: border-box;
`;

export const BottomContainer = styled.div`
  height: ${dimensions.chatBottomHeight}px;
  display: flex;
  color: red;
`;

export const NoChannel = styled.div``;
