import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  height: 1100px;
  flex-direction: column;
`;

export const TitleSection = styled.h1`
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2;
    max-width: 100vw;
  }
`;

export const ProjectWrapper = styled.div`
  height: 315px;
  max-width: 900px;
  max-height: 310px;
  margin: 0 auto;
  display: flex;
`;

export const ProjectWrapper1 = styled.div`
  max-width: 800px;
  max-height: 310px;
  margin: 0 auto;
  display: flex;
`;

export const IllustrationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 4px;
`;
export const IllustrationStyled = styled.img`
  width: 250px;
  height: 250px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const ProjetctDetailWrapper = styled.div`
  height: 310px;
  @media screen and (max-width: 1200px) {
    line-height: 3vh;
    max-width: 90vw;
  }
`;

export const TitleStyled = styled.h2`
  text-align: left;
  font-family: "Glegoo";
  width: 250px;
  height: 52px;
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: 7px;
  line-height: 3.5;
  letter-spacing: -0.28px;

  @media screen and (max-width: 1200px) {
    font-family: "Glegoo";
    font-size: 1.2em;
    line-height: 5;
    color: #c3392c;
  }
`;
export const SubtitleStyled = styled.h3`
  font-family: "Glegoo";
  text-align: left;
  color: grey;
  width: 150px;
  height: 25px;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: -0.28px;

  @media screen and (max-width: 1200px) {
    font-family: "Glegoo";
    font-size: 1em;
    line-height: 1.5;
  }
`;

export const ParagaphyStyled = styled.p`
  text-align: left;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  width: 500px;

  @media screen and (max-width: 1200px) {
    line-height: 1.3;
    max-width: 90vw;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-self: left;
`;

export const Button = styled.button`
  width: 140px;
  height: 30px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4c1b44;
  font-weight: bold;
`;

export const Button2 = styled.button`
  width: 140px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffde59;
  color: #1b2238;
  font-weight: bold;
`;

export const Button3 = styled.button`
  width: 140px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #1b2238;
  color: white;
  font-weight: bold;
`;
