import {
  Button,
  CheckPassword,
  Input,
  TextButton,
  Width,
} from "../../components";

import React from "react";
import { colors } from "../../constants";
import styled from "styled-components";

const SmallText = styled.p`
  padding-top: 50px;
  color: ${colors.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  padding-bottom: 53px;
`;

const NoPaddingText = styled(SmallText)`
  padding: 0;
  padding-top: 50px;
`;

const Text = styled.p`
  color: ${colors.black};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 23px;
`;

const Bold = styled(NoPaddingText)`
  padding: 0px;
  font-weight: 700;
`;

const Forgot = () => {
  const goBack = () => window.history.back();
  const [email, setEmail] = React.useState("");

  const [forgotId, setForgotId] = React.useState(0);
  const [type, setType] = React.useState(false);

  const [password, setPassword] = React.useState({
    cPassword: "",
    newPassword: "",
  });

  const { cPassword, newPassword } = password;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  switch (forgotId) {
    case 1:
      return (
        <Width>
          <TextButton
            text="OTP Verification"
            onClick={() => {
              setForgotId(0);
            }}
          />
          <NoPaddingText>
            Type the verification code we’ve sent you on
          </NoPaddingText>
          <Bold className="bold">{email}abolaji@gmail.com</Bold>
          <p>Otp</p>
          <Button
            m={50}
            onClick={() => {
              setForgotId(2);
            }}
          >
            Continue
          </Button>
        </Width>
      );

    case 2:
      return (
        <Width>
          <Text className="text-center">Set new password</Text>
          <SmallText className="text-center">
            Create a new password. Keep it safe.
          </SmallText>
          <div>
            <Input
              icon
              type={type ? "text" : "password"}
              placeholder="New password"
              value={newPassword}
              name="newPassword"
              onChange={handleInputChange}
            >
              <CheckPassword setType={setType} type={type} />
            </Input>
            <Input
              icon
              type={type ? "text" : "password"}
              placeholder="Re-enter password"
              value={cPassword}
              name="newPassword"
              onChange={handleInputChange}
            >
              <CheckPassword setType={setType} type={type} />
            </Input>
          </div>
          <Button
            m={50}
            onClick={() => {
              setForgotId(1);
            }}
          >
            Save
          </Button>
        </Width>
      );

    default:
      return (
        <Width>
          <TextButton text="Forgot password" onClick={goBack} />

          <SmallText className="text-center">
            Please enter email address. We will send you a 6-digit code to
            verify your account.
          </SmallText>
          <Input
            placeholder="Enter email address"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
            name="email"
          />
          <Button
            m={50}
            onClick={() => {
              setForgotId(1);
            }}
          >
            Continue
          </Button>
        </Width>
      );
  }
};

export default Forgot;
