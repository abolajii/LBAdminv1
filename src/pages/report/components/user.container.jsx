import styled, { css } from "styled-components";

/* eslint-disable react/prop-types */
import Email from "./email";
import { Link } from "react-router-dom";
import Phone from "./phone";
import Picture from "./modal/picture";
import React from "react";
import { Skeleton } from "../../../components";
import SuspendUserModal from "./modal";
import User from "./user";
import Verify from "./verify";
import { colors } from "../../../constants";
import useReportOptions from "../hook/useReport";

const Container = styled.div`
  &.mb {
    margin-bottom: 29px;
  }

  h2 {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 150%; /* 22.5px */
    margin-bottom: 15px;
  }

  ${({ title }) => {
    return (
      title &&
      css`
        margin-top: 35px;
        margin-bottom: 25px;
      `
    );
  }}
`;

const UserDetails = styled.div`
  gap: 16px;
  .picture {
    width: 105px;
    height: 105px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .name {
    p {
      color: #3f4254;
      font-size: 19px;
      font-weight: 700;
      line-height: normal;
      margin-right: 5px;
    }
  }

  .info {
    display: flex;
    gap: 17px;
    margin-top: 14px;
    margin-bottom: 12px;

    .value {
      color: ${colors.textOne};
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      margin-left: 5px;
      text-transform: capitalize;
    }

    .email {
      margin-left: 5px;
    }
  }
`;

const TextOverflow = styled.div`
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ViewProfile = styled(Link)`
  color: ${colors.darkColor};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

const Suspend = styled.div`
  display: inline-flex;
  padding: 6px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  border: 1px solid #e83a3a;
  color: #e83a3a;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;

  cursor: pointer;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Suspended = styled(Suspend)`
  background: rgba(181, 13, 13, 0.1);
`;

const UserContainer = ({ suspend, user, title, suspendUser }) => {
  const [showModal, setShowModal] = React.useState();
  const { setReportTag, singleLoading } = useReportOptions();
  const [isImageModalOpen, setImageModalOpen] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
    setReportTag("suspend");
  };

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
  };

  if (singleLoading) {
    return (
      <Container className="mb">
        <h2>{title}</h2>
        <UserDetails className="flex">
          <div className="picture value">
            <Skeleton height="100%" width="100%" border={6} />
          </div>
          <div className="details">
            <div className="flex ai-center justify-between">
              <div className="name flex ai-center value">
                <Skeleton height="18px" width="90px" border={3} mr="6px" />
              </div>
            </div>
            <div className="info">
              <div className="flex ai-center">
                <div className="value">
                  <Skeleton height="18px" width="90px" border={3} mr="6px" />
                </div>
              </div>
              <div className="flex ai-center">
                <div className="value">
                  <Skeleton height="18px" width="90px" border={3} mr="6px" />
                </div>
              </div>
              <div className="flex ai-center">
                <div className="value">
                  <Skeleton height="18px" width="90px" border={3} ml="6px" />
                </div>
              </div>
            </div>
            <div>
              <ViewProfile to="/users">View profile</ViewProfile>
            </div>
          </div>
        </UserDetails>
      </Container>
    );
  }

  return (
    <Container title={title === "Accused user"}>
      {showModal && (
        <SuspendUserModal close={() => setShowModal(false)} show={showModal} />
      )}
      <h2>{title}</h2>
      <UserDetails className="flex">
        <div className="picture">
          <Image
            src={user.picture}
            onClick={() => openImageModal(user.picture)}
          />
          {/* Render the Modal component */}
          <Picture
            open={isImageModalOpen}
            imageUrl={user.picture}
            onClose={closeModal}
          />
        </div>

        <div className="details">
          <div className="flex ai-center justify-between">
            <div className="name flex ai-center">
              <p>{user.name}</p>
              <Verify />
            </div>
            <div>
              {suspend && (
                <div>
                  {suspendUser ? (
                    <Suspended>Suspended</Suspended>
                  ) : (
                    <Suspend onClick={openModal}>Suspend</Suspend>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="info">
            <div className="flex ai-center">
              <Phone />
              <div>
                <p className="value">{user.number}</p>
              </div>
            </div>
            <div className="flex ai-center">
              <User />
              <div>
                <p className="value">{user.gender}</p>
              </div>
            </div>
            <div className="flex ai-center">
              <Email />
              <p className="email">
                <TextOverflow>{user.email}</TextOverflow>
              </p>
            </div>
          </div>
          <div>
            <ViewProfile to={`/users/${user._id}`}>View profile</ViewProfile>
          </div>
        </div>
      </UserDetails>
    </Container>
  );
};

export default UserContainer;
