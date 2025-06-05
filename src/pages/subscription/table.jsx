/* eslint-disable react/prop-types */
import { MySwitch } from "../../components";
import { colors } from "../../constants";
// import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  border-collapse: collapse;
`;

const Row = styled.div`
  /* background-color: red; */
  border-bottom: 1px dashed #e4e6ef;
`;

const Column = styled.div`
  flex: 1;
  padding: 8px;
  display: flex;
  align-items: center;
  color: ${colors.textOne};
  font-size: 15px;
  font-weight: 700;
`;

const HeaderColumn = styled(Column)`
  font-weight: bold;
  color: ${colors.textThree};
  font-size: 12px;
  letter-spacing: 0.36px;
`;

const Button = styled.button`
  padding: 6px 11.5px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
`;

const Features = styled(Button)`
  background: rgba(0, 227, 255, 0.07);
  color: #00a0ff;
`;

const Edit = styled(Button)`
  background: rgba(255, 224, 0, 0.09);
  color: #eeb331;
`;

const Delete = styled(Button)`
  background: #ffeaea;
  color: #e53b3b;
`;

const columns = [
  {
    id: 1,
    name: "PLAN NAME",
    key: "title",
  },
  { id: 2, name: "PRICE/MONTH", key: "price" },
  { id: 3, name: "DISCOUNT", key: "discount" },
  { id: 4, name: "AVAILABLE", key: "available" },
  { id: 5, name: "FEATURES", key: "features" },
  { id: 6, name: "ACTION", key: "action" },
];

const tableData = [
  {
    title: "Basic Plan",
    price: "$9.99",
    discount: "30%",
  },
  {
    title: "Preminum Plan",
    price: "$12.99",
    discount: "30%",
  },
  {
    title: "Classic Plan",
    price: "$7.99",
    discount: "30%",
  },
];

const Table = ({ view, edit }) => {
  return (
    <TableContainer>
      <Row className="flex">
        {columns.map((column) => {
          return <HeaderColumn key={column.id}>{column.name}</HeaderColumn>;
        })}
      </Row>

      {tableData.map((each, index) => {
        return (
          <Row key={index} className="flex">
            {columns.map((column) => {
              const { id, key } = column;
              return (
                <Column key={id}>
                  {key === "available" ? (
                    <MySwitch />
                  ) : key === "features" ? (
                    <Features onClick={() => view(index)}>View</Features>
                  ) : key === "action" ? (
                    <div className="flex ai-center justify-between w-100">
                      <Edit onClick={() => edit(index)}>Edit</Edit>
                      <Delete>Delete</Delete>
                    </div>
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
