/* eslint-disable react/prop-types */
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Gap = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Picture = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  .name {
    color: ${colors.textOne};
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }

  .email {
    color: ${colors.textThree};
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
    width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: lowercase;
  }
`;

const Avi = ({ user }) => {
  return (
    <Gap>
      <Picture>
        {user?.photos[0]?.imageUrl && (
          <Image src={user.photos[0].imageUrl} alt="profile" />
        )}
      </Picture>
      <Details>
        <p className="name">{user?.name}</p>
        <p className="email">{user?.email}</p>
      </Details>
    </Gap>
  );
};

export default Avi;
