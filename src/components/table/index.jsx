/* eslint-disable react/prop-types */
import Avi from "./components/avi";
import { colors } from "../../constants";
import { formatDate } from "../../utils";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import usersStore from "../../pages/users/store";

const TableWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
  margin-top: 18px;
`;

const Row = styled.div`
  display: flex;
  border-bottom: 1px dashed #e4e6ef;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

const Cell = styled.div`
  padding: 8px;
  flex: ${(props) => (props.expand ? 2 : 1)};
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.alignRight ? "flex-end" : "flex-start")};
  color: ${colors.textOne};
  font-family: Lato;
  font-size: 15px;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

const HeaderCell = styled(Cell)`
  font-weight: bold;
  color: ${colors.textThree};
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.36px;
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  display: flex;
  padding: 6px 11.5px;
  border-radius: 6px;
  background: #f5f8fa;
  color: ${colors.textOne};
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
`;

const Table = ({ columns, data }) => {
  const { setSingleLoading } = usersStore();

  const navigate = useNavigate();

  const onClick = (uid) => {
    setSingleLoading(true);
    navigate(`/users/${uid}`);
  };
  return (
    <TableWrapper>
      <Row>
        {columns.map((column) => {
          const { id, title, key } = column;
          return (
            <HeaderCell
              key={id}
              expand={key === "user"}
              alignRight={key === "details"}
            >
              {title}
            </HeaderCell>
          );
        })}
      </Row>
      {data.map((row, rowIndex) => (
        <Row key={rowIndex}>
          {columns.map((column) => {
            const { id, key } = column;
            return (
              <Cell
                key={id}
                expand={key === "user"}
                alignRight={key === "details"}
              >
                {key === "user" ? (
                  <Avi user={row} />
                ) : key === "details" ? (
                  <Button onClick={() => onClick(row._id)}>View</Button>
                ) : key === "gender" ? (
                  row[key]
                ) : (
                  formatDate(row[key])
                )}
              </Cell>
            );
          })}
        </Row>
      ))}
    </TableWrapper>
  );
};

export default Table;
