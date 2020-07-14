import React from "react";
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
    <>
      <ContentWrapper>
        <TitleStyle>Meus conhecimentos</TitleStyle>

        <BlocksTextsWrapper>
          <TextWrapper>
            <Subtitle>Front-end</Subtitle>
            <Paragraphy>
              HTML | CSS | JavaScript | Typescript | NodeJS React Redux |
              Material-UI | Styled-Components Autorização | Testes Unitários |
              Responsividade Autenticação | Redux-Thunk | React Router | Surge
            </Paragraphy>
          </TextWrapper>

          <TextWrapper>
            <Subtitle>Back-end</Subtitle>
            <Paragraphy>
              NodeJS | Typescript | Arquitetura MVC | MySQL Knex | Express |
              Dotenv | UUID | Bcrypt AWS(EC2,Lambda e API Gateway) |
              JsonWebToken | Jest | Rest API |
            </Paragraphy>
          </TextWrapper>
        </BlocksTextsWrapper>
      </ContentWrapper>
    </>
  );
}

export default Knowledges;
