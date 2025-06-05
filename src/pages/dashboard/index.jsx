import { Container, NavHeader, Skeleton, Table, Title } from "../../components";
import {
  SkeletonBg,
  SkeletonCell,
  SkeletonContainer,
  SkeletonHeaderCell,
  SkeletonRow,
  SkeletonTableWrapper,
} from "../../components/skeleton/styles";

import ChartLabel from "./components/chart.label";
import CircularChart from "./components/circular";
import { Link } from "react-router-dom";
import React from "react";
import Search from "./components/search";
import { colors } from "../../constants";
import styled from "styled-components";
import userStore from "../../store/userStore";

const Gap = styled.div`
  display: flex;
  gap: 5px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding-top: 25px;
  margin-bottom: 32px;
`;

const Grid = styled.div`
  display: flex;
  padding: 30px;
  flex-direction: column;
  background: ${colors.white};
  border-radius: 12px;

  .gap {
    gap: 37px;
  }
`;

const BoldText = styled.p`
  color: ${colors.textOne};
  font-size: 34px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.68px;
`;

const SubText = styled.p`
  color: ${colors.textThree};
  font-family: Lato;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px; /* 187.5% */
`;

const Item = styled.div`
  border-bottom: 1px dashed #e4e6ef;
  display: flex;
  padding: 12px 0;

  .title {
    color: ${colors.textFive};
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .value {
    color: ${colors.textOne};
    font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }
`;

const Dashboard = () => {
  //
  //
  const tableHeaders = [
    {
      id: 1,
      key: "user",
      title: "USER NAME",
    },
    {
      id: 2,
      key: "gender",
      title: "GENDER",
    },
    {
      id: 3,
      key: "createdAt",
      title: "JOIN DATE",
    },
    {
      id: 4,
      key: "lastActive",
      title: "LAST ACTIVE",
    },
    {
      id: 5,
      key: "details",
      title: "DETAILS",
    },
  ];

  const {
    getDetails,
    loading,
    usersData: {
      malePercentage,
      femalePercentage,
      totalItems,
      dislikeCount,
      likeCount,
      matchCount,
      favCount,
      subscriptionCounts,
      totalSubscribedUsers,
      firstFiveUsers,
    },
  } = userStore();

  React.useEffect(() => {
    getDetails();
  }, [getDetails]);

  if (loading) {
    return (
      <Container>
        <NavHeader text="Dashboard" path="/dashboard" titleOne="Home" />
        <GridContainer>
          <Grid>
            <Skeleton height="41px" width="41px" border={5} />
            <SubText>Total users</SubText>
            <div className="flex ai-center gap">
              <Skeleton height="100px" width="100px" border={100} mt="16px" />
              <SkeletonContainer>
                <div className="flex ai-center justify-between margin">
                  <div className="flex ai-center space">
                    <SkeletonBg className="female" />
                    <p>Female</p>
                  </div>
                  <div>
                    <Skeleton height="30px" width="30px" border={3} />
                  </div>
                </div>
                <div className="flex ai-center justify-between">
                  <div className="flex ai-center space">
                    <SkeletonBg className="male" />
                    <p>Male</p>
                  </div>
                  <div>
                    <Skeleton height="30px" width="30px" border={3} />
                  </div>
                </div>
              </SkeletonContainer>
            </div>
          </Grid>
          <Grid>
            <Skeleton height="41px" width="41px" border={5} />
            <SubText>Subscribed users</SubText>
            <div>
              <Item className="flex ai-center justify-between">
                <p className="title">Silver Plan</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
              <Item className="flex ai-center justify-between">
                <p className="title">Gold Plan</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
              <Item className="flex ai-center justify-between">
                <p className="title">Platinum Plan</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
            </div>
          </Grid>
          <Grid>
            <Skeleton height="41px" width="41px" border={5} />
            <SubText>Total matches</SubText>
            <div>
              <Item className="flex ai-center justify-between">
                <p className="title">Swipes</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
              <Item className="flex ai-center justify-between">
                <p className="title">Likes</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
              <Item className="flex ai-center justify-between">
                <p className="title">Passes</p>
                <Skeleton height="20px" width="30px" border={3} />
              </Item>
            </div>
          </Grid>
        </GridContainer>

        <div className="flex ai-center justify-between">
          <Gap className="flex-1">
            <Title text="Users" />
            <Link to="/users">
              <Title text="View all" color />
            </Link>
          </Gap>
          <Search />
        </div>
        <SkeletonTableWrapper>
          <SkeletonRow>
            {[...Array(5)].map((_, index) => {
              return (
                <SkeletonHeaderCell key={index}>
                  <Skeleton width="100px" height="20px" border={5} />
                </SkeletonHeaderCell>
              );
            })}
          </SkeletonRow>
          {[...Array(5)].map((_, index) => {
            return (
              <SkeletonRow key={index}>
                <SkeletonCell>
                  <Gap>
                    <Skeleton width="36px" height="36px" border={36} />
                    <div>
                      <Skeleton width="120px" height="15px" border={3} />
                      <Skeleton width="120px" height="13px" border={3} />
                    </div>
                  </Gap>
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
              </SkeletonRow>
            );
          })}
        </SkeletonTableWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <NavHeader text="Dashboard" path="/dashboard" titleOne="Home" />
      <GridContainer>
        <Grid>
          <BoldText>{totalItems}</BoldText>
          <SubText>Total users</SubText>
          <div className="flex ai-center gap">
            <CircularChart
              malePercentage={malePercentage}
              femalePercentage={femalePercentage}
            />
            <ChartLabel />
          </div>
        </Grid>
        <Grid>
          <BoldText>{totalSubscribedUsers}</BoldText>
          <SubText>Subscribed users</SubText>
          <div>
            {Object.entries(subscriptionCounts).map(([plan, count]) => (
              <Item className="flex ai-center justify-between" key={plan}>
                <p className="title">{plan}</p>
                <p className="value">{count}</p>
              </Item>
            ))}
          </div>
        </Grid>
        <Grid>
          <BoldText>{matchCount}</BoldText>
          <SubText>Total matches</SubText>
          <div>
            <Item className="flex ai-center justify-between">
              <p className="title">Swipes</p>
              <p className="value">{likeCount + dislikeCount + favCount}</p>
            </Item>
            <Item className="flex ai-center justify-between">
              <p className="title">Likes</p>
              <p className="value">{likeCount}</p>
            </Item>
            <Item className="flex ai-center justify-between">
              <p className="title">Passes</p>
              <p className="value">{dislikeCount}</p>
            </Item>
          </div>
        </Grid>
      </GridContainer>
      <div className="flex ai-center justify-between">
        <Gap className="flex-1">
          <Title text="Users" />
          <Link to="/users">
            <Title text="View all" color />
          </Link>
        </Gap>
        <Search />
      </div>
      <Table columns={tableHeaders} data={firstFiveUsers} />
    </Container>
  );
};

export default Dashboard;
