import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: #282933;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0;
    min-height: 140vh;
    flex-direction: column;
  }
`;

export const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  text-align: justify;
  margin: 0 30px;
  color: white;

  @media screen and (max-width: 1200px) {
    margin: 0;
    margin-bottom: 4vh;
    flex-wrap: wrap;
    text-align: justify;
    width: 90vw;
    align-content: center;
  }
`;

export const TitleSectionStyle = styled.h1`
  color: white;
  font-family: "Glegoo";
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
  }
`;

export const AllCoursesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    text-align: justify;
    flex-wrap: wrap;
    max-width: 90vw;
    align-content: center;
    justify-content: column;
  }
`;

export const Subtitle = styled.h1`
  font-family: "Glegoo";
  font-size: 1.3em;
  text-align: left;
  @media screen and (max-width: 1200px) {
    font-family: "Glegoo";
    font-size: 1.1em;
    line-height: 1.5vh;
    color: #d3ad0a;
  }
`;

export const Institute = styled.h4`
  color: #6a7eea;
  font-size: 1em;
  margin: 1vh 0;
  @media screen and (max-width: 1200px) {
    font-family: "Glegoo";
    font-size: 1em;
    line-height: 1.5vh;
    margin: 1vh 0;
  }
`;
export const Paragraphy = styled.p`
  color: #ffff;
  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    text-align: justify;
    color: #ffff;
    width: 80vw;
    line-height: 1.3;
  }
`;
