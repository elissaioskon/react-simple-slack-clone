import styled from "@emotion/styled";

import {dimensions} from "../../constants/styledInfo";

export const Container = styled.ul`
  margin: 0;
  list-style-type: none;
  overflow: scroll;
  padding: 15px 0 10px 0;
  background-color: #4D394B;
  width: ${dimensions.rightBarWidth}px;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  color: #ACA5AB;
`;

export const NoRoomsAvailable = styled.div`
  margin-top: 20px;
  text-align: center;
`;
