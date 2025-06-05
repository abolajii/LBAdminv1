/* eslint-disable react/prop-types */
import { FiEye, FiEyeOff } from "react-icons/fi";

import { colors } from "../../constants";
import styled from "styled-components";

const Container = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  cursor: pointer;
`;

const CheckPassword = ({ setType, type }) => {
  return (
    <>
      <Container onClick={() => setType(!type)}>
        {type ? (
          <FiEyeOff color={colors.textColor} />
        ) : (
          <FiEye color={colors.textColor} />
        )}
      </Container>
    </>
  );
};

export default CheckPassword;
