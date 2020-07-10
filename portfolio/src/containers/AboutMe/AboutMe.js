import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282933;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    padding: 0;
    width: 46vh;
    margin: 0;
    height: 65vh;
  }
`;

const IllustrationStyled = styled.img`
  /* background-color: purple; */
  height: 80vh;
  width: auto;
  margin-right: 20px;

  @media screen and (max-width: 991px) {
    height: 56vh;
    width: auto;
    display: none;
  }
`;

const ButtonStyled = styled.button`
  background-color: red;
  width: 140px;
  height: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #d3ad0a;
  color: #f5f5f5;
  /* font-style: italic; */
  align-self: center;
`;

const AboutMeWrapper = styled.div`
  margin-left: 10px;
  /* background-color: red; */
  padding: 2rem 2rem 2rem 2rem;
  color: #f5f5f5;
  text-align: left;
  word-wrap: break-word;
  max-width: 41vw;
  width: 30vw;
  align-items: center;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 1200px) {
    padding: 0 3rem;
    max-width: 100vw;
    width: 100vw;
    margin: 0;
  }
`;

const TextWrapper = styled.div`
  /* background-color: green; */
  width: 30vw;
  text-align: justify;

  @media screen and (max-width: 991px) {
    padding: 3rem 0;
    width: 90vw;
    text-align: justify;
  }
`;

const ListTecnologiesConteiner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282933;
  flex-wrap: wrap;
  width: 100%;
`;

const tecnologies = [
  "|CSS",
  "|HTML",
  "|React",
  "|NodeJS",
  "|MySQL",
  "|APIRest",
  "|AWS",
];

function AboutMe() {
  return (
    <ContentWrapper>
      <AboutMeWrapper>
        <TextWrapper>
          <h1>Sobre mim</h1>
          <p>
            Você também pode me chamar de Lolla. Sou natural de Monte Verde- MG,
            desembarquei em São Paulo em 2013 e desde então esse é o meu lar.
            Sou formada em Publicidade e Propaganda pela FAM, atuei durante 4
            anos com Marketing Digital no 3º setor e recentemente mergulhei na
            mais profundamente no mundo do desenvolvimento web.
          </p>
        </TextWrapper>
        <ListTecnologiesConteiner>
          {tecnologies.map((item) => (
            <p>{item}</p>
          ))}
        </ListTecnologiesConteiner>

        <div>
          <ButtonStyled>CV em PDF</ButtonStyled>
        </div>
      </AboutMeWrapper>

      <div>
        <IllustrationStyled
          src={require("../../images/mulher no computador.png")}
          alt=""
        />
      </div>
    </ContentWrapper>
  );
}

export default AboutMe;
