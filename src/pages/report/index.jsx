import {
  Container,
  NavHeader,
  Skeleton,
  TitleAndSearch,
} from "../../components";
import {
  Gap,
  SkeletonCell,
  SkeletonHeaderCell,
  SkeletonRow,
  SkeletonTableWrapper,
} from "../../components/skeleton/styles";

import Pagination from "../../components/pagination";
import React from "react";
import Table from "./table";
import usePaginationOptions from "../../components/pagination/hook/useOptions";
import useReportOptions from "./hook/useReport";

const Report = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { getAllReports, count, loading, setReports, setLoading } =
    useReportOptions();
  const { setPaginationOptions, onPageClick, currentPage } =
    usePaginationOptions();
  // const [userLength, setUserLength] = React.useState(0);

  React.useEffect(() => {
    const response = async () => {
      setLoading(true);
      const { data } = await getAllReports(currentPage);
      setPaginationOptions({
        totalItems: data.totalItems, // Total number of items
        totalPages: data.totalPages, // Total number of pages
        currentReportPage: data.currentPage, // Current page
        hasNext: data.hasNext, // Boolean for whether there is a next page
        hasPrev: data.hasPrev, // Boolean for whether there is a previous page
      });
    };
    response();
  }, [getAllReports, setPaginationOptions, currentPage, setLoading]);

  const handlePage = async (page) => {
    const { data } = await onPageClick(page, "reports");
    setReports(data);
  };

  if (loading) {
    return (
      <Container>
        <NavHeader
          text="Report Management"
          path="/report"
          titleOne="Report Management"
        />
        <TitleAndSearch
          text="New reports"
          number="0"
          filter
          toggleDropdown={toggleDropdown}
          isOpen={isOpen}
        />
        <SkeletonTableWrapper>
          <SkeletonRow>
            {[...Array(6)].map((_, index) => {
              return (
                <SkeletonHeaderCell key={index} alignRight={index === 5}>
                  <Skeleton width="100px" height="20px" border={5} />
                </SkeletonHeaderCell>
              );
            })}
          </SkeletonRow>
          {[...Array(10)].map((_, index) => {
            return (
              <SkeletonRow key={index}>
                <SkeletonCell>
                  <Skeleton width="120px" height="20px" border={4} />
                </SkeletonCell>
                <SkeletonCell>
                  <Gap>
                    <Skeleton width="36px" height="36px" border={36} />
                    <div>
                      <Skeleton width="100px" height="17px" border={3} />
                    </div>
                  </Gap>
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="170px" height="17px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Gap>
                    <Skeleton width="36px" height="36px" border={36} />
                    <div>
                      <Skeleton width="100px" height="17px" border={3} />
                    </div>
                  </Gap>
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="17px" border={3} />
                </SkeletonCell>
                <SkeletonCell alignRight>
                  <div className="flex ai-center justify-between w-100">
                    <Skeleton width="60px" height="15px" border={3} mr="5px" />
                    <Skeleton width="60px" height="15px" border={3} />
                  </div>
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
      {/* Header */}
      <NavHeader
        text="Report Management"
        path="/report"
        titleOne="Report Management"
      />
      {/* Title and search bar */}
      <TitleAndSearch
        text="New reports"
        number={count}
        filter
        toggleDropdown={toggleDropdown}
        isOpen={isOpen}
      />

      {/* Table */}
      <Table />
      <Pagination handlePage={handlePage} tag="reports" />
    </Container>
  );
};

export default Report;
