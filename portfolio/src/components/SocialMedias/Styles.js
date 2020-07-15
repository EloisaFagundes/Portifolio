import styled from "styled-components";

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  max-height: 75vh;
  margin: auto 0;
  justify-content: center;
  @media screen and (max-device-width: 1200px) {
    display: none;
    position: absolute;
    bottom: 0;
  }
`;

export const SocialIconStyled = styled.img`
  width: 15vh;
  cursor: pointer;
  :hover,
  :focus {
  color: #333;
  background-color: rgba(255,255,255,0.1);
  border-radius: 90px;
}
`;