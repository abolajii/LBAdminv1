import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(1.1);
  }
  20% {
    transform: scale(1);
  }
  30% {
    transform: scale(1.1);
  }
  40% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
`;

const PulseContainer = styled.div`
  width: 20px;
  height: 20px;
  background: #ce1f1f;
  border-radius: 50%;
  animation: ${pulse} 1s infinite;
`;

const PulseAnimation = () => {
  return <PulseContainer />;
};

export default PulseAnimation;
