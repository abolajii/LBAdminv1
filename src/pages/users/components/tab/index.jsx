/* eslint-disable react/prop-types */
import { Tab } from "@headlessui/react";
import styled from "styled-components";
import { useTab } from "./useTab";
import usersStore from "../../store";

const CustomTabList = styled(Tab.List)`
  display: flex;
`;

const CustomTab = styled.div`
  color: ${(props) => (props.selected ? "#ce1f1f" : "#ADAFBB")};
  padding: 5px 0px;
  margin-right: 20px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-bottom: ${(props) =>
    props.selected ? "2px solid #ce1f1f" : "2px solid transparent"};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const MyTab = () => {
  const tabs = ["Profile", "Activity", "Preferences", "Subscription"];
  const { setSelectedTabIndex } = useTab();

  const { singleLoading } = usersStore();

  const handleTabClick = (index) => {
    if (!singleLoading) {
      setSelectedTabIndex(index);
    }
  };

  return (
    <Tab.Group>
      <CustomTabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            disabled={singleLoading}
            onClick={() => handleTabClick(index)}
          >
            {({ selected }) => <CustomTab selected={selected}>{tab}</CustomTab>}
          </Tab>
        ))}
      </CustomTabList>
    </Tab.Group>
  );
};

export default MyTab;
