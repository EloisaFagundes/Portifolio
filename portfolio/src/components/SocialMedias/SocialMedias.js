import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-device-width: 1200px){
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
   /* @media screen and (max-device-width: 1200px){
        width: 20vw;
        background-color: #6580ac;
        border-radius: 90px;
    } */
`

function SocialMedias() {
  return (
    <SocialWrapper>
        <SocialIconStyled src={require("../../images/linkedin.png")} alt="bla"/>
        <SocialIconStyled src={require("../../images/github.png")} alt="bla"/>
        <SocialIconStyled src={require("../../images/email.png")} alt="bla"/>
        <SocialIconStyled src={require("../../images/whatsapp.png")} alt="bla"/>
    </SocialWrapper>
  );
}

export default SocialMedias;