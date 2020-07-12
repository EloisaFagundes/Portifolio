import React from "react";
import styled from "styled-components";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c3392c;
  flex-wrap: wrap;
  width: 100%;
  height: 55vh;
  /* justify-content: space-around; */
  font-family: "Montserrat", sans-serif;
  color: #ffff;

  /* @media screen and (max-width: 1200px) {
    padding: 0;
    width: 46vh;
    margin: 0;
    height: 65vh;
  } */
`;

const TextWrapper = styled.p`
  /* background-color: purple; */
  margin-left: 30vw;
  width: 39vw;
  height: 17vh;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.5vh;
  letter-spacing: -0.24px;
  text-align: center;
`;
const SocialMediaWrapper = styled.div`
  /* background-color: red;  */
  /* display: flex; */
  /* flex-direction: row; */
  align-items: center;
  height: 10vh;
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
  /* @media screen and (max-device-width: 1200px){
        width: 20vw;
        background-color: #6580ac;
        border-radius: 90px;
    } */
`;

function HireMe() {
  return (
    <ContentWrapper id="HireMe">
      <h1>Contrate-me</h1>
      <TextWrapper>
        <p>
          Estou em busca da minha primeira oportunidade na área de tecnologia,
          para que possa aprender , desenvolver minhas habilidades e evoluir na
          minha carreira profissional.
        </p>

        <p>E-mail para contato: lola.fernanda@hotmail.com</p>
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
