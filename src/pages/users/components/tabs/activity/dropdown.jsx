/* eslint-disable react/prop-types */
import clsx from "clsx";
import { colors } from "../../../../../constants";
import styled from "styled-components";
import usersStore from "../../../store";

const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  height: 300px;
  width: 100%;
  background: white;
  border-radius: 6px;
  overflow-y: scroll;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Add a box shadow here */
  padding: 20px 0;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    width: 0;
  }

  p {
    cursor: pointer;
    color: white;
    padding: 10px 20px;
    color: ${colors.textColor};

    &.active {
      background: #ce1f1f;
      color: white;
    }

    &:hover {
      background: rgba(206, 31, 31, 0.95);
      color: white;
    }
  }
`;

const Dropdown = () => {
  const { filter, setFilter } = usersStore();
  const startYear = 2000;
  const currentYear = new Date().getFullYear(); // Start with the current year

  // Create an array of years from the current year to 2000
  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => currentYear - index
  );

  return (
    <Container>
      {years.map((year) => {
        return (
          <p
            key={year}
            className={clsx(filter === year && "active")}
            onClick={() => setFilter(year)}
          >
            {year}
          </p>
        );
      })}
    </Container>
  );
};

export default Dropdown;
