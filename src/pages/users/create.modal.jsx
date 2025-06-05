import { Loading, Modal, PasswordInputWithGenerator } from "../../components";

/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import React from "react";
import { colors } from "../../constants";
import { createUser } from "../../api/auth.requests";
import styled from "styled-components";

const Inner = styled.div`
  background-color: ${colors.white};
  padding: 24px 0;
  width: 500px;
  border-radius: 16px;
`;

const Header = styled.h2`
  padding: 0 15px;
  border-bottom: 1px solid #eff2f5;
  padding-bottom: 19px;
  p {
    color: #3f4254;
    font-size: 17px;
    font-weight: 800;
    line-height: normal;
  }
`;

const Label = styled.div`
  color: ${colors.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;
  border-radius: 15px;
  border: 1px solid ${(props) => (props.error ? "red" : "#e8e6ea")}; // Add red border when error is true
  background: ${colors.white};
  padding: 0 15px;
`;

const FormContainer = styled.div`
  padding: 20px;

  .mb-2 {
    margin-bottom: 20px;
  }

  .error {
    font-size: 12px;
    color: red;
    margin-top: 5px;
  }

  .note {
    color: rgba(0, 0, 0, 0.5);
    font-size: 15px;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }
`;

const Footer = styled.div`
  margin-top: 10px;
  padding: 15px;
  border-top: 1px solid #eff2f5;
`;

const Button = styled.button`
  border-radius: 12px;
  padding: 17px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 31.814px */
  flex: 1;
`;

const Create = styled(Button)`
  background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
  color: ${colors.white};
`;

const CreateModal = ({ close, setRefresh }) => {
  const [clicked, setClicked] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const [userDetails, setUserDetails] = React.useState({
    phone: "",
    email: "",
    password: "",
  });

  const { phone, email, password } = userDetails;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const handleCreateNewUser = async () => {
    setClicked(true);
    if (!email || !phone) return;
    if (!password) return;
    setShowModal(true);

    try {
      await createUser(userDetails);
      setRefresh(true);
      close();
    } catch (error) {
      console.error(error);
    } finally {
      setShowModal(false);
    }
  };

  const handlePassword = (password) => {
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      password,
    }));
  };

  return (
    <Modal>
      {showModal && <Loading />}
      <Inner>
        <Header className="flex ai-center justify-between">
          <div>
            <p>Create new user</p>
          </div>
          <button className="center" onClick={close}>
            <MdClose size={23} />
          </button>
        </Header>
        <FormContainer>
          <div className="mb-2">
            <Label>Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={email}
              onChange={handleChange}
              error={clicked && !email}
            />
            {clicked && !email && (
              <p className="error">{"This field is required"}</p>
            )}
          </div>
          <div className="mb-2">
            <Label>Phone number</Label>
            <Input
              type="tel"
              name="phone"
              placeholder="(234) 905-4427-953"
              value={phone}
              onChange={handleChange}
              error={clicked && !phone}
            />
            {clicked && !phone && (
              <p className="error">{"This field is required"}</p>
            )}
          </div>
          <div className="mb-2">
            <Label>Create password</Label>

            <PasswordInputWithGenerator
              error={clicked && !password}
              password={password}
              onChange={handlePassword}
            />
            {clicked && !password && (
              <p className="error">{"This field is required"}</p>
            )}
          </div>

          <div className="note">
            Login details with password will be sent to registered email for
            them to complete onboarding.
          </div>
        </FormContainer>
        <Footer className="flex">
          <Button onClick={close}>Cancel</Button>
          <Create onClick={handleCreateNewUser}>Create account</Create>
        </Footer>
      </Inner>
    </Modal>
  );
};

export default CreateModal;
