import React from "react";
import {
  ContentWrapper,
  CourseWrapper,
  TitleSectionStyle,
  AllCoursesWrapper,
  Subtitle,
  Institute,
  Paragraphy,
} from "./Styles";

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
            o bootcamp. No decorrer do curso os alunos desenvolvem aplicações
            funcionais pensando no front end e em como usuário irá interagir com
            a aplicação, no back-end criando e estruturando o banco de dados que
            receberá as informações, pensando também em validações e
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
            também são expostas problemáticas sobre as etapas do planejamento de
            marketing e ferramentas para auxiliar o profissional.
          </Paragraphy>
        </CourseWrapper>

        <CourseWrapper>
          <Subtitle>Publicidade e Propaganda</Subtitle>
          <Institute>Faculdade das Américas</Institute>
          <Paragraphy>
            Bacharelado em Publicidade e Propaganda. Foram ministradas as
            principais ferramentas de comunicação em criação, conteúdos
            digitais, planejamento, mídia, atendimento, marketing, comunicação
            dirigida, entre outros. Aulas práticas com ferramentas do Pacote
            Adobe e Corel Draw também fazem parte da rotina das aulas de
            criação. Semestralmente são desenvolvidos projetos de comunicação e 
            mensuração de budget e veiculação.
          </Paragraphy>
        </CourseWrapper>
      </AllCoursesWrapper>
    </ContentWrapper>
  );
}

export default Education;
