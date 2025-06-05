import Chart from "./chart";
import Dropdown from "./dropdown";
import { FiChevronDown } from "react-icons/fi";
import Header from "../header";
import React from "react";
import { colors } from "../../../../../constants";
import { formatLastActive } from "../../../../../utils";
import styled from "styled-components";
import usersStore from "../../../store";

const Container = styled.div`
  .activity {
    color: ${colors.textColor};
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
  }

  .select {
    display: inline-flex;
    padding: 10px 14px;
    align-items: flex-start;
    gap: 16px;
    border-radius: 6px;
    background: #f5f8fa;
    position: relative;
  }

  .year {
    color: #a1a5b7;
  }

  .border {
    border-bottom: 1px solid #eff2f5;
    padding-bottom: 21px;
    margin-bottom: 10px;
  }

  .line {
    width: 8px;
    height: 3px;
    border-radius: 5px;
    margin-right: 5px;
  }

  .swipes {
    background-color: #50cd89;
  }

  .likes {
    background-color: ${colors.darkColor};
  }

  .matches {
    background-color: #00a3ff;
  }

  .chart-text {
    color: ${colors.textThree};
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .bg {
    gap: 28px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 30px;
  gap: 16px;
  margin-bottom: 46px;
`;

const GridItem = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 12px;
  background: ${colors.bgSecondary};

  .bold {
    color: ${colors.textColor};
    font-size: 34px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.68px;
  }

  .small {
    color: #7e8299;
    font-size: 16px;
    font-weight: 500;
    line-height: 30px; /* 187.5% */
    letter-spacing: -0.32px;
  }
`;

const Activity = () => {
  const { swipes, like, match, singleUser, filter, setFilter, fav } =
    usersStore();

  const [showDropDown, setDropDown] = React.useState(false);

  React.useEffect(() => {
    setFilter(new Date().getFullYear());
  }, [setFilter]);

  return (
    <Container>
      <Header title="Activity Summary" />
      <GridContainer>
        <GridItem>
          <p className="bold">{formatLastActive(singleUser.lastActive)}</p>
          <p className="small">Last active</p>
        </GridItem>
        <GridItem>
          <p className="bold">{swipes}</p>
          <p className="small">Total Swipes</p>
        </GridItem>
        <GridItem>
          <p className="bold">{like}</p>
          <p className="small">Total Likes</p>
        </GridItem>
        <GridItem>
          <p className="bold">{match}</p>
          <p className="small">Total Matches</p>
        </GridItem>
        <GridItem>
          <p className="bold">{fav}</p>
          <p className="small">Total Favorites</p>
        </GridItem>
      </GridContainer>

      <div className="flex ai-center justify-between border">
        <div>
          <p className="activity">Activity Chart</p>
        </div>
        <div className="select">
          <div className="year">
            <p>{filter}</p>
          </div>
          <div
            className="center cursor"
            onClick={() => setDropDown(!showDropDown)}
          >
            <FiChevronDown color="#7E8299" size={20} />
          </div>
          {showDropDown && <Dropdown />}
        </div>
      </div>
      <div className="flex bg">
        <div className="flex ai-center">
          <div className="line swipes" />
          <div className="chart-text">Swipes</div>
        </div>
        <div className="flex ai-center">
          <div className="line likes" />
          <div className="chart-text">Likes</div>
        </div>
        <div className="flex ai-center">
          <div className="line matches" />
          <div className="chart-text">Matches</div>
        </div>
      </div>
      <Chart />
    </Container>
  );
};

export default Activity;
