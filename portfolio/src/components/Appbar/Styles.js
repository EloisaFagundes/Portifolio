import styled from "styled-components";


export const AppbarStyled = styled.div`
  width: 100%;
  display: flex;
  height: 10vh;
  background-color: #1b2238;
  color: #f5f5f5;
  justify-content: space-between;
  align-items: center;
  margin: 0 0;
  padding: 1rem 1rem;
  top: 0;

  @media screen and (max-width: 1200px) {
    height: 15vh;
    width: 100%;
    /* padding: 1vh  1vw; */
  }
`;

export const LogoStyled = styled.img`
  width: 70px;
  height: auto;
  margin: 0 0;
  justify-content: flex-start;
`;

export const LinkMenuStyled = styled.a`
  /* background-color: green; */
  color: white;
  @media screen and (max-width: 1200px) {
    height: 5vh;
    width: 19vw;
    padding: 0.5vh 0.5vw;
    justify-content: center;
    color: white;
    font-size: 13px;
  }
`;

export const NavIconsWrapper = styled.div`
/* background-color: red; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  text-decoration: none;
  margin: 0 3vw;

  @media screen and (max-width: 1200px) {
    /* background-color: purple; */
    margin: 0 5vw;
    height: 5vh; 
    padding: 1vh  1vw;
    justify-content: center; 
 }
`;
