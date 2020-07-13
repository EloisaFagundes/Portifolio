import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c3392c;
  flex-wrap: wrap;
  width: 100%;
  height: 55vh;
  /* justify-content: space-around; */
  font-family: "Montserrat", sans-serif;
  color: #ffff;

  /* @media screen and (max-width: 1200px) {
    padding: 0;
    width: 80vw;
    margin: 0;
    height: 65vh;
  } */
`;
const TitleSectionStyle = styled.h1`
  background-color: purple;
  color: white;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
    max-width: 100vw;
  }
`;

const TextWrapper = styled.div`
  background-color: purple;
  margin-left: 30vw;
  width: 39vw;
  height: 17vh;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.5vh;
  letter-spacing: -0.24px;
  /* text-align: center; */
  /* justify-content: center; */
  @media screen and (max-width: 1200px) {
  font-size: 1em;
  text-align: center;
  color: #ffff;
  width: 80vw;
  height: 30vh;
  line-height: 1.3;
  margin: 0;
  }
`;

const TextStyle = styled.p`
font-family: "Glegoo";
font-size: 15px;
`

const SocialMediaWrapper = styled.div`
  background-color: red; 
  /* display: flex; */
  /* flex-direction: row; */
  align-items: center;
  height: 10vh;
  margin-top: 15px;
  @media screen and (max-width: 1200px) {
  margin-top: 2vh;
  width: 80vw;
  }
`;

const SocialIconStyled = styled.img`
  width: 15vh;
  cursor: pointer;

  :hover,
  :focus {
  color: #333;
  background-color: rgba(255,255,255,0.1);
  border-radius: 90px;
  }
  @media screen and (max-device-width: 1200px){
        width: 20vw;
    }
`;

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
        class= "effect transEffect"
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
