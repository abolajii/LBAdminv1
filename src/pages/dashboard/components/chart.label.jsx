// import React from "react";
import styled from "styled-components";
import userStore from "../../../store/userStore";

const Container = styled.div`
  flex: 1;

  .margin {
    margin-bottom: 8px;
  }

  .space {
    gap: 10px;
  }

  .value {
    color: #5e6278;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }
`;

const Bg = styled.div`
  width: 8px;
  height: 3px;
  border-radius: 5px;

  &.female {
    background: #50cd89;
  }

  &.male {
    background: #e4e6ef;
  }

  p {
    color: #adafbb;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }
`;

const ChartLabel = () => {
  const {
    usersData: { maleCount, femaleCount },
  } = userStore();
  return (
    <Container>
      <div className="flex ai-center justify-between margin">
        <div className="flex ai-center space">
          <Bg className="female" />
          <p>Female</p>
        </div>
        <div>
          <p className="value">{femaleCount}</p>
        </div>
      </div>
      <div className="flex ai-center justify-between">
        <div className="flex ai-center space">
          <Bg className="male" />
          <p>Male</p>
        </div>
        <div>
          <p className="value">{maleCount}</p>
        </div>
      </div>
    </Container>
  );
};

export default ChartLabel;
