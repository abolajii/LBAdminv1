import DeleteModal from "./modal";
/* eslint-disable react/prop-types */
import Email from "./svg/email";
import MyTab from "./tab";
import Phone from "./svg/phone";
import Picture from "../../report/components/modal/picture";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import { Skeleton } from "../../../components";
import User from "./svg/user";
import Verify from "./svg/verify";
import { calculateProfileCompletion } from "../../../utils";
import { colors } from "../../../constants";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { userActivities } from "../../../api/auth.requests";
import usersStore from "../store";

const MyContainer = styled.div`
  /* background: Red; */
`;

const Container = styled.div`
  .details {
    flex: 1;
  }

  .complete {
    color: ${colors.textThree};
    font-size: 14px;
    font-weight: 600;
    line-height: normal;
  }

  .progress-value {
    color: #3f4254;
    font-size: 14px;
    font-weight: 700;
    line-height: normal;
  }

  .top {
    margin-bottom: 8px;
    align-items: flex-end;
  }
`;

const UserDetails = styled.div`
  gap: 20px 20px;
  border-radius: 3px;
  border-bottom: 1px solid #eff2f5;
  padding-bottom: 18px;
  margin-bottom: 18px;
  .picture {
    width: 160px;
    height: 160px;
    flex-shrink: 0;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }

  .name {
    p {
      color: #3f4254;
      font-size: 19px;
      font-weight: 700;
      line-height: normal;
      margin-right: 5px;
    }
  }

  .info {
    display: flex;
    gap: 17px;
    margin-top: 14px;
    margin-bottom: 12px;

    .value {
      color: ${colors.textOne};
      font-size: 14px;
      font-weight: 500;
      line-height: normal;
      margin-left: 5px;
      text-transform: capitalize;
    }

    .email {
      text-transform: lowercase;
      margin-left: 5px;
    }
  }

  .gap {
    gap: 20px;
  }
`;

const TextOverflow = styled.div`
  /* width: 120px; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Delete = styled.button`
  display: flex;
  min-width: 151px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: #fff5f8;

  color: #e53b3b;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const GridItem = styled.div`
  display: flex;
  padding: 11px 15px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;

  border-radius: 6px;
  border: 1px dashed #e4e6ef;
  background: ${colors.white};
  width: 150px;

  .number {
    color: ${colors.textColor};
    font-size: 24px;
    font-weight: 600;
    line-height: normal;
    /* align-self: stretch; */
  }

  .word {
    color: ${colors.textThree};
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
  }
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const UserContainer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const {
    singleLoading,
    singleUser,
    like,
    swipes,
    match,
    filter,
    setChartData,
    setSingleLoading,
  } = usersStore();

  const [isImageModalOpen, setImageModalOpen] = React.useState(false);

  const { uid } = useParams();

  React.useEffect(() => {
    setSingleLoading(true);
  }, [setSingleLoading]);

  React.useEffect(() => {
    const getUserActivity = async () => {
      const response = await userActivities(filter, uid);
      setChartData(response.data.chartData);
    };
    getUserActivity();
  }, [uid, setChartData, filter]);

  const openImageModal = () => {
    setImageModalOpen(true);
  };

  const closeModal = () => {
    setImageModalOpen(false);
  };

  if (singleLoading) {
    return (
      <MyContainer>
        <Container>
          <UserDetails className="flex">
            <div className="picture">
              <Skeleton height="100%" width="100%" border={6} />
            </div>
            <div className="details">
              <div className="flex ai-center justify-between">
                <div>
                  <div className="name flex ai-center">
                    <div>
                      <Skeleton
                        height="23px"
                        width="140px"
                        border={3}
                        mr="5px"
                      />
                    </div>
                    <Verify />
                  </div>
                  <div className="info">
                    <div className="flex ai-center">
                      <Skeleton height="25px" width="100px" border={3} />
                    </div>
                    <div className="flex ai-center">
                      <Skeleton height="25px" width="50px" border={3} />
                    </div>
                    <div className="flex ai-center">
                      <Skeleton height="25px" width="150px" border={3} />
                    </div>
                  </div>
                </div>
                <div>
                  <Skeleton height="40px" width="151px" border={6} />
                </div>
              </div>
              <div className="flex justify-between gap ai-end">
                <div>
                  <GridContainer>
                    <GridItem>
                      <Skeleton height="31px" width="51px" border={6} />
                      <p className="word">Total Matches</p>
                    </GridItem>
                    <GridItem>
                      <Skeleton height="31px" width="51px" border={6} />

                      <p className="word">Total Likes</p>
                    </GridItem>
                    <GridItem>
                      <Skeleton height="31px" width="51px" border={6} />
                      <p className="word">Total Swipes</p>
                    </GridItem>
                  </GridContainer>
                </div>
                <div className="flex-1">
                  <div className="top flex ai-center justify-between">
                    <p className="complete">Profile complete</p>
                    <p className="progress-value">0%</p>
                  </div>
                  <Skeleton height="7px" width="100%" border={6} />
                </div>
              </div>
            </div>
          </UserDetails>
          <MyTab />
        </Container>
      </MyContainer>
    );
  }

  return (
    <MyContainer>
      {showModal && <DeleteModal setShowModal={setShowModal} />}
      <Container>
        <UserDetails className="flex">
          <div className="picture">
            {singleUser.photos[0] && (
              <Image
                src={singleUser.photos[0].imageUrl}
                alt="profile"
                onClick={() => openImageModal(singleUser.photos[0]?.imageUrl)}
              />
            )}

            <Picture
              open={isImageModalOpen}
              imageUrl={singleUser.photos[0]?.imageUrl}
              onClose={closeModal}
            />

            {/* Render the Modal component */}
          </div>
          <div className="details">
            <div className="flex ai-center justify-between">
              <div>
                <div className="name flex ai-center">
                  <p>{singleUser?.name}</p>
                  <Verify />
                </div>
                <div className="info">
                  <div className="flex ai-center">
                    <Phone />
                    <p className="value">{singleUser?.phone}</p>
                  </div>
                  <div className="flex ai-center">
                    <User />
                    <p className="value">{singleUser?.gender}</p>
                  </div>
                  <div className="flex ai-center">
                    <Email />
                    <div className="email">
                      <TextOverflow>{singleUser?.email}</TextOverflow>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Delete onClick={() => setShowModal(true)}>
                  Delete Account
                </Delete>
              </div>
            </div>
            <div className="flex justify-between gap ai-end">
              <div>
                <GridContainer>
                  <GridItem>
                    <p className="number">{match}</p>
                    <p className="word">Total Matches</p>
                  </GridItem>
                  <GridItem>
                    <p className="number">{like}</p>
                    <p className="word">Total Likes</p>
                  </GridItem>
                  <GridItem>
                    <p className="number">{swipes}</p>
                    <p className="word">Total Swipes</p>
                  </GridItem>
                </GridContainer>
              </div>
              <div className="flex-1">
                <div className="top flex ai-center justify-between">
                  <p className="complete">Profile complete</p>
                  <p className="progress-value">
                    {calculateProfileCompletion(singleUser)}%
                  </p>
                </div>
                <ProgressBar
                  isLabelVisible={false}
                  completed={calculateProfileCompletion(singleUser)}
                  bgColor="#CE1F1F"
                  height="6px"
                />
              </div>
            </div>
          </div>
        </UserDetails>
        <MyTab />
      </Container>
    </MyContainer>
  );
};

export default UserContainer;
