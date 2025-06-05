/* eslint-disable react/prop-types */
// import React from "react";
import styled from "styled-components";

const Picture = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const Gap = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`;

const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const User = ({ user }) => {
  return (
    <Gap>
      <Picture>
        {user?.picture && <Image src={user.picture} alt="profile" />}
      </Picture>
      <TextOverflow>{user.name}</TextOverflow>
    </Gap>
  );
};

export default User;
