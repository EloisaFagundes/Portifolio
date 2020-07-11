import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
 
  background-color: #282933;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  text-align: justify;
  margin: 3vw;
  color: white;
`;


const TitleSectionStyle = styled.h1`
  /* background-color: purple; */
  color: white;
`;

export const AllCoursesWrapper = styled.div`
  display: flex;
  justify-content: space-between;

`;

function Education() {
  return (
    <ContentWrapper>
      <TitleSectionStyle>Educação</TitleSectionStyle>
      <AllCoursesWrapper>
        <CourseWrapper>
          <h2>Curso Web Full Stack na Labenu_</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CourseWrapper>

        <CourseWrapper>
          <h2>Curso Web Full Stack na Labenu_</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CourseWrapper>

        <CourseWrapper>
          <h2>Curso Web Full Stack na Labenu_</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </CourseWrapper>
      </AllCoursesWrapper>
    </ContentWrapper>
  );
}

export default Education;
