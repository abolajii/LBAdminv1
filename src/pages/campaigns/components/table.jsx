// import React from "react";

import Campaign from "./campaign";
import Details from "./details";
import { colors } from "../../../constants";
import styled from "styled-components";

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.div`
  border-bottom: 1px dashed #e4e6ef;
`;

const Column = styled.div`
  flex: ${(props) => (props.expand ? 2 : 1)};
  padding: 8px 0;
  display: flex;
  align-items: center;
  color: ${colors.textOne};
  font-size: 14px;
  font-weight: 700;
  justify-content: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};

  text-align: ${(props) =>
    props.alignRight ? "right" : "left"}; // Align text within the column
`;

const HeaderColumn = styled(Column)`
  flex: ${(props) => (props.expand ? 2 : 1)};
  font-weight: bold;
  color: ${colors.textThree};
  font-size: 12px;
  letter-spacing: 0.36px;
  text-align: ${(props) => (props.alignRight ? "right" : "left")};
`;

const columns = [
  { id: 1, title: "CAMPAIGN", key: "campaign" },
  { id: 2, title: "SENT", key: "sent" },
  { id: 3, title: "TARGETED", key: "targeted" },
  { id: 4, title: "REACH", key: "reach" },
  { id: 5, title: "DETAILS", key: "details" },
];

const tableData = [
  {
    id: 1,
    campaign: {
      title: "Cyber Monday",
      body: "Enjoy 60% discount and boost likes when you subscribe to the premium plan",
    },
    sent: "Sep 9, 2020, 9:04 AM",
    targeted: "4,238",
    reach: "1,333",
  },
  {
    id: 2,
    campaign: {
      title: "Cyber Tuesday",
      body: "Enjoy 60% discount and boost likes when you subscribe to the premium plan",
    },
    sent: "Sep 9, 2020, 9:04 AM",
    targeted: "4,238",
    reach: "1,333",
  },
];

const Table = () => {
  return (
    <TableContainer>
      <Row className="flex">
        {columns.map((column) => {
          return (
            <HeaderColumn
              expand={column.key === "campaign"}
              key={column.id}
              alignRight={column.key === "details"}
            >
              {column.title}
            </HeaderColumn>
          );
        })}
      </Row>

      {tableData.map((each, index) => {
        return (
          <Row key={index} className="flex">
            {columns.map((column) => {
              const { id, key } = column;
              return (
                <Column
                  key={id}
                  alignRight={column.key === "details"}
                  expand={key === "campaign"}
                >
                  {key === "details" ? (
                    <Details />
                  ) : key === "campaign" ? (
                    <Campaign campaign={each[key]} />
                  ) : (
                    each[key]
                  )}
                </Column>
              );
            })}
          </Row>
        );
      })}
    </TableContainer>
  );
};

export default Table;
