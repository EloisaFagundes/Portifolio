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

  @media screen and (max-width: 1200px) {
    /* padding: 0; */
    width: 100%;
    margin: 0;
    height: 140vh;
  }
`;

const CourseWrapper = styled.div`
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

const TitleSectionStyle = styled.h1`
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
    max-width:90vw;
    align-content: center;
  }
`;

const Subtitle = styled.h1`
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
    color:#d3ad0a
  }
`;

const Institute = styled.h4`
color:#6a7eea;
font-size: 1em;
margin: 1vh 0;
@media screen and (max-width: 1200px) {
    font-family: "Glegoo";
    font-size: 1em;
    line-height: 1.5vh;
    margin: 1vh 0;
  }
`
const Paragraphy = styled.p`
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

function Education() {
  return (
    <ContentWrapper>
      <TitleSectionStyle>Educação</TitleSectionStyle>
      <AllCoursesWrapper>
        <CourseWrapper>
          <Subtitle>Curso Web Full Stack</Subtitle>
          <Institute>Labenu_</Institute>
          <Paragraphy>
            A Labenu é uma startup que forma Desenvolvedores Web Full Stack para
            o mercado de trabalho. São mais de 1000 horas de programação durante
            o bootcamp. Durante o curso os alunos desenvolvem aplicações
            funcionais pensando no front end e em como usuário irá interagir com
            a aplicação e no back-end, criando e estruturando o banco de dados
            que receberá a informação, pensando também em validações e
            verificações.
          </Paragraphy>
        </CourseWrapper>

        <CourseWrapper>
          <Subtitle>Planejamento em Mkt Digital</Subtitle>
          <Institute>São Paulo Digital School</Institute>
          <Paragraphy>
            O curso livre aborda temas que vão desde publicidade online, mídias
            sociais, métricas, SEO (search engine optimization) – dando ao aluno
            uma visão completa das atividades que o profissional da área digital
            realiza -, passando ainda por conceitos teóricos, cases e
            problemáticas do dia a dia vivenciadas em empresas e agências.
          </Paragraphy>
        </CourseWrapper>

        <CourseWrapper>
          <Subtitle>Publicidade e Propaganda</Subtitle>
          <Institute>Faculdade das Américas</Institute>
          <Paragraphy>
            Bacharelado em Publicidade e Propaganda. Foram ministradas as
            principais ferramentas de comunicação em criação, conteúdos
            digitais, planejamento, mídia, atendimento, marketing, comunicação
            dirigida, entre outros.
          </Paragraphy>
        </CourseWrapper>
      </AllCoursesWrapper>
    </ContentWrapper>
  );
}

export default Education;
