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

export const IllustrationStyled = styled.img`
  height: 80vh;
  width: auto;
  margin-right: 20px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonStyled = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 9px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #d3ad0a;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  align-self: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    width: 100vw;
    margin: 0;
    padding: 0;
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

export const TitleSection = styled.h1`
  color: #ffff;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
    color: #d3ad0a;
  }
`;

export const ParagraphyStyled = styled.p`
  text-align: justify;
  color: #ffff;
  font-family: "Montserrat", sans-serif;
  line-height: 3vh;
  @media screen and (max-width: 1200px) {
    max-width: 90vw;
    font-size: 0.9em;
    width: 75vw;
    margin: 0;
    padding: 0;
    line-height: 4vh;
  }
`;
export const ListTecnologiesConteiner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
export const ItemTecnologiesStyled = styled.p`
  font-family: "Glegoo";
  font-size: 13px;
  font-weight: bold;

  @media screen and (max-width: 1200px) {
    font-size: 0.5em;
  }
`;
