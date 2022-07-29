import styled from "styled-components";

export const DivContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    width: 70%;
  }
  @media only screen and (min-width: 830px) {
    width: 25%;
    margin: 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    list-style: none;
    width: 90%;
    height: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: #f5f5f5;
    max-height: 500px;
  }
`;
export const LiGreen = styled.li`
  background-color: var(--color-primary);
  border-radius: 5px 5px 0px 0px;
  height: 50px;
  width: 100%;
  display: flex;
  padding-left: 5%;
  align-items: center;
  color: #ffffff;
  font-weight: 700;
`;
export const EmptyCart = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 133px;
  width: 100%;
  background-color: #f5f5f5;

  h3 {
    font-weight: 700;
    color: var(--color-gray-100);
    @media only screen and (min-width: 830px) {
      font-size: 16px;
    }
    @media only screen and (min-width: 920px) {
      font-size: 18px;
    }
  }
  p {
    color: var(--color-grey-50);
    font-weight: 400;
    @media only screen and (min-width: 830px) {
      font-size: 12px;
    }
    @media only screen and (min-width: 920px) {
      font-size: 14px;
    }
  }
`;
export const DivCards = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 500px;
  min-height: 300px;
  overflow-y: scroll;
`;
export const LiCard = styled.li`
  margin-top: 1%;
  background-color: var(--color-grey-20);
  border-radius: 8px;
  height: 80px;
  width: 90%;
`;

export const LiTotal = styled.li`
  margin-top: 3%;
  border-top: 3px solid var(--color-grey-20);
  width: 100%;
  height: 100px;
  background-color: $f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    width: 70%;
    background-color: var(--color-grey-50);
    border: 2px solid var(--color-grey-50);
    color: var(--color-grey-0);
    height: 60px;
    border-radius: 10px;
    margin-bottom: 2%;
  }
`;
