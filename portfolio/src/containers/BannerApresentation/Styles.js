import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: #6580ac;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  justify-content: space-between;

  @media screen and (max-width: 1430px) {
    height: auto;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }
`;

export const PhotoStyled = styled.img`
  height: 80vh;
  width: auto;
  margin: 0;

  @media screen and (max-width: 1430px) {
    width: 50vw;
    height: auto;
  }

  @media screen and (max-width: 1200px) {
    height: auto;
    width: 100vw;
  }
`;

export const InformationWrapper = styled.div`
  max-height: 80vh;
  padding: 30vh 0vw;
  color: #f5f5f5;
  text-align: left;
  word-wrap: break-word;
  @media screen and (max-width: 1200px) {
    max-height: 100vh;
    width: 95vw;
    padding: 0 9vw;
    min-height: 10vh;
    position: absolute;
    bottom: 1vh;
    left: 2vw;
    border-radius: 45px;
    background-color: rgba(76, 27, 68, 0.6);
  }
`;