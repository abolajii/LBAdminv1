import React from "react";
import { Switch } from "@headlessui/react";
import styled from "styled-components";

const CustomSwitch = styled(Switch)`
  display: inline-flex;
  align-items: center;
  width: 36px;
  height: 20px;
  border-radius: 9px;
  background-color: ${({ checked }) => (checked ? "#FFEDED" : "#D9D9D9")};
  cursor: pointer;
`;

const CustomThumb = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? "#CE1F1F" : "white")};
  transform: ${({ checked }) =>
    checked ? "translateX(19px)" : "translateX(2px)"};
  transition: transform 0.2s;
`;

function MyToggle() {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <CustomSwitch checked={enabled} onChange={setEnabled}>
      <CustomThumb checked={enabled} />
    </CustomSwitch>
  );
}

export default MyToggle;
