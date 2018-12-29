import styled from "@emotion/styled";
import { TiPlus as TiPlusUnstyled } from "react-icons/ti";

import { dimensions, colors } from "../../constants";

export const Container = styled.div`
  width: ${dimensions.chatRightBarWidth}px;
  border: 1px solid ${colors.main.borderColor};
  color: ${colors.main.color};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  button {
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      color: ${colors.main.disabledColor};
    }
  }
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
  font-size: 13px;
  padding-left: 10px;
  box-sizing: border-box;
  font-family: inherit;
  width: 80%;
  color: inherit;

  :focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  color: inherit;

  :focus {
    outline: none;
  }
`;

export const TiPlus = styled(TiPlusUnstyled)`
  font-size: 13px;
  width: 20px;
  vertical-align: middle;

  :hover {
    font-size: 15px;
  }
`;
