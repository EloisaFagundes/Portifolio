import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  height: 1100px;
  flex-direction: column;
`;

const TitleSection = styled.h1`
  font-family: "Glegoo";
  /* background-color: pink; */
  /* @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
    color: #d3ad0a;
  } */
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2;
    max-width: 100vw;
  }
`;

const ProjectWrapper = styled.div`
  /* background-color: #d3ad0a;
  height: 315px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center; */
  /* background-color: orange; */
  /* height:315px; */
  /* border: solid 1px blue; */
  height: 315px;
  max-width: 900px;
  max-height: 310px;
  margin: 0 auto;
  display: flex;
`;

const ProjectWrapper1 = styled.div`
  /* background-color: orange; */
  /* height:315px; */
  /* border: solid 1px blue; */
  max-width: 800px;
  max-height: 310px;
  margin: 0 auto;
  display: flex;
  /* align-items: center;
  align-content: center;
  align-self: center; */
`;

const IllustrationWrapper = styled.div`
  /* background-color: #0080ff; */
  /* border: solid 1px red; */
  /* align-content: center; */
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-top: 4px;
  /* justify-content: center; */
  /* align-self: center; */
  /* height:315px; */
`;
const IllustrationStyled = styled.img`
  /* background-color: purple; */
  /* border: solid 1px red; */
  width: 250px;
  height: 250px;
  @media screen and (max-width: 991px) {
    /* height: 15vh; 
    width: auto; */ 
    display: none;
  }
`;
const ProjetctDetailWrapper = styled.div`
  /* background-color: #ff0000; */
  /* align-items: center; */
  /* justify-content: center; */
  /* align-self: center; */
  /* width:310px; */
  height: 310px;
  @media screen and (max-width: 1200px) {
    /* font-size: 1.5em; */
    line-height: 3vh;
    max-width: 90vw;
  }
`;

const TitleStyled = styled.h2`
  text-align: left;
  /* background-color: purple; */
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
const SubtitleStyled = styled.h3`
  background-color: white;
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

const ParagaphyStyled = styled.p`
  text-align: left;
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  width: 500px;

  @media screen and (max-width: 1200px) {
    /* background-color: yellow; */
    /* font-size: 0.5em; */
    line-height: 1.3;
    max-width: 90vw;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  /* background-color: white; */
  align-self: left;
`;

const Button = styled.button`
  width: 140px;
  height: 30px;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #4c1b44;
  font-weight: bold;
`;

const Button2 = styled.button`
  width: 140px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #ffde59;
  color: #1b2238;
  font-weight: bold;
`;

const Button3 = styled.button`
  width: 140px;
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #1b2238;
  color: white;
  font-weight: bold;
`;
function MyProjects() {
  return (
    <ContentWrapper id="MyProjects">
    <TitleSection>Meus Projetos</TitleSection>

      <ProjectWrapper1>
        <IllustrationWrapper>
          <IllustrationStyled
            src={require("../../images/computador fundo roxo.png")}
            alt=""
          />
        </IllustrationWrapper>

        <ProjetctDetailWrapper>
          <TitleStyled>4eddit</TitleStyled>
          <SubtitleStyled>Front-end</SubtitleStyled>
          <ParagaphyStyled>
            É uma rede social realmente funcional (com cadastro, login, posts,
            likes e comentários) baseada no reddit.com. É um CRUD, SPA que
            consome dados de uma RestAPI externa através da bibliotexa AXIOS.
            Foi desenvolvido utilizando React + Redux, Material-UI e
            Styled-Components na estilização.
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button
              onClick={() =>
                window.open(
                  "https://github.com/EloisaFagundes/4eddit",
                  "_blank"
                )
              }
            >
              ver no GitHub
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
          <TitleStyled>Cookenu</TitleStyled>
          <SubtitleStyled>Back-end</SubtitleStyled>
          <ParagaphyStyled>
            Esse produto é uma rede social de receitas, na qual os usuários
            podem dividir informações relevantes sobre comidas e receitas que
            tenham experimentado. Ela possui todas as funcionalidades mais
            comuns em redes sociais. CRUD utilizando typescript, express, UUID e
            MySQL.
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button2
             onClick={() =>
              window.open(
                "https://github.com/EloisaFagundes/Backend-Cookenu",
                "_blank"
              )
            }>ver no GitHub</Button2>
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
          <TitleStyled>Spotenu</TitleStyled>
          <SubtitleStyled>Full Stack</SubtitleStyled>
          <ParagaphyStyled>
            É um projeto que visa facilitar o acesso a músicas pelo mundo. Para
            isso, existe o suporte para dois tipos de usuários: as bandas (ou
            músicos) e os ouvintes. Além disso, possui também administradores
            que tomam conta das permissões da aplicação. No Front-end utilizei
            React + Redux e Hooks e no Back-end Typescript, MySQL, Express, UUID
            e JWT.
          </ParagaphyStyled>
          <ButtonWrapper>
            <Button3
            onClick={() =>
              window.open(
                "https://github.com/EloisaFagundes/projeto-fullstack",
                "_blank"
              )
            }>ver no GitHub</Button3>
          </ButtonWrapper>
        </ProjetctDetailWrapper>
      </ProjectWrapper>
    </ContentWrapper>
  );
}

export default MyProjects;
