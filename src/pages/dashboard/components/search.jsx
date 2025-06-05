// import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { colors } from "../../../constants";
import styled from "styled-components";

const SearchContainer = styled.div`
  /* width: 335px;
  height: 48px; */
  flex: 0.42;
  display: flex;
  padding: 10px 14px;
  align-items: center;
  gap: 7px;
  border-radius: 6px;
  background: ${colors.white};
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  color: ${colors.textColor};
  font-size: 12px;

  ::placeholder {
    color: ${colors.textFour};
    font-size: 12px;
    font-weight: 400;
    line-height: normal;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <div>
        <BiSearchAlt color="#7E8299" size={12} />
      </div>
      <Input placeholder="Search" />
    </SearchContainer>
  );
};

export default Search;
