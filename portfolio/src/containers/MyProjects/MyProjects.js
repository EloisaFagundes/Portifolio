import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: green;
  display: flex;
  flex-wrap: wrap;
  height: 350vh;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
`;

const ProjectWrapper = styled.div`
  background-color: #d3ad0a;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const IllustrationStyled = styled.img`
  /* background-color: purple; */
  width: 311px;
  height: 215px;
  /* object-fit: contain; */

  /* @media screen and (max-width: 991px) {
    height: 56vh;
    width: auto;
    display: none;
  } */
`;

const TitleStyled = styled.h1`
  background-color: purple;
  font-family: "Montserrat", sans-serif;
  width: 250px;
  height: 52px;
  font-size: 42px;
  font-weight: bold;
  font-stretch: normal;
  font-style: 10px;
  line-height: normal;
  letter-spacing: -0.28px;
`;
const SubtitleStyled = styled.h2`
  background-color: grey;
  font-family: "Montserrat", sans-serif;
  width: 100px;
  height: 25px;
  font-size: 21px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const ParagaphyStyled = styled.p`
text-align: left;
`

function MyProjects() {
  return (
    <ContentWrapper id="MyProjects">
      <ProjectWrapper>
        <div>
          <IllustrationStyled
            src={require("../../images/computador fundo amarelo.png")}
            alt=""
          />
        </div>

        <div>
          <TitleStyled>4eddit</TitleStyled>
          <SubtitleStyled>Front-end</SubtitleStyled>
          <ParagaphyStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParagaphyStyled>
          <button>ver no GitHub</button>
        </div>
      </ProjectWrapper>

      <ProjectWrapper>
        <div>
          <IllustrationStyled
            src={require("../../images/computador fundo roxo.png")}
            alt=""
          />
        </div>

        <div>
          <TitleStyled>Cookenu</TitleStyled>
          <SubtitleStyled>Back-end</SubtitleStyled>
          <ParagaphyStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParagaphyStyled>
          <button>ver no GitHub</button>
        </div>
      </ProjectWrapper>

      <ProjectWrapper>
        <div>
          <IllustrationStyled
            src={require("../../images/computador fundo marinho.png")}
            alt=""
          />
        </div>
        <div>
          <TitleStyled>Spotenu</TitleStyled>
          <SubtitleStyled>Full Stack</SubtitleStyled>
          <ParagaphyStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParagaphyStyled>
          <button>ver no GitHub</button>
        </div>
      </ProjectWrapper>
    </ContentWrapper>
  );
}

export default MyProjects;
