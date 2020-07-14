import React from "react";
import {
  AppbarStyled,
  LogoStyled,
  LinkMenuStyled,
  NavIconsWrapper,
} from "./Styles";

function Appbar() {
  return (
    <>
      <AppbarStyled>
        <LogoStyled src={require("../../images/logo.png")} />
        <NavIconsWrapper>
          <LinkMenuStyled href="#AboutMe">quem sou</LinkMenuStyled>
          <LinkMenuStyled href="#MyProjects">projetos</LinkMenuStyled>
          <LinkMenuStyled href="#HireMe">contato</LinkMenuStyled>
        </NavIconsWrapper>
      </AppbarStyled>
    </>
  );
}

export default Appbar;
