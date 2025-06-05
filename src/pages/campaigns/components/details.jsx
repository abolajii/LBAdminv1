// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  display: inline-flex;
  padding: 9px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
`;

const Resend = styled(Button)`
  background: rgba(21, 207, 116, 0.06);
  color: #32a071;
`;

const Edit = styled(Button)`
  background: rgba(255, 224, 0, 0.09);
  color: #eeb331;
`;

const Delete = styled(Button)`
  color: #e53b3b;
  background: #ffeaea;
`;

const Details = () => {
  return (
    <Container>
      <Resend>Resend</Resend>
      <Edit>Edit</Edit>
      <Delete>Delete</Delete>
    </Container>
  );
};

export default Details;
