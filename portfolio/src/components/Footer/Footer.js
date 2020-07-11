import React from "react";
import styled from "styled-components";

const FooterStyled = styled.footer`
  display: flex;
  height: 8vh;
  background-color: #1b2238;
  color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
  padding: 1rem 1rem;
  font-family: "Montserrat", sans-serif;
`;

function Footer() {
  return (
    <>
      <FooterStyled>
        <p> ©2020, Eloisa Fagundes</p>
      </FooterStyled>
    </>
  );
}

export default Footer;
