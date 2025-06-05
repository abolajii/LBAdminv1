import { colors } from "../../constants";
import styled from "styled-components";
export const Container = styled.div`
  min-height: 100vh;
  background: ${colors.bg};
  padding-top: 50px;
`;

export const MinWidth = styled.div`
  height: 100%;
  width: 340px;
  margin: auto;
  margin-top: 50px;

  .small-text {
    color: ${colors.textColor};
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    padding-bottom: 71px;
  }

  .link {
    color: ${colors.black};
    font-size: 15px;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
  }
`;

export const Image = styled.img`
  width: 280px;
`;
