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


