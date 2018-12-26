import styled from "@emotion/styled";

import { colors, dimensions } from "../../constants";

export const Container = styled.ul`
  margin: 0;
  list-style-type: none;
  overflow: scroll;
  padding: 15px 0 10px 0;
  background-color: ${colors.roomList.bgColor};
  width: ${dimensions.chatRightBarWidth}px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
`;

export const Room = styled.li`
  color: ${colors.room.color};
  cursor: pointer;
  font-weight: 200;
  text-align: center;
  letter-spacing: 1px;
  height: 43px;
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: ${colors.room.hoverBgColor};
  }
`;
