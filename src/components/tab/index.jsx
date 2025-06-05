import { Tab } from "@headlessui/react";
import styled from "styled-components";

const CustomTabList = styled(Tab.List)`
  display: flex;
  margin-top: 30px;
`;

const CustomTab = styled.button`
  color: ${(props) => (props.selected ? "#ce1f1f" : "#ADAFBB")};
  padding: 5px 0px;
  margin-right: 20px;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selected ? "2px solid #ce1f1f" : "2px solid transparent"};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-align: left;
`;

const MyTab = () => {
  return (
    <Tab.Group>
      <CustomTabList>
        <Tab>
          {({ selected }) => (
            <CustomTab selected={selected}>App Configurations</CustomTab>
          )}
        </Tab>
        <Tab>
          {({ selected }) => (
            <CustomTab selected={selected}>Settings</CustomTab>
          )}
        </Tab>
        <Tab>
          {({ selected }) => <CustomTab selected={selected}>Legals</CustomTab>}
        </Tab>
        <Tab>
          {({ selected }) => (
            <CustomTab selected={selected}>Activity</CustomTab>
          )}
        </Tab>
      </CustomTabList>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
        <Tab.Panel>Content 4</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default MyTab;
