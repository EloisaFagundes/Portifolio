import styled from "styled-components";

export const ContentWrapper = styled.div`
  background-color: #282933;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 1200px) {
    /* padding: 0; */
    width: 100%;
    margin: 0;
    height: 140vh;
  }
`;

export const CourseWrapper = styled.div`
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  text-align: justify;
  margin: 0 30px;
  color: white;

  @media screen and (max-width: 991px) {
    /* padding: 3rem 0;*/
    margin: 0;
    margin-bottom: 4vh;
    flex-wrap: wrap;
    /* width: 65vw;  */
    text-align: justify;
    width: 90vw;
    align-content: center;
  }
`;

export const TitleSectionStyle = styled.h1`
  /* background-color: purple; */
  color: white;
  font-family: "Glegoo";
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
  }
`;

export const AllCoursesWrapper = styled.div`
  /* background-color: green; */
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    /* padding: 3rem 0;  */
    /* width: 90vw; */
    text-align: justify;
    flex-wrap: wrap;
    max-width: 90vw;
    align-content: center;
  }
`;

export const Subtitle = styled.h1`
  /* color: #171430; */
  /* background-color: pink; */
  font-family: "Glegoo";
  font-size: 1.3em;
  font-family: "Glegoo";
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
  /* background-color: white; */
  color: #ffff;
  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    text-align: justify;
    color: #ffff;
    width: 80vw;
    line-height: 1.3;
  }
`;
