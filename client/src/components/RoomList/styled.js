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
  color: ${colors.room.color};
`;



export const NoRoomsAvailable = styled.div`
  margin-top: 20px;
  text-align: center;
`;
