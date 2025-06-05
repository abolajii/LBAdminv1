/* eslint-disable react/prop-types */
import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import React from "react";
import styled from "styled-components";

const Box = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a box shadow here */
  border-radius: 9px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  top: 95px;
  left: 0px;
`;
const formatDateString = (date) =>
  date
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .split("/")
    .join("-");

const DateOfBirth = ({ user, changeDob }) => {
  const [dob, setDob] = React.useState(user?.dob);

  const handleDateChange = (date) => {
    setDob(date);
    const formattedDate = formatDateString(date);
    changeDob(formattedDate);
  };

  return (
    <Box>
      <Calendar
        onChange={handleDateChange}
        value={dob !== "" ? new Date(user?.dob) : new Date()}
      />
    </Box>
  );
};

export default DateOfBirth;
