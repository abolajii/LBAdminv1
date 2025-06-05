import { Button, CheckPassword, Input, Width } from "../../components";

import { Link } from "react-router-dom";
import React from "react";
import { colors } from "../../constants";
import styled from "styled-components";

const AdminText = styled.p`
  color: ${colors.black};
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  padding-bottom: 23px;
`;

const Login = () => {
  const [type, setType] = React.useState(false);

  const [formDetails, setFormDetails] = React.useState({
    email: "",
    password: "",
  });

  const { email, password } = formDetails;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Width>
      <AdminText className="text-center">Admin Access</AdminText>
      <div className="small-text">Manage your users on your dashboard</div>
      <div>
        <Input
          placeholder="Enter email address"
          value={email}
          onChange={handleInputChange}
          name="email"
        />
        <Input
          icon
          type={type ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          name="password"
          onChange={handleInputChange}
        >
          <CheckPassword setType={setType} type={type} />
        </Input>
        <div className="flex jc-end">
          <Link className="link" to="/forgot">
            Forgot password?
          </Link>
        </div>
      </div>
      <Button m={50}>Log In</Button>
    </Width>
  );
};

export default Login;
