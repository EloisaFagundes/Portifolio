import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #4c1b44;
  flex-wrap: wrap;
  width: 100%;
  height: 80vh;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    justify-content: flex-start;
    display: flex;
    flex-direction: row;
    /* padding: 0; */
    max-width: 100vw;
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
    display: none;
  }
`;

const ButtonStyled = styled.button`
  /* background-color: red; */
  width: 150px;
  height: 40px;
  border-radius: 9px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
  background-color: #d3ad0a;
  color: rgba(0, 0, 0, 0.5);
  font-weight: bold;
  align-self: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    /* background-color: red; */
    font-size: 0.9em;
    width: 100vw;
    margin: ;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  /* background-color: purple; */
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  /* padding: 20px 0; */

  @media screen and (max-width: 1200px) {
    padding: 0;
    width: 40vw;
    margin: 0;
    margin-top: 4vh;
  }
`;

const AboutMeWrapper = styled.div`
  /* background-color: red; */
  margin-left: 10px;
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
    /* min-height: 80vh; */
    padding: 0;
    max-width: 100vw;
    margin: 4vh 10vw;
  }
`;

const TextWrapper = styled.div`
  /* background-color: white; */
  width: 30vw;
  text-align: justify;

  @media screen and (max-width: 991px) {
    padding: 0;
    width: 80vw;
  }
`;

const ListTecnologiesConteiner = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #282933;
  width: 100%;
  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

const TitleSection = styled.h1`
  color: #ffff;
  font-family: "Glegoo";

  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
    color: #d3ad0a;
  }
`;
const ParagraphyStyled = styled.p`
  /* background-color: orange; */
  text-align: justify;
  color: #ffff;
  font-family: "Montserrat", sans-serif;
  line-height: 3vh;
  max-width: 40vw;
  @media screen and (max-width: 1200px) {
    max-width: 90vw;
    font-size: 0.9em;
    width: 75vw;
    margin: 0;
    padding: 0;
  }
`;
// const ItemTecnologiesStyled = styled.p`
//   font-family: "Glegoo";
//   font-size: 13px;
//   font-weight: bold;

//   @media screen and (max-width: 1200px) {
//     font-size: 0.5em;
//   }
// `;

// const tecnologies = [
//   "JavaScript_",
//   "CSS_",
//   "HTML_",
//   " React_",
//   " NodeJS_",
//   " MySQL_",
//   " APIRest_",
//   " AWS",
// ];

function AboutMe() {
  return (
    <ContentWrapper id="AboutMe">
      <AboutMeWrapper>
        <TextWrapper>
          <TitleSection>Sobre mim</TitleSection>
          <ParagraphyStyled>
            Você também pode me chamar de Lolla. Sou natural de Monte Verde- MG,
            desembarquei em São Paulo em 2013 e desde então esse é o meu lar.
            Sou formada em Publicidade e Propaganda pela FAM, atuei durante 4
            anos com Marketing Digital no 3º setor e recentemente mergulhei na
            mais profundamente no mundo do desenvolvimento web.
          </ParagraphyStyled>
        </TextWrapper>
        {/* <ListTecnologiesConteiner>
          {tecnologies.map((item) => (
            <ItemTecnologiesStyled>{item}</ItemTecnologiesStyled>
          ))}
        </ListTecnologiesConteiner> */}

        <ButtonWrapper>
          <ButtonStyled
            onClick={() =>
              window.open(
                "https://github.com/EloisaFagundes/Portifolio/files/4910114/eloisa-fagundes-desenvolvedora-web.pdf",
                "_blank"
              )
            }
          >
            CV em PDF
          </ButtonStyled>
        </ButtonWrapper>
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
