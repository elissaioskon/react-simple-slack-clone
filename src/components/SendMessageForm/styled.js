import styled from "@emotion/styled";

// Components
import { TiPlus as TiPlusUnstyled } from "react-icons/ti";

// Others
import { dimensions } from "../../constants";

export const Container = styled.div`
  display: flex;
  margin-left: 1px;
  width: calc(100% - ${dimensions.chatRightBarWidth}px);
  align-items: center;
  border: 1px solid grey;
  border-radius: 3px;
`;

export const Input = styled.input`
  border: none;
  flex-grow: 1;
  height: 100%;
  box-sizing: border-box;
  font-family: inherit;
  border-radius: 10px; // is needed otherwise a bug happens with Container borders
  font-size: 13.5px;
  padding-left: 15px;
  line-height: 18px;
  color: black;

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 13px;
  }
`;

export const TiPlus = styled(TiPlusUnstyled)`
  color: #4d394b;
  box-sizing: border-box;
  border-left: 1px solid grey;
  height: 100%;
  padding: 16px;
  width: 45px;

  :hover {
    cursor: pointer;
    padding: 14px;
  }
`;
