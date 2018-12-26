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
`;

export const Bottom = styled.div`
  height: ${dimensions.chatBottomHeight}px;
  display: flex;
  color: red;
`;
