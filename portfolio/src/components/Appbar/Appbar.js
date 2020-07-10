import React from "react";
import styled from "styled-components";

const AppbarStyled = styled.div`
  display: flex;
  height: 10vh;
  background-color: #1b2238;
  color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
  padding: 1rem 1rem;
`;

const LogoStyled = styled.img`
  width: 10%;
  height: auto;
  margin: 0 0;
  justify-content: flex-start;
`;

const NavIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

function Appbar() {
  return (
    <>
      <AppbarStyled>
        <LogoStyled src={require("../../images/logo.png")} />
        <NavIconsWrapper>
          <nav>quem sou</nav>
          <nav>projetos</nav>
          <nav>contato</nav>
        </NavIconsWrapper>
      </AppbarStyled>
    </>
  );
}

export default Appbar;
