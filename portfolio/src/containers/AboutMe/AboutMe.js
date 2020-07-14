import React from "react";
import { tecnologies } from "./Constants";
import {
  ContentWrapper,
  IllustrationStyled,
  ButtonStyled,
  ButtonWrapper,
  AboutMeWrapper,
  TextWrapper,
  TitleSection,
  ParagraphyStyled,
  ListTecnologiesConteiner,
  ItemTecnologiesStyled,
} from "./Styles";

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
            anos com Marketing Digital no 3º setor e recentemente mergulhei
            mais profundamente no mundo do desenvolvimento web.
          </ParagraphyStyled>
        </TextWrapper>
        <ListTecnologiesConteiner>
          {tecnologies.map((item) => (
            <ItemTecnologiesStyled>{item}</ItemTecnologiesStyled>
          ))}
        </ListTecnologiesConteiner>

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
