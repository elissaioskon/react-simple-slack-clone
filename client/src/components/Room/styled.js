import styled from "@emotion/styled";

export const Container = styled.li(
    ({isActive}) => `
  cursor: pointer;
  font-weight: 200;
  text-align: center;
  letter-spacing: 1px;
  height: 43px;
  vertical-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${isActive ? '#3E313C' : "inherit"};
  
  :hover {
    background-color: ${isActive ? '#31262f' : '#3E313C'};
  }
`
);
