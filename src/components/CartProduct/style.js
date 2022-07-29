import styled from "styled-components";

export const DivCart = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
  figure {
    height: 100%;
    width: 30%;
    min-width: 70px;
    border-radius: 8px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
  div {
    width: 70%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    h4 {
      padding-left: 1%;
      font-size: 0.8rem;
    }
    p {
      margin-top: 2%;
      padding-left: 1%;
      font-size: 0.6rem;
    }
    button {
      background-color: transparent;
      border: transparent;
      width: 10%;
      font-size: 0.7rem;
      justify-self: flex-start;
      align-self: flex-end;
      margin-right: 15%;
    }
  }
`;
