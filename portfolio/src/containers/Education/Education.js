import React from "react";
import {
  ContentWrapper,
  CourseWrapper,
  TitleSection,
  AllCoursesWrapper,
} from "./Styles";

import { H4, Paragraphy, Subtitle, H1 } from "../../globalStyles/Typography";
import { Separator } from "../../globalStyles/Separator";
import { EducationStrings } from "./Constants";

const strings = EducationStrings.education;

function Education() {
  return (
    <ContentWrapper>
      <Separator />
      <H1>{strings.title}</H1>
      <AllCoursesWrapper>
        <CourseWrapper>
          <Subtitle>{strings.bootcamp.subtitle}</Subtitle>
          <H4>{strings.bootcamp.school}</H4>
          <Paragraphy>{strings.bootcamp.description}</Paragraphy>
        </CourseWrapper>

        <CourseWrapper>
          <Subtitle>{strings.marketing.subtitle}</Subtitle>
          <H4>{strings.marketing.school}</H4>
          <Paragraphy>{strings.marketing.description}</Paragraphy>
        </CourseWrapper>

        <CourseWrapper>
          <Subtitle>{strings.graduate.subtitle}</Subtitle>
          <H4>{strings.graduate.school}</H4>
          <Paragraphy>{strings.graduate.description}</Paragraphy>
        </CourseWrapper>
      </AllCoursesWrapper>
    </ContentWrapper>
  );
}

export default Education;
