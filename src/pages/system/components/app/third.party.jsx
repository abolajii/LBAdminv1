import { BiLogoApple } from "react-icons/bi";
// import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import SwitchToggle from "./switch";
import styled from "styled-components";
const size = 20;

const third = [
  { id: 1, img: <FcGoogle size={size} />, name: "Google authentication" },
  {
    id: 2,
    img: <BiLogoFacebook size={size} color="#3A589B" />,
    name: "Facebook authentication",
  },
  { id: 3, img: <BiLogoApple size={size} />, name: "Apple authentication" },
];

const Gap = styled.div`
  gap: 10px;
  width: 300px;

  .name {
    color: var(--space, #424243);
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

const ThirdParty = () => {
  return (
    <div>
      {third.map((each) => {
        return (
          <MarginBottom key={each.id} className="flex ai-center">
            <Gap className="flex ai-center">
              <div>{each.img}</div>
              <div className="name">{each.name}</div>
            </Gap>
            <div>
              <SwitchToggle />
            </div>
          </MarginBottom>
        );
      })}
    </div>
  );
};

export default ThirdParty;
