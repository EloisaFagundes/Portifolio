import styled from "styled-components";

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #c3392c;
flex-wrap: wrap;
width: 100%;
height: 55vh;
/* justify-content: space-around; */
font-family: "Montserrat", sans-serif;
color: #ffff;

/* @media screen and (max-width: 1200px) {
  padding: 0;
  width: 80vw;
  margin: 0;
  height: 65vh;
} */
`;
export const TitleSectionStyle = styled.h1`
/* background-color: purple; */
color: white;
font-family: "Glegoo";
@media screen and (max-width: 1200px) {
  font-size: 1.5em;
  line-height: 3vh;
  max-width: 100vw;
}
`;

export const TextWrapper = styled.div`
/* background-color: purple; */
/* margin-left: 30vw; */
width: 39vw;
height: 17vh;
font-size: 18px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 3.5vh;
letter-spacing: -0.24px;
text-align: center;
/* text-align: center; */
/* justify-content: center; */
@media screen and (max-width: 1200px) {
font-size: 1em;
text-align: center;
color: #ffff;
width: 80vw;
height: 30vh;
line-height: 1.3;
margin: 0;
}
`;

export const TextStyle = styled.p`
/* background-color: green; */
font-family: "Glegoo";
font-size: 15px;
`

export const SocialMediaWrapper = styled.div`
/* background-color: red;  */
/* display: flex; */
/* flex-direction: row; */
align-items: center;
height: 10vh;
margin-top: 15px;
margin-bottom: 15px;
@media screen and (max-width: 1200px) {
margin-top: 2vh;
width: 80vw;
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
@media screen and (max-device-width: 1200px){
      width: 20vw;
  }
`;