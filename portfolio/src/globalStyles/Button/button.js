import styled from "styled-components";

export const Button = styled.button`
  font-family: "Glegoo";
  width: 150px;
  height: 40px;
  color: white;
  border-radius: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color ? 'transparent' : props.backgroundColor};
  align-self: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    font-size: 0.9em;
    width: 100vw;
    margin: 0;
    padding: 0;
  }
`;
