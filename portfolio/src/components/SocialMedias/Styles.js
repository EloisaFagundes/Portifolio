import styled from "styled-components";

export const SocialWrapper = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  
  @media screen and (max-device-width: 1200px) {
    
  }
  @media screen and (max-device-width: 1200px) {
    /* background-color: red; */
    /* justify-content: space-between;
        flex-direction: row;
        position: absolute;
        margin: 4vh;
        height: 5vh;
        width: 82vw;
        z-index: 2; */
    display: none;
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