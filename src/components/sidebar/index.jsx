import { Link, useLocation } from "react-router-dom";
import { colors, font } from "../../constants";
import styled, { css } from "styled-components";

import Campaigns from "../../assets/svg/campaigns";
import CopyRight from "../../copyright";
import Home from "../../assets/svg/home";
import React from "react";
import Report from "../../assets/svg/report";
import Subscription from "../../assets/svg/subscription";
import System from "../../assets/svg/system";
import User from "../../assets/svg/user";

const Container = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  background: ${colors.bg};
  padding-left: 50px;
`;

const SidebarMenu = styled.div`
  flex: 1;
`;

const LinkContainer = styled.div`
  font-family: ${font.lato};
  display: flex;
  padding: 15px;
  width: 218px;
  gap: 10px;
  border-radius: 15px;

  p {
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }
  ${({ isActive }) =>
    isActive &&
    css`
      color: ${colors.white};
      background: ${colors.darkColor};
    `}
`;

// Function to check if the current location matches a specific path
const isCurrentPath = (path) => {
  return (
    location.pathname === path || // Check if it's an exact match for the link's path
    (path !== "/" && location.pathname.includes(path))
  );
};

const SidebarIcon = ({ icon, path }) => {
  const fill = isCurrentPath(path) ? true : false;
  return React.cloneElement(icon, { fill });
};

const Sidebar = () => {
  const location = useLocation();

  const routes = React.useMemo(
    () => [
      { path: "/dashboard", name: "Dashboard", icon: <Home /> },
      { path: "/users", name: "User Management", icon: <User /> },
      {
        path: "/report",
        name: "Report Management",
        icon: <Report />,
      },
      {
        path: "/campaigns",
        name: "Campaigns",
        icon: <Campaigns />,
      },
      {
        path: "/subscriptions",
        name: "Subscriptions",
        icon: <Subscription />,
      },
      {
        path: "/system",
        name: "System Management",
        icon: <System />,
      },
    ],
    []
  );

  return (
    <Container>
      <SidebarMenu>
        {routes.map(({ path, name, icon }, index) => (
          <Link to={path} key={index}>
            <LinkContainer
              isActive={
                location.pathname === path || // Check if it's an exact match for the link's path
                (path !== "/" && location.pathname.includes(path)) // Also check if it includes the path, except for the root path
              }
              className="ai-center"
            >
              <div>
                <SidebarIcon icon={icon} path={path} />
              </div>
              <p>{name}</p>
            </LinkContainer>
          </Link>
        ))}
      </SidebarMenu>
      <CopyRight />
    </Container>
  );
};

export default Sidebar;
