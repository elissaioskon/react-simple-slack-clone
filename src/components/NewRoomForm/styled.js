import styled from "@emotion/styled";
import { TiPlus as TiPlusUnstyled } from "react-icons/ti";

import { dimensions } from "../../constants";

export const Container = styled.div`
  width: ${dimensions.chatRightBarWidth}px;
  border: 1px solid grey;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const Form = styled.form`
  height: calc(inherit - 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Input = styled.input`
  border: none;
  font-size: 14px;
  box-sizing: border-box;
  padding-right: 10px;
  color: black;
  font-family: inherit;
  width: 80%;

  ::placeholder {
    color: #4d394b;
  }

  :focus {
    outline: none;
  }
`;

export const TiPlus = styled(TiPlusUnstyled)`
  color: #4d394b;
  font-size: 13px;
  width: 20px;

  :hover {
    cursor: pointer;
    font-size: 15px;
  }
`;
