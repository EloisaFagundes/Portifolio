import React from "react";
import SocialMedias from "../../components/SocialMedias/SocialMedias";
import { Separator } from "../../globalStyles/Separator";
import { Title, H3, Body } from "../../globalStyles/Typography";
import { InformationWrapper, ContentWrapper, PhotoStyled } from "./Styles";
import { BannerStrings } from "./Constants";

const strings = BannerStrings.banner;

function BannerApresentation() {
  return (
    <ContentWrapper>
      <PhotoStyled src={require("../../images/minha-foto.jpg")} />
      <InformationWrapper>
        <Separator />
        <Title>{strings.title}</Title>
        <Separator />
        <H3>{strings.occupation}</H3>
        <Body> {strings.about}</Body>
        <Separator />
      </InformationWrapper>

      <SocialMedias />
    </ContentWrapper>
  );
}

export default BannerApresentation;
