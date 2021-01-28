import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #4c1b44;
  flex-wrap: wrap;
  width: 100%;
  min-height: 80vh;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    min-width: 100vw;
    margin: 0;
    min-height: 80vh;
  }
`;

export const Image = styled.img`
  height: 80vh;
  width: auto;
  margin-right: 20px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  @media screen and (max-width: 1200px) {
    padding: 0;
    width: 40vw;
    margin: 0;
    margin-top: 4vh;
  }
`;

export const AboutMeWrapper = styled.div`
  margin-left: 10px;
  padding: 2rem;
  color: #f5f5f5;
  text-align: left;
  max-width: 41vw;
  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 1200px) {
    padding: 0;
    max-width: 100vw;
    width: 80vw;
    min-height: 70vh;
    margin: 4vh 10vw;
  }
`;

export const TextWrapper = styled.div`
  text-align: justify;
  @media screen and (max-width: 1200px) {
    padding: 0;
    width: 80vw;
  }
`;

