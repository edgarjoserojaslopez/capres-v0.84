import styled from "styled-components";

//Styled Components
export const StyledContainer = styled.div`
  /* margin: 0; */
  height: 100vh;
  width: 100vw;
  position: relative;
  /* display: flex; */
  overflow-x: hidden;
  /* justify-content: center; */
  /* align-items: center; */
  background: linear-gradient(15deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  background-image: url(${(props) => props.image});
  background-size: ${(props) => props.bgSize};
  background-position: center;
  background-attachment: fixed;
  background-repeat: ${(props) => props.bgRepeat};
`;
