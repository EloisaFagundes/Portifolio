import React from "react";
import { H1Default } from "../../globalStyles/Typography";
import {
  ContentWrapper,
  TextWrapper,
  BlocksTextsWrapper,
  TitleStyle,
  Subtitle,
  Paragraphy,
} from "./Styles";


function Knowledges() {
  return (
      <ContentWrapper>
        <H1Default>Meus conhecimentos</H1Default>

        <BlocksTextsWrapper>
          <TextWrapper>
            <Subtitle>Front-end</Subtitle>
            <Paragraphy>HTML | CSS | JavaScript | Typescript </Paragraphy>
            <Paragraphy>NodeJS | React | Redux |  Redux-Thunk | React Router </Paragraphy>
            <Paragraphy>Styled-Components | Responsividade | Material-UI </Paragraphy>
            <Paragraphy>Autorização | Autenticação |Testes Unitários | Surge</Paragraphy>
          </TextWrapper>

          <TextWrapper>
            <Subtitle>Back-end</Subtitle>
            <Paragraphy>NodeJS | Typescript | Arquitetura MVC </Paragraphy>
            <Paragraphy>MySQL | Knex | Express | Dotenv </Paragraphy>
            <Paragraphy>UUID | Bcrypt | AWS(EC2,Lambda e API Gateway) </Paragraphy>
            <Paragraphy>JsonWebToken | Jest | Rest API </Paragraphy>
          </TextWrapper>
        </BlocksTextsWrapper>
      </ContentWrapper>
  );
}

export default Knowledges;
