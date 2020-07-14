import React from "react";
import {
  ContentWrapper,
  TitleSection,
  ProjectWrapper,
  ProjectWrapper1,
  IllustrationWrapper,
  IllustrationStyled,
  ProjetctDetailWrapper,
  TitleStyled,
  SubtitleStyled,
  ParagaphyStyled,
  ButtonWrapper,
  Button,
  Button2,
  Button3,
} from "./Styles";


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
              }
            >
              ver no GitHub
            </Button2>
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
              }
            >
              ver no GitHub
            </Button3>
          </ButtonWrapper>
        </ProjetctDetailWrapper>
      </ProjectWrapper>
    </ContentWrapper>
  );
}

export default MyProjects;
