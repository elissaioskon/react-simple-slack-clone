import { css } from "@emotion/core";
import styled from "@emotion/styled";

import {dimensions} from '../constants/styledInfo'

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
  height: calc(100% - ${dimensions.bottomHeight}px);
  display: flex;
  font-size: 13px;
`;

export const MessageListContainer = styled.div`
  height: 100%;
  width: calc(100% - ${dimensions.rightBarWidth}px);
  overflow: scroll;
  border-right: 1px solid grey;
  border-top: 1px solid grey;
  border-radius: 3px;
  padding: 19px 15px 0 22px;
  box-sizing: border-box;
`;

export const BottomContainer = styled.div`
  height: ${dimensions.bottomHeight}px;
  display: flex;
  color: red;
`;

