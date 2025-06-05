import { FiChevronDown } from "react-icons/fi";
import Logo from "../../assets/svg/logo";
import { colors } from "../../constants";
// import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #fdfdfd;
  padding: 0 50px;
`;

const Inner = styled.div`
  border-bottom: 0.1px solid #666666;
  height: 80px;

  .text-right {
    margin-right: 12px;
  }
`;

const DropdownButton = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${colors.white};
  cursor: pointer;
  border: 0.3px solid #d1d1d1;
`;

const AdminText = styled.p`
  color: ${colors.black};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const LightText = styled(AdminText)`
  color: #a6a6a6;
  font-size: 10px;
  font-weight: 400;
  line-height: 16px; /* 160% */
`;

const Header = () => {
  return (
    <Container>
      <Inner className="flex justify-between ai-center">
        <div>
          <Logo />
        </div>
        <div className="flex ai-center">
          <div className="text-right">
            <AdminText>Admin Access</AdminText>
            <LightText>abolajiadeajayi@gmail.com</LightText>
          </div>
          <DropdownButton
            className="center"
            onClick={() => {
              // setShowDropDown(!showDropDown);
            }}
          >
            <FiChevronDown size={18} color="#3B3A3C" />
          </DropdownButton>
        </div>
      </Inner>
    </Container>
  );
};

export default Header;
