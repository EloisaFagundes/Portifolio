import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;

  @media screen and (max-device-width: 1200px) {
    /* background-color: red; */
    /* justify-content: space-between;
        flex-direction: row;
        position: absolute;
        margin: 4vh;
        height: 5vh;
        width: 82vw;
        z-index: 2; */
    display: none;
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
`;

function SocialMedias() {
  return (
    <SocialWrapper>
      <SocialIconStyled
        src={require("../../images/linkedin.png")}
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
    </SocialWrapper>
  );
}

export default SocialMedias;
