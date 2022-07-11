import styled from "styled-components";

export const Container = styled.div`
  width: 400px;
  min-height: 200px;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin: 15px;
  border: 2px solid grey;
  border-radius: 4px;
  background-color: whitesmoke;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 90%;
  }
`