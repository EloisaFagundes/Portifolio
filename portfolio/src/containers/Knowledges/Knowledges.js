import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  background-color: #d3ad0a;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
  max-height: 80vh;
  height: 70vh;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    /* padding: 0;
    width: 100%;
    margin: 0;
    height: 125vh; */
  }
`;

const TextWrapper = styled.div`
/* background-color: orange; */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: justify;
  width: 40vw;
  flex-direction: column;
  width: 45%;

  @media screen and (max-width: 991px) {
    /* padding: 3rem 0;*/
    width: 90vw; 
    text-align: justify; 
  }
`;

const BlocksTextsWrapper = styled.div`
  /* background-color: green; */
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
  width: 1230px;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    max-width: 80vw;
    /* margin-bottom: 2vh; */
    /* padding: 0;
   
    width: 90%;
    height: 100vh;
    margin: 0; */
  }
`;

const TitleStyle = styled.h1`
  /* background-color: purple; */
  font-family: "Glegoo";
  color: #171430;
  margin-bottom: 50px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
  }
`;

const Subtitle = styled.h1`
   color: #171430;
  font-family: "Glegoo";
  font-size: 1.7em;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
    color: #ffff;
  }
`;

const Paragraphy = styled.p`
 /* background-color: white; */
  /* font-size: 1.5em; */
  text-align: center;
  color: #171430;
`;

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
              Dotenv | UUID | Bcrypt  AWS(EC2,Lambda e API Gateway) |
              JsonWebToken | Jest | Rest API |
            </Paragraphy>
          </TextWrapper>
        </BlocksTextsWrapper>
      </ContentWrapper>
    </>
  );
}

export default Knowledges;
