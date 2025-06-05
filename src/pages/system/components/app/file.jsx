/* eslint-disable react/prop-types */
// import React from "react";
import Upload from "../upload";
import { colors } from "../../../../constants";
import styled from "styled-components";

const Gap = styled.div`
  display: flex;
  /* gap: 15px; */
  margin-bottom: 20px;
`;

const UploadButton = styled.button`
  width: 110px;
  height: 39px;
  background: ${colors.darkColor};
  border-radius: 6px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: relative;
  p {
    color: ${colors.white};
  }
`;

const UploadInput = styled.input.attrs({
  type: "file", // Set the type attribute to "file"
  accept: "image/*",
})`
  /* Add any additional styles for the input here */
  opacity: 0;
  position: absolute;
`;

const Display = styled.div`
  width: 90px; /* Set your desired width here */
  height: 90px; /* Set your desired height here */
  border-radius: 6px;
  border: 1px solid ${colors.darkBorder};
  background: ${colors.white};
  flex-shrink: 0; /* Prevent the element from shrinking to fit its content */
`;

const File = ({ text }) => {
  return (
    <Gap>
      <Display />
      <div className="margin">
        <UploadButton>
          <UploadInput />
          <Upload />
          <p>Upload</p>
        </UploadButton>
        <p className="upload-text">{text}</p>
      </div>
    </Gap>
  );
};

export default File;
