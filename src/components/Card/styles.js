import styled from "styled-components";

export const MainCard = styled.li`
  border: 3px solid var(--color-grey-20);
  border-radius: 8px;
  min-width: 200px;
  width: 32%;
  height: 300px;
  display: flex;
  flex-direction: column;

  figure {
    height: 50%;
    border: none;
    background-color: var(--color-grey-0);
    border-radius: 8px;
    border: 1px solid var(--color-grey-20);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: 100%;
      @media only screen and (min-width: 768px) {
        width: 60%;
      }
    }
  }
  div {
    padding-left: 5%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 90%;
    h3 {
      font-size: 18px;
      font-weight: 700;
      color: var(--color-gray-100);
    }
    P {
      font-size: 12px;
      color: var(--color-grey-50);
      font-weight: 400;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      color: var(--color-primary);
    }
    button {
      background-color: var(--color-primary);
      width: 50%;
      height: 23%;
      border: 3px solid var(--color-primary);
      border-radius: 8px;
      color: var(--color-grey-0);
    }
  }
`;
