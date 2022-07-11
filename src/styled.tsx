import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  box-sizing: border-box;

`

export const ScrollToTop = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: 2px solid red;
  box-sizing: border-box;
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
`