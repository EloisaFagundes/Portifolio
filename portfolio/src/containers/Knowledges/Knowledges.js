import React from "react";
import styled from "styled-components";


const ContentWrapper = styled.div`
   display: flex;
  /* flex-direction: column; */
  background-color: #d3ad0a;
  flex-wrap: wrap;
  /* width: 100%; */
  /* height: 80vh; */
  justify-content: center;
  align-items: center;
  /* justify-content: space-around; */
  /* flex-direction: row; */

    height: 80vh;
    display: flex;
    flex-direction: column;


  @media screen and (max-width: 1200px) {
    padding: 0;
    width: 100%;
    margin: 0;
    height: 125vh;
  }
`;

const TextWrapper = styled.div`
  /* background-color: green; */
   /* justify-content: space-between; */
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    align-items: center;
    text-align: justify;
    width: 40vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 45%;

/* justify-content: space-around; */
  @media screen and (max-width: 991px) {
    padding: 3rem 0;
    width: 90vw;
    text-align: justify;
  }
`;

const BlocksTextWrapper = styled.div`
  background-color: green;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2%;
  
  @media screen and (max-width: 1200px) {
    padding: 0;
    max-width: 80vw;
    width: 90%;
    height: 100vh;
    margin: 0;
  }
`

const TitleStyle = styled.h1`
background-color: purple;
`
function Knowledges() {
  return (
    <>
   
    <ContentWrapper>
   
    <TitleStyle>Meus conhecimentos</TitleStyle>
  
 <BlocksTextWrapper>
      <TextWrapper>
        <h2>Front-end</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      </TextWrapper>

      <TextWrapper>
        <h2>Back-end</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      </TextWrapper>
  </BlocksTextWrapper>
    </ContentWrapper>
    </>
  );
}

export default Knowledges;