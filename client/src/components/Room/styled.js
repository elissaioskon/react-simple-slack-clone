// External
import styled from "@emotion/styled";

// Constants
import { colors } from "../../constants";

export const Container = styled.li(
  ({ isActive }) => `
  cursor: pointer;
  font-weight: 200;
  text-align: center;
  letter-spacing: 1px;
  height: 43px;
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${isActive ? colors.room.activeBgColor : "inherit"};
  
  :hover {
    background-color: ${isActive ? colors.room.activeBgColor : colors.room.hoverBgColor};
  }
`
);
