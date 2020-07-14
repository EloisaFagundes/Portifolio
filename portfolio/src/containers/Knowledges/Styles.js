import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: #d3ad0a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  max-height: 80vh;
  height: 70vh;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    height: 80vh;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: justify;
  width: 40vw;
  flex-direction: column;
  width: 45%;

  @media screen and (max-width: 991px) {
    width: 100vw; 
    text-align: justify; 
  }
`;

export const BlocksTextsWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
  width: 1230px;
  @media screen and (max-width: 1200px) {
    background-color: pink;
    flex-wrap: wrap;
    max-width: 90vw;
  }
`;

export const TitleStyle = styled.h1`
  font-family: "Glegoo";
  color: #171430;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
    width: 100vw;
  }
`;

export const Subtitle = styled.h1`
   color: #171430;
  font-family: "Glegoo";
  font-size: 1.7em;
  @media screen and (max-width: 1200px) {
    background-color: orange;
    /* width: 100vw; */
    font-size: 1.5em;
    line-height: 2vh;
    color: #ffff;
  }
`;

export const Paragraphy = styled.p`
  text-align: center;
  color: #171430;

  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    line-height: 3vh;
    width: 90vw;
  }
`;