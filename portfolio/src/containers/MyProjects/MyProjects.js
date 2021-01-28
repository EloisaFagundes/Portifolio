import React from "react";
import {
  ContentWrapper,
  ProjectWrapper,
  ProjectWrapper1,
  IllustrationWrapper,
  IllustrationStyled,
  ProjetctDetailWrapper,
  TitleStyled,
  SubtitleStyled,
  ParagaphyStyled,
  ButtonWrapper,
} from "./Styles";

import { Button } from "../../globalStyles/Button";
import { H1Default } from "../../globalStyles/Typography";
import { projectStrings } from "./Constants";

const colorProjectOne = "#4c1b44";
const colorProjectTwo = "#d3ad0a";
const colorProjectThree = "#1b2238";

function MyProjects() {
  return (
    <ContentWrapper id="MyProjects">
      <H1Default>{projectStrings.title}</H1Default>

      <ProjectWrapper1>
        <IllustrationWrapper>
          <IllustrationStyled
            src={require("../../images/computador fundo roxo.png")}
            alt=""
          />
        </IllustrationWrapper>

        <ProjetctDetailWrapper>
          <TitleStyled>{projectStrings.FourEddit.project}</TitleStyled>
          <SubtitleStyled>{projectStrings.FourEddit.stack}</SubtitleStyled>
          <ParagaphyStyled>
            {projectStrings.FourEddit.description}
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button
              backgroundColor={colorProjectOne}
              onClick={() =>
                window.open(projectStrings.FourEddit.link, "_blank")
              }
            >
              {projectStrings.button}
            </Button>
          </ButtonWrapper>
        </ProjetctDetailWrapper>
      </ProjectWrapper1>

      <ProjectWrapper>
        <IllustrationWrapper>
          <IllustrationStyled
            src={require("../../images/computador fundo amarelo.png")}
            alt=""
          />
        </IllustrationWrapper>

        <ProjetctDetailWrapper>
        <TitleStyled>{projectStrings.Cookenu.project}</TitleStyled>
          <SubtitleStyled>{projectStrings.Cookenu.stack}</SubtitleStyled>
          <ParagaphyStyled>
            {projectStrings.Cookenu.description}
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button
              backgroundColor={colorProjectTwo}
              onClick={() =>
                window.open(projectStrings.Cookenu.link, "_blank")
              }
            >
              {projectStrings.button}
            </Button>
          </ButtonWrapper>
        </ProjetctDetailWrapper>
      </ProjectWrapper>

      <ProjectWrapper>
        <IllustrationWrapper>
          <IllustrationStyled
            src={require("../../images/computador fundo marinho.png")}
            alt=""
          />
        </IllustrationWrapper>
        <ProjetctDetailWrapper>
        <TitleStyled>{projectStrings.Spotenu.project}</TitleStyled>
          <SubtitleStyled>{projectStrings.Spotenu.stack}</SubtitleStyled>
          <ParagaphyStyled>
            {projectStrings.Spotenu.description}
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button
              backgroundColor={colorProjectThree}
              onClick={() =>
                window.open(projectStrings.Spotenu.link, "_blank")
              }
            >
              {projectStrings.button}
            </Button>
          </ButtonWrapper>
        </ProjetctDetailWrapper>
      </ProjectWrapper>
    </ContentWrapper>
  );
}

export default MyProjects;
