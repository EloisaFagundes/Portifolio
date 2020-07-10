import React from "react";
import styled from "styled-components";
import SocialMedias from "../../components/SocialMedias/SocialMedias";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #6580ac;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (max-width: 1200px) {
    height: auto;
    width: 46vh;
  }

`;

const ImageStyled = styled.img`
  height: 80vh;
  margin: 0;

  @media screen and (max-width: 1200px) {
    height: auto;
    width: 46vh;
  }
`;

const SocialWrapper = styled.div`
  align-self: center;
`;

const InformationWrapper = styled.div`
  padding: 9rem 11rem 6rem 4rem;
  color: #f5f5f5;
  text-align: left;
  word-wrap: break-word;

  @media screen and (max-width: 1200px) {
    padding: 2rem;
  }
`;

function BannerApresentation() {
  return (
    <ContentWrapper>
      <div>
        <ImageStyled src={require("../../images/minha-foto.jpg")} />
      </div>

      <InformationWrapper>
        <h1>Olá, sou Eloisa Fagundes</h1>
        <h3> Desenvolvedora Web Full Stack</h3>
        <p> Apaixonada por tecnologia, programação e gatos</p>
      </InformationWrapper>

      <SocialWrapper>
        <SocialMedias />
      </SocialWrapper>
    </ContentWrapper>
  );
}

export default BannerApresentation;
