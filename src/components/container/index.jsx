/* eslint-disable react/prop-types */
// import React from "react";

import Header from "../header";
import Sidebar from "../sidebar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex: 1;
  margin-top: 16px;
`;

const DetailBox = styled.div`
  flex: 2.4;
  background: #fffafa;
  border-radius: 15px;
  padding: 28px 20px;
  margin-right: 50px;
`;

const Inner = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fffdfd;
`;

const Container = ({ children }) => {
  return (
    <Inner>
      <Header />
      <MainContainer>
        <Sidebar />
        <DetailBox>{children}</DetailBox>
      </MainContainer>
    </Inner>
  );
};

export default Container;
