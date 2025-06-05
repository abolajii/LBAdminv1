/* eslint-disable react/prop-types */
// Modal.js

import React from "react";
import styled from "styled-components";

// Define your styled components
const ModalBackground = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 3;
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  max-height: 80%;
  width: 550px; /* Set a specific width */
  height: 790px; /* Set a specific height */

  background-color: #fff; /* Add a background color */
  overflow: hidden;
  border-radius: 10px;

  &.active {
    animation: rubberBand 0.5s ease; /* Add the rubber band animation */
  }

  @keyframes rubberBand {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    30% {
      transform: translate(-50%, -50%) scale(1.05);
    }
    60% {
      transform: translate(-50%, -50%) scale(1);
    }
    70% {
      transform: translate(-50%, -50%) scale(1.05);
    }
    90% {
      transform: translate(-50%, -50%) scale(1);
    }

    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

const ModalImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Create the Modal component
const Picture = ({ open, imageUrl, onClose }) => {
  const [isRubber, setIsRubber] = React.useState(false);

  const handleContentClick = () => {
    setIsRubber(true);
    setTimeout(() => {
      setIsRubber(false);
    }, 500);
  };
  return (
    <ModalBackground open={open} onClick={onClose}>
      <ModalContent
        onClick={(e) => {
          e.stopPropagation();
          handleContentClick();
        }}
        className={isRubber && "active"}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalImage src={imageUrl} alt="Full-size" />
      </ModalContent>
    </ModalBackground>
  );
};

export default Picture;
