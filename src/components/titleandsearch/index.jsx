import { BiSearchAlt } from "react-icons/bi";
import { FiChevronDown } from "react-icons/fi";
/* eslint-disable react/prop-types */
// import React from "react";
import Gap from "../gap";
import { colors } from "../../constants";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 26px;

  .gap {
    gap: 12px;
  }
`;

const SearchContainer = styled.div`
  background: ${colors.white};
  width: 354px;
  padding: 10px 14px;
  gap: 7px;
  border-radius: 6px;
`;

const Input = styled.input`
  width: 100%;
  font-size: 12px;

  ::placeholder {
    color: ${colors.textFour};
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
  }
`;

const Filter = styled.div`
  width: 92px;
  background: ${colors.white};
  padding: 10px 14px;
  border-radius: 6px;
  gap: 13px;
  position: relative;
  p {
    color: #a1a5b7;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
  }

  .icon {
    width: 15px;
    height: 15px;
    cursor: pointer;
  }
`;

const DropDownContainer = styled.div`
  position: absolute;
  left: 0;
  top: 42px;
  display: flex;
  width: 139px;
  padding: 8px 8px 14px 8px;
  flex-direction: column;
  gap: 8px;
  border-radius: 6px;
  background: ${colors.white};

  /* Dem */
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);

  .checkbox {
    gap: 8px;
  }
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  /* Hide the default checkbox appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Set the dimensions of the checkbox */
  width: 25px;
  height: 25px;
  cursor: pointer;

  /* Customize the checkbox appearance */
  background-color: #f3f6f9; /* Background color for unchecked */
  border-radius: 6px;
  position: relative;

  /* Tick symbol for checked state */
  &:checked {
    background-color: #ce1f1f; /* Background color for checked */
    border-color: #ce1f1f;
  }

  &:checked::after {
    content: "\u2713"; /* Unicode character for checkmark */
    color: white; /* Color of the checkmark */
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CheckBoxText = styled.div`
  display: flex;
  padding: 6px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  flex: 1;
`;

const Pending = styled(CheckBoxText)`
  background: #f9f3df;
  color: #e1b000;
`;

const Resolved = styled(CheckBoxText)`
  background: #dff2e8;
  color: #2ca764;
`;

const TitleAndSearch = ({ filter, text, number, toggleDropdown, isOpen }) => {
  if (filter) {
    return (
      <Container className="flex ai-center justify-between">
        <Gap text={text} number={number} />
        <div className="flex ai-center gap">
          <Filter className="flex ai-center">
            <div>
              <p>Filters</p>
            </div>
            <div className="center icon" onClick={toggleDropdown}>
              <FiChevronDown color="#B5B5C3" />
            </div>
            {isOpen && (
              <DropDownContainer>
                <div className="checkbox flex ai-center">
                  <CheckBox />
                  <Pending>Pending</Pending>
                </div>
                <div className="checkbox flex ai-center">
                  <CheckBox />
                  <Resolved>Resolved</Resolved>
                </div>
              </DropDownContainer>
            )}
          </Filter>
          <SearchContainer className="flex ai-center">
            <div>
              <BiSearchAlt color="#7E8299" size={12} />
            </div>
            <Input placeholder="Search" />
          </SearchContainer>
        </div>
      </Container>
    );
  }
  return (
    <Container className="flex ai-center justify-between">
      <Gap text={text} number={number} />
      <SearchContainer className="flex ai-center">
        <div>
          <BiSearchAlt color="#7E8299" size={12} />
        </div>
        <Input placeholder="Search" />
      </SearchContainer>
    </Container>
  );
};

export default TitleAndSearch;
