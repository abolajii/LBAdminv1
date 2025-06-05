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

import CreateModal from "./create.modal";
import Pagination from "../../components/pagination";
import React from "react";
import Table from "./components/table";
import usePaginationOptions from "../../components/pagination/hook/useOptions";
import usersStore from "./store";

const tableHeaders = [
  {
    id: 1,
    key: "user",
    title: "USER NAME",
  },
  {
    id: 2,
    key: "gender",
    title: "GENDER",
  },
  {
    id: 3,
    key: "createdAt",
    title: "JOIN DATE",
  },
  {
    id: 4,
    key: "lastActive",
    title: "LAST ACTIVE",
  },
  {
    id: 5,
    key: "details",
    title: "DETAILS",
  },
];

const Users = () => {
  const [showModal, setShowModal] = React.useState(false);

  const [refresh, setRefresh] = React.useState(false);

  const { getUsers, users, loading, length, setUsers, setLoading } =
    usersStore();

  const { setPaginationOptions, currentPage, onPageClick } =
    usePaginationOptions();
  // const [userLength, setUserLength] = React.useState(0);

  React.useEffect(() => {
    const response = async () => {
      setLoading(true);
      const { data } = await getUsers(currentPage);
      setPaginationOptions({
        totalItems: data.totalItems, // Total number of items
        totalPages: data.totalPages, // Total number of pages
        currentUserPage: data.currentPage, // Current page
        hasNext: data.hasNext, // Boolean for whether there is a next page
        hasPrev: data.hasPrev, // Boolean for whether there is a previous page
      });
    };
    response();
    setRefresh(false);
  }, [getUsers, refresh, setPaginationOptions, currentPage, setLoading]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePage = async (page) => {
    const { data } = await onPageClick(page);
    setUsers(data);
  };

  if (loading) {
    return (
      <Container>
        <NavHeader
          two
          btnTitle="Create user "
          text="User Management"
          path="/users"
          titleOne="User Management"
          openModal={openModal}
        />
        <TitleAndSearch text="Users" number="0" />
        <SkeletonTableWrapper>
          <SkeletonRow>
            {[...Array(5)].map((_, index) => {
              return (
                <SkeletonHeaderCell key={index}>
                  <Skeleton width="100px" height="20px" border={5} />
                </SkeletonHeaderCell>
              );
            })}
          </SkeletonRow>
          {[...Array(10)].map((_, index) => {
            return (
              <SkeletonRow key={index}>
                <SkeletonCell>
                  <Gap>
                    <Skeleton width="36px" height="36px" border={36} />
                    <div>
                      <Skeleton width="120px" height="15px" border={3} />
                      <Skeleton width="120px" height="13px" border={3} />
                    </div>
                  </Gap>
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
                </SkeletonCell>
                <SkeletonCell>
                  <Skeleton width="120px" height="15px" border={3} />
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
      {showModal && <CreateModal close={closeModal} setRefresh={setRefresh} />}
      <NavHeader
        two
        btnTitle="Create user "
        text="User Management"
        path="/users"
        titleOne="User Management"
        openModal={openModal}
      />
      <TitleAndSearch text="Users" number={length} />
      <Table columns={tableHeaders} data={users} />
      <Pagination handlePage={handlePage} />
    </Container>
  );
};

export default Users;
