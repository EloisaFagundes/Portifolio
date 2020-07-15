import React from "react";
import SocialMedias from "../../components/SocialMedias/SocialMedias";
import {
  InformationWrapper,
  Paragraphy,
  Subtitle,
  Title,
  ContentWrapper,
  PhotoStyled,
} from "./Styles";


function BannerApresentation() {
  return (
    <ContentWrapper>
        <PhotoStyled src={require("../../images/minha-foto.jpg")} />
      <InformationWrapper>
        <Title>Olá, </Title>
        <Title> sou Eloisa Fagundes</Title>
        <Subtitle> Desenvolvedora Web Full Stack</Subtitle>
        <Paragraphy> Apaixonada por tecnologia, programação e gatos</Paragraphy>
      </InformationWrapper>

        <SocialMedias />

    </ContentWrapper>
  );
}

export default BannerApresentation;
