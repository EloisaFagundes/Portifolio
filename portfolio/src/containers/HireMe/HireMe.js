import React from "react";
import {
  ContentWrapper,
  TitleSectionStyle,
  TextWrapper,
  TextStyle,
  SocialMediaWrapper,
  SocialIconStyled,
} from "./Styles";


function HireMe() {
  return (
    <ContentWrapper id="HireMe">
      <TitleSectionStyle>Contrate-me!</TitleSectionStyle>
      <TextWrapper>
        <TextStyle>
          Estou em busca da minha primeira oportunidade na área de tecnologia,
          para que possa aprender , desenvolver minhas habilidades e evoluir na
          minha carreira profissional.
        </TextStyle>

        <TextStyle>E-mail para contato: lola.fernanda@hotmail.com</TextStyle>
      </TextWrapper>

      <SocialMediaWrapper>
        <SocialIconStyled
          src={require("../../images/linkedin.png")}
          type="button"
          class="effect transEffect"
          alt="linkedin logo contorno branco vazado"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/eloisa-fernanda-nunes-fagundes-1b72bbb1/",
              "_blank"
            )
          }
        />
        <SocialIconStyled
          src={require("../../images/github.png")}
          alt="github logo branco vazado"
          onClick={() =>
            window.open("https://github.com/EloisaFagundes", "_blank")
          }
        />
        <SocialIconStyled
          src={require("../../images/email.png")}
          alt="email logo carta branca vazada"
          onClick={() =>
            window.open("mailto:lola.fernanda@hotmail.com", "_blank")
          }
        />
        <SocialIconStyled
          src={require("../../images/whatsapp.png")}
          alt="whatsapp logo todo branco"
          onClick={() =>
            window.open(
              "https://web.whatsapp.com/send?phone=+5511944531080",
              "_blank"
            )
          }
        />
      </SocialMediaWrapper>
    </ContentWrapper>
  );
}

export default HireMe;
