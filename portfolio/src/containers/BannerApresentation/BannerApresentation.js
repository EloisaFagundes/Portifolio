import React from "react";
import styled from "styled-components";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

const ContentWrapper = styled.div`
  background-color: #6580ac;
  display: flex;
  flex-direction: row;
  max-height: 80vh;
  flex-wrap: wrap;
  width: 100%;
  font-family: "Montserrat", sans-serif;

  @media screen and (max-width: 1200px) {
    /* height:100%;
    width: 100vw; */
  }
`;

const ImageStyled = styled.img`
  height: 80vh;
  width: auto;
  margin: 0;

  @media screen and (max-width: 1200px) {
    height: auto;
    width: 100%;
  }
`;

const SocialWrapper = styled.div`
  /* background-color: purple; */
  align-self: center;
`;

const InformationWrapper = styled.div`
  /* background-color: green; */
  max-height: 80vh;
  padding: 30vh 10vw 30vh 4rem;

  color: #f5f5f5;
  text-align: left;
  word-wrap: break-word;

  @media screen and (max-width: 1200px) {
    padding:2vh 8.9vw;
    min-height: 10vh;
  }
`;

const Title = styled.h1`
  color: #fddb67;
  line-height: 10px;
  font-family: "Glegoo";
  font-size: 40px;
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 2vh;
  }
`;
const Subtitle = styled.h3`
  line-height: 12px;
  font-family: "Glegoo";

  @media screen and (max-width: 1200px) {
    font-size: 1em;
  }
`;
const Paragraphy = styled.p`
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 0.7em;
  }
`;

function BannerApresentation() {
  return (
    <ContentWrapper>
      <div>
        <ImageStyled src={require("../../images/minha-foto.jpg")} />
      </div>

      <InformationWrapper>
        <Title>Olá, </Title>
        <Title> sou Eloisa Fagundes</Title>
        <Subtitle> Desenvolvedora Web Full Stack</Subtitle>
        <Paragraphy> Apaixonada por tecnologia, programação e gatos</Paragraphy>
      </InformationWrapper>

      <SocialWrapper>
        <SocialMedias />
      </SocialWrapper>
    </ContentWrapper>
  );
}

export default BannerApresentation;
