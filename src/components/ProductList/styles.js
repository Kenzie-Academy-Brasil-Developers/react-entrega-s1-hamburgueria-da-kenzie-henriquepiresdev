import styled from "styled-components";

export const DivContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    justify-content: flex-start;
    height: 650px;
    width: 70%;
  }
  ul {
    margin-top: 2%;
    list-style: none;
    display: flex;
    flex-direction: column;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 2%;
    @media only screen and (min-width: 768px) {
      justify-content: flex-start;
      margin-top: 1%;
      width: 70%;
      overflow: visible;
      height: 100%;
      max-height: 650px;
      gap: 1%;
    }
    li {
      border: 1px solid gray;
      min-width: 200px;
      width: 32%;
      height: 250px;
    }
  }
`;
