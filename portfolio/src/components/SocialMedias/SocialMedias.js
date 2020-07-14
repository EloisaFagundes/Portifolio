import React from "react";
import { SocialWrapper, SocialIconStyled } from "./Styles";

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
