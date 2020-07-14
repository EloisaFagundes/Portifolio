import React from "react";
import SocialMedias from "../../components/SocialMedias/SocialMedias";
import {
  InformationWrapper,
  Paragraphy,
  Subtitle,
  Title,
  ContentWrapper,
  PhotoStyled,
  SocialWrapper,
} from "./Styles";


function BannerApresentation() {
  return (
    <ContentWrapper>
      <div>
        <PhotoStyled src={require("../../images/minha-foto.jpg")} />
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
