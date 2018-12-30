import styled from "@emotion/styled";

// Others
import {dimensions, main} from "../../constants/styledInfo";

export const Form = styled.form(({isDisabled}) => {
    let borderColor = main.borderColor;
    let color = main.color;

    if (isDisabled) {
        borderColor = main.disabledBorderColor;
        color = main.disabledColor;
    }

    return `
  display: flex;
  margin-left: 1px;
  width: calc(100% - ${dimensions.rightBarWidth}px);
  align-items: center;
  border: 1px solid ${borderColor};
  border-radius: 3px;
  color: ${color};
  
  button {
   border-left: 1px solid ${main.borderColor};
   
    :disabled {
    cursor: not-allowed;
    color: ${color};
    border-color: ${borderColor}
    }
  }
  
  input {
  :disabled{
    cursor: not-allowed;
    }
  }
  
  `;
});

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

  :focus {
    outline: none;
  }

  ::placeholder {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;

  border-radius: 2px;
  height: 100%;
  width: 45px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
    font-size: 15px;
  }
`;
