/* eslint-disable react/prop-types */
import React from "react";
import { generateStrongPassword } from "../../utils";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: 1px solid ${(props) => (props.error ? "red" : "#e8e6ea")};
  height: 55px;
  border-radius: 15px;
`;

const PasswordInput = styled.input`
  flex: 1;
  padding: 10px;
  border-radius: 4px;
`;

const ShowPasswordButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-weight: bold;
`;

const GeneratePasswordButton = styled.button`
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
`;

const PasswordInputWithGenerator = ({ error, onChange, password }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleGeneratePassword = () => {
    const strongPassword = generateStrongPassword();
    onChange(strongPassword);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer error={error}>
      <PasswordInput
        type={showPassword ? "text" : "password"}
        placeholder="Enter your password"
        value={password}
        onChange={(e) => onChange(e.target.value)}
      />
      <ShowPasswordButton onClick={togglePasswordVisibility}>
        {showPassword ? "Hide" : "Show"}
      </ShowPasswordButton>
      <GeneratePasswordButton onClick={handleGeneratePassword}>
        Generate
      </GeneratePasswordButton>
    </InputContainer>
  );
};

export default PasswordInputWithGenerator;
