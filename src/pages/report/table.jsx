/* eslint-disable react/prop-types */
import Details from "./details";
import User from "./user";
import { colors } from "../../constants";
import { formatDate } from "../../utils";
import styled from "styled-components";
import useReportOptions from "./hook/useReport";

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
  min-height: 500px;
`;

const Row = styled.div`
  border-bottom: 1px dashed #e4e6ef;
`;

const Column = styled.div`
  flex: ${(props) => (props.expand ? 1.5 : 1)};
  padding: 8px 0;
  display: flex;
  align-items: center;
  color: ${colors.textOne};
  font-size: 14px;
  font-weight: 700;
`;

const HeaderColumn = styled(Column)`
  font-weight: bold;
  color: ${colors.textThree};
  font-size: 12px;
  letter-spacing: 0.36px;
  justify-content: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};
  text-align: ${(props) => (props.alignRight ? "right" : "left")};
`;

const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 220px;
`;

const columns = [
  { id: 1, title: "TICKET ID", key: "ticketId" },
  { id: 2, title: "USER NAME", key: "user" },
  { id: 3, title: "REASON", key: "reason" },
  { id: 4, title: "REPORTED USER", key: "reportedUser" },
  { id: 5, title: "DATE", key: "date" },
  { id: 6, title: "DETAILS", key: "details" },
];

const Table = () => {
  const { reports } = useReportOptions();
  return (
    <TableContainer>
      <Row className="flex">
        {columns.map((column) => {
          return (
            <HeaderColumn
              key={column.id}
              alignRight={column.key === "details"}
              expand={column.key === "reason"} // Set expand for the "REASON" header column
            >
              {column.title}
            </HeaderColumn>
          );
        })}
      </Row>

      {reports.map((each, index) => {
        return (
          <Row key={index} className="flex">
            {columns.map((column) => {
              const { id, key } = column;
              return (
                <Column key={id} expand={key === "reason"}>
                  {key === "details" ? (
                    <Details status={each["status"]} id={each.id} />
                  ) : key === "user" ? (
                    <User user={each[key]} />
                  ) : key === "reportedUser" ? (
                    <User user={each[key]} />
                  ) : key === "reason" ? (
                    <TextOverflow>{each[key]}</TextOverflow>
                  ) : key === "date" ? (
                    formatDate(each[key])
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
