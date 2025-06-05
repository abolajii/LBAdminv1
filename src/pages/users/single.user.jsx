import { Container, NavHeader } from "../../components";
import styled, { css } from "styled-components";

import Activity from "./components/tabs/activity";
import Preference from "./components/tabs/preference";
import Profile from "./components/tabs/profile";
import React from "react";
import Subscription from "./components/tabs/subscription";
import { Tab } from "@headlessui/react";
import UserContainer from "./components/user.container";
import { colors } from "../../constants";
import { updateUserPreference } from "../../api/auth.requests";
import { useParams } from "react-router-dom";
import { useTab } from "./components/tab/useTab";
import userStore from "../../store/userStore";
import usersStore from "./store";

const Inner = styled.div`
  border-radius: 12px;
  background: ${colors.white};
  padding: 36px 26px 0px 26px;
  margin-top: 25px;
  margin-bottom: 25px;

  ${({ bottom }) => {
    return (
      bottom &&
      css`
        padding-bottom: 36px;
      `
    );
  }}
`;

const Panel1 = () => {
  return (
    <Tab.Panel>
      <Profile />
    </Tab.Panel>
  );
};

const Panel2 = () => {
  return (
    <Tab.Panel>
      <Activity />
    </Tab.Panel>
  );
};

const Panel3 = () => {
  return (
    <Tab.Panel>
      <Preference />
    </Tab.Panel>
  );
};

const Panel4 = () => {
  return (
    <Tab.Panel>
      <Subscription />
    </Tab.Panel>
  );
};

const SingleUser = () => {
  const { selectedTabIndex, setSelectedTabIndex } = useTab(); // Use the custom hook

  const { getUser } = usersStore();
  const { setUser } = userStore();

  const { uid } = useParams();

  React.useEffect(() => {
    setSelectedTabIndex(0);
  }, [setSelectedTabIndex]);

  React.useEffect(() => {
    getUser(uid);
  }, [getUser, uid]);

  const update = async () => {
    const { data } = await updateUserPreference(uid);
    setUser(data.user);
  };

  return (
    <Container>
      <NavHeader
        text="User Management"
        path="/users"
        titleOne="User Management"
        titleTwo="User Details"
      />
      <button onClick={update}>Update preference</button>
      <Inner>
        <UserContainer />
      </Inner>
      <Inner bottom="true">
        <Tab.Group>
          <Tab.Panels>
            {selectedTabIndex === 0 && <Panel1 />}
            {selectedTabIndex === 1 && <Panel2 />}
            {selectedTabIndex === 2 && <Panel3 />}
            {selectedTabIndex === 3 && <Panel4 />}
          </Tab.Panels>
        </Tab.Group>
      </Inner>
    </Container>
  );
};

export default SingleUser;
