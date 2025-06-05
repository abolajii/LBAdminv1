import { Loading, Modal } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";

/* eslint-disable react/prop-types */
import Info from "./svg/info";
import React from "react";
import { colors } from "../../../constants";
import { deleteUser } from "../../../api/auth.requests";
import styled from "styled-components";

const Inner = styled.div`
  display: inline-flex;
  padding: 26px 0px;
  flex-direction: column;
  /* gap: 47px; */
  width: 650px;

  border-radius: 12px;
  background: ${colors.white};
`;

const Header = styled.h2`
  color: #3f4254;
  font-size: 17px;
  font-weight: 800;
  line-height: normal;
  padding: 0 15px;
  border-bottom: 1px solid #eff2f5;
  padding-bottom: 19px;
`;

const Notification = styled.div`
  display: flex;
  padding: 11px 18px;
  flex-direction: column;
  gap: 10px;

  border-radius: 6px;
  border: 1px dashed #f89c47;
  background: #fff9f4;
  margin: 47px 40px 27px 40px;

  .top {
    gap: 15px;
  }

  .notification-text {
    color: #7e8299;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px; /* 137.5% */
    margin-bottom: 10px;
  }

  .deactivate {
    color: #3f4254;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
  }
`;

const Confirm = styled.div`
  gap: 9px;
  margin: 0 40px;

  margin-bottom: 20px;
  padding-bottom: 20px;

  .confirm {
    color: #3f4254;
    font-size: 15px;
    font-weight: 600;
    line-height: 21px; /* 140% */
  }
`;

const ButtonContainer = styled.div`
  border-top: 1px solid #eff2f5;
  padding: 20px 20px 0;
  display: flex;
  justify-content: flex-end;
  button {
    display: flex;
    padding: 12px 20px;
    border-radius: 6px;
    background: #f1416c;

    color: ${colors.white};
    text-align: center;
    font-size: 15px;
    font-weight: 500;
    line-height: normal;
  }
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  /* Hide the default checkbox appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Set the dimensions of the checkbox */
  width: 24px;
  height: 24px;
  cursor: pointer;

  /* Customize the checkbox appearance */
  background-color: #f3f6f9; /* Background color for unchecked */
  border-radius: 6px;
  position: relative;

  /* Tick symbol for checked state */
  &:checked {
    background-color: #ce1f1f; /* Background color for checked */
    border-color: #ce1f1f;
  }

  &:checked::after {
    content: "\u2713"; /* Unicode character for checkmark */
    color: white; /* Color of the checkmark */
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const DeleteModal = ({ setShowModal }) => {
  const [loading, setLoading] = React.useState(false);

  const { uid } = useParams();

  const navigate = useNavigate();

  const handleDeleteUser = async () => {
    setLoading(true);
    try {
      const response = await deleteUser(uid);
      console.log(response);
      navigate("/users");
      setLoading(false);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {loading && <Loading />}
      <Inner>
        <Header>Delete Account</Header>
        <Notification>
          <div className="top flex">
            <Info />
            <div className="flex flex-col">
              <div className="notification-text">
                For extra security, this requires you to confirm by clicking on
                the check box
              </div>
              <div className="deactivate">
                You are deactivatiing this account
              </div>
            </div>
          </div>
        </Notification>
        <Confirm className="flex ai-center">
          <div>
            <CheckBox />
          </div>
          <div className="confirm">Confirm Account Deletion</div>
        </Confirm>
        <ButtonContainer>
          <button onClick={handleDeleteUser}>Delete Account</button>
        </ButtonContainer>
      </Inner>
    </Modal>
  );
};

export default DeleteModal;
