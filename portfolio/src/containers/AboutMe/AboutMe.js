import React from "react";
import { AboutMeStrings } from "./Constants";
import { Separator } from "../../globalStyles/Separator";
import { H1, Paragraphy } from "../../globalStyles/Typography";
import { Button } from "../../globalStyles/Button";
import {
  ContentWrapper,
  Image,
  ButtonWrapper,
  AboutMeWrapper,
  TextWrapper,
} from "./Styles";

const backgroundColor = "#d3ad0a";


function AboutMe() {
  return (
    <ContentWrapper id="AboutMe">
      <AboutMeWrapper>
        <TextWrapper>
          <Separator />
          <H1>{AboutMeStrings.aboutMe.title}</H1>
          <Paragraphy>{AboutMeStrings.aboutMe.description}</Paragraphy>
        </TextWrapper>
        <Separator />
        <ButtonWrapper>
          <Button
            backgroundColor={backgroundColor}
            onClick={() => window.open(AboutMeStrings.gitHubLink,"_blank")}
          >
            {AboutMeStrings.aboutMe.button}
          </Button>
        </ButtonWrapper>
      </AboutMeWrapper>

      <div>
        <Image src={require("../../images/mulher no computador.png")} alt="" />
      </div>
    </ContentWrapper>
  );
}

export default AboutMe;
