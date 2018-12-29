import styled from "@emotion/styled";

export const Form = styled.form`
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  border: none;

  input {
    border: 2px solid darkgrey;
    border-radius: 5px;

    ::placeholder {
      color: darkgrey;
    }

    :focus {
      border-color: grey;

      ::placeholder {
        color: grey;
      }
    }
  }

  button {
    color: grey;

    &:disabled {
      cursor: not-allowed;
      color: darkgrey;
    }
  }
`;

export const UsernameInput = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 13px;
  padding: 0 0 0 15px;
  height: 100%;
  width: 100%;

  :focus {
    outline: none;
  }
`;

export const UsernameSubmitBtn = styled.button`
  border: none;
  padding: unset;
  font-size: 12px;
  display: flex;
  position: absolute;
  top: 38%;
  right: 20px;

  :focus {
    outline: none;
  }

  :hover {
    cursor: pointer;
  }
`;
