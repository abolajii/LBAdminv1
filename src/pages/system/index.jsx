// import React from "react";

import { Container, NavHeader } from "../../components";

import MyTab from "./components/tab";

const System = () => {
  return (
    <Container>
      <NavHeader
        text="System Management"
        path="/system"
        titleOne="System Management"
      />
      <MyTab />
    </Container>
  );
};

export default System;
