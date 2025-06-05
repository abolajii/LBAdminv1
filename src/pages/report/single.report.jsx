import { Container, Loading, NavHeader, Skeleton } from "../../components";

import ChatBox from "./components/chat.box";
import React from "react";
import Reason from "./components/reason";
import UserContainer from "./components/user.container";
import { colors } from "../../constants";
import { formatDate } from "../../utils";
import styled from "styled-components";
import { updateSingleReport } from "../../api/auth.requests";
import { useParams } from "react-router-dom";
import useReportOptions from "./hook/useReport";

const Inner = styled.div`
  border-radius: 12px;
  background: ${colors.white};
  padding: 36px 26px;
  margin-top: 25px;

  .reason {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 150%; /* 22.5px */
    margin-bottom: 15px;
  }
`;

const Text = styled.p`
  color: ${colors.textOne};
  font-size: 20px;
  font-weight: 700;
  line-height: normal;
`;

const Gap = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const BoxOne = styled.div`
  flex: 1;
  border-top: 1px solid #eff2f5;
  border-radius: 3px;
`;

const BoxTwo = styled.div`
  flex: 1;
  border-radius: 15px;
  border: 1px solid #ded7d7;
  background: ${colors.bg};
  padding-bottom: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  margin-bottom: 14px;
  padding-bottom: 40px;
  border-bottom: 1px solid #eff2f5;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .title {
    color: ${colors.textThree};
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
  }

  .value {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 150%; /* 22.5px */
  }
`;

const Status = styled.div`
  display: inline-flex;
  padding: 6px 11px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
`;

const Pending = styled(Status)`
  background: #f9f3df;
  color: #e1b000;
`;

const Resolved = styled(Status)`
  background: #dff2e8;
  color: #2ca764;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
`;

const SaveChanges = styled.button`
  padding: 12px 20px;
  background-color: ${colors.darkColor};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;

const Discard = styled(SaveChanges)`
  color: ${colors.textThree};
  background-color: ${colors.white};
`;

const SingleReport = () => {
  const { singleReport, singleLoading, getReport, setSingleReport } =
    useReportOptions();
  const { id } = useParams();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getReport(id);
  }, [getReport, id]);

  const resolve = async () => {
    setShowModal(true);
    const response = await updateSingleReport(id, { status: "resolved" });
    setShowModal(false);
    setSingleReport(response.data);
  };

  if (singleLoading) {
    return (
      <Container>
        <NavHeader
          text="Report Management"
          path="/report"
          titleOne="Report Management"
          titleTwo="Report Details"
          pathTwo="/report/123"
        />
        <Inner>
          <Text>Report Details</Text>
          <Gap>
            <BoxOne>
              <GridContainer>
                <GridItem>
                  <p className="title">Date requested</p>
                  <Skeleton height="23px" width="90px" border={6} mr="6px" />
                </GridItem>
                <GridItem>
                  <p className="title">Ticket ID</p>
                  <Skeleton height="23px" width="90px" border={6} mr="6px" />
                </GridItem>
                <GridItem>
                  <p className="title">Status</p>
                  <Skeleton height="23px" width="90px" border={6} mr="6px" />
                </GridItem>
              </GridContainer>
              <UserContainer title="Reporting user" />
              <UserContainer title="Accused user" />
              <p className="reason">Reason</p>
              <Skeleton height="163px" width="100%" border={6} />
              {/* <Reason>
              </Reason> */}

              <ButtonContainer>
                <Discard>Discard</Discard>
                <SaveChanges>Resolved</SaveChanges>
              </ButtonContainer>
            </BoxOne>
            <BoxTwo>
              <ChatBox />
            </BoxTwo>
          </Gap>
        </Inner>
      </Container>
    );
  }
  return (
    <Container>
      {showModal && <Loading />}
      {/* Header */}
      <NavHeader
        text="Report Management"
        path="/report"
        titleOne="Report Management"
        titleTwo="Report Details"
        pathTwo="/report/123"
      />
      <Inner>
        <Text>Report Details</Text>
        <Gap>
          <BoxOne>
            <GridContainer>
              <GridItem>
                <p className="title">Date requested</p>
                <p className="value">{formatDate(singleReport.dateCreated)}</p>
              </GridItem>
              <GridItem>
                <p className="title">Ticket ID</p>
                <p className="value">{singleReport.ticketId}</p>
              </GridItem>
              <GridItem>
                <p className="title">Status</p>
                {singleReport.status === "pending" ? (
                  <div>
                    <Pending>Pending</Pending>
                  </div>
                ) : (
                  <div>
                    <Resolved>Resolved</Resolved>
                  </div>
                )}
              </GridItem>
            </GridContainer>
            <UserContainer
              title="Reporting user"
              user={singleReport.reportedBy}
            />
            <UserContainer
              title="Accused user"
              user={singleReport.reportedUser}
              suspend
              suspendUser={singleReport.suspended}
            />
            <Reason reason={singleReport.reason} />

            {singleReport.status !== "resolved" && (
              <ButtonContainer>
                <Discard>Discard</Discard>
                <SaveChanges onClick={resolve}>Resolved</SaveChanges>
              </ButtonContainer>
            )}
          </BoxOne>
          <BoxTwo>
            <ChatBox />
          </BoxTwo>
        </Gap>
      </Inner>
    </Container>
  );
};

export default SingleReport;
