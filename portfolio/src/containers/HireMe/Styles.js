import styled from "styled-components";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c3392c;
  flex-wrap: wrap;
  min-height: 60vh;
  font-family: "Montserrat", sans-serif;
  color: #ffff;

  @media screen and (max-width: 1200px) {
    padding: 0;
    margin: 0;
    height: 65vh;
  }
`;
export const TitleSectionStyle = styled.h1`
  color: white;
  font-family: "Glegoo";
  @media screen and (max-width: 1200px) {
    font-size: 1.5em;
    line-height: 3vh;
    max-width: 100vw;
  }
`;

export const TextWrapper = styled.div`
  height: 17vh;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.5vh;
  letter-spacing: -0.24px;
  text-align: center;
  @media screen and (max-width: 1200px) {
    font-size: 1em;
    text-align: center;
    color: #ffff;
    min-width: 90vw;
    line-height: 1.3;
    margin: 0 2vw;
  }
`;

export const TextStyle = styled.p`
  font-family: "Glegoo";
  font-size: 15px;
  @media screen and (max-width: 1200px) {
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
  }
`;

export const SocialMediaWrapper = styled.div`
  align-items: center;
  height: 10vh;
  margin-top: 15px;
  margin-bottom: 15px;
  @media screen and (max-width: 1200px) {
    margin: 2vh 0;
    width: 100vw;
  }
`;

export const SocialIconStyled = styled.img`
  width: 9vw;
  cursor: pointer;
  :hover,
  :focus {
    color: #333;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 90px;
  }
  @media screen and (max-device-width: 1200px) {
    width: 15vw;
    margin: 0;
    padding: 0;
  }
`;
