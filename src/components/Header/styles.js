import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #f5f5f5;
  width: 100%;
  height: 139px;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 0px var(--color-grey-50);
  @media only screen and (min-width: 768px) {
    width: 100vw;
    height: 80px;
  }
`;
export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 83%;
  }
`;
export const DivLogo = styled.div`
  width: 60%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }

  h1 {
    color: #333333;
    font-size: 1.5rem;
  }
  span {
    color: var(--color-primary);
    font-size: 1.2rem;
  }
`;

export const DivForm = styled.div`
  width: 100%;
  height: 60px;
  max-width: 600px;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
    min-width: 450px;
  }

  form {
    border: 2px solid #e0e0e0;
    width: 100%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    gap: 1%;
    @media only screen and (min-width: 768px) {
      width: 60%;
    }
    input {
      height: 50px;
      width: 65%;
      border: none;
      border-radius: 8px;
      outline: unset;
      ::placeholder {
        padding-left: 2%;
        font-weight: 200;
      }
    }
    button {
      width: 28%;
      height: 40px;
      border-radius: 8px;
      border: 2px solid var(--color-primary);
      background-color: var(--color-primary);
      color: white;
    }
  }
`;
