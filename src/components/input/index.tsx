import styled from "styled-components";

const Input = styled.input`
  min-height: 55px;
  width: 430px;
  border-radius: 4px;
  font-size: 16px;
  border: 1px solid grey;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export default Input;