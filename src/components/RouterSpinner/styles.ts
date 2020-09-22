import styled, { keyframes } from "styled-components";
import color from "../../styles/color";

const animationSpinner = keyframes`
  to { transform : rotate(1turn); }
`;

const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${color.black.transparent};
  border-right-color: ${color.main.dark};
  border-radius: 50%;
  animation: ${animationSpinner} .8s ease-in-out infinite;
`;

export {
  SpinnerContainer,
  Spinner
}