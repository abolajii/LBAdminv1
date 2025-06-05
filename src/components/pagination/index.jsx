/* eslint-disable react/prop-types */
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { clsx } from "clsx";
// import React from "react";
import styled from "styled-components";
import usePaginationOptions from "./hook/useOptions";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  .text {
    color: #5e6278;
    font-family: Lato;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
  }

  .pagination {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .pagination-item {
    margin: 0 5px;
    cursor: pointer;
    color: #5e6278;
    font-family: Lato;
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #fff;
    display: grid;
    place-items: center;
  }

  button {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    border-radius: 6px;
    background: transparent;
    color: #7e8299;
    margin: 0 5px;
    background: #fff;

    &.active {
      background: #ce1f1f;
      color: #fff;
    }
  }
`;

const Pagination = ({ handlePage, tag }) => {
  const {
    totalItems,
    totalPages,
    currentReportPage,
    currentUserPage,
    onNext,
    onPrev,
  } = usePaginationOptions();

  let currentPage = tag === "reports" ? currentReportPage : currentUserPage;

  // Calculate the starting item number for the current page
  const fromItem = (currentPage - 1) * 10 + 1;

  // Calculate the ending item number for the current page
  const toItem = Math.min(currentPage * 10, totalItems);

  const hasNext = currentPage < totalPages;
  const hasPrev = currentPage > 1;

  return (
    <Container>
      <div>
        <p className="text">
          Showing {fromItem} to {toItem} of {totalItems} entries
        </p>
      </div>
      <div>
        <ul className="pagination">
          {hasPrev && (
            <li
              className={`pagination-item cursor ${!hasPrev ? "disabled" : ""}`}
              onClick={hasPrev ? onPrev : null}
            >
              <FiChevronLeft size={15} color="black" />
            </li>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePage(page)}
              className={clsx(page === currentPage && "active")}
            >
              {page}
            </button>
          ))}
          {hasNext && (
            <li
              className={`pagination-item cursor ${!hasNext ? "disabled" : ""}`}
              onClick={hasNext ? onNext : null}
            >
              <FiChevronRight size={15} color="black" />
            </li>
          )}
        </ul>
      </div>
    </Container>
  );
};

export default Pagination;
