import styled from "styled-components";

export const H1 = styled.h1`
  color: #ffff;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
    color: #d3ad0a;
  }
`;

export const H1Default = styled(H1)`
  color: black;
`;

export const Title = styled(H1)`
  color: #fddb67;
  line-height: 10px;
  font-size: 40px;
`;

export const H2 = styled.h2`
  line-height: 12px;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const H3 = styled.h3`
  line-height: 12px;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1rem;
  }
`;

export const H4 = styled.h4`
  color: #6a7eea;
  font-size: 1em;
  margin: 1vh 0;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1em;
    line-height: 1.5vh;
    margin: 1vh 0;
  }
`;

export const TitleSection = styled(H1)`
  color: white;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    line-height: 3vh;
  }
`;

export const Body = styled.body`
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 0.7rem;
  }
`;

export const Paragraphy = styled.p`
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

export const Subtitle = styled(H3)`
  color: #d3ad0a;
`;
