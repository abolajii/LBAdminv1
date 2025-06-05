import { Container, NavHeader, TitleAndSearch } from "../../components";

import AddModal from "./modals/add.modal";
import React from "react";
import Table from "./table";
import ViewModal from "./modals/view.modal";

const Subscription = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [viewIsOpen, setViewIsOpen] = React.useState(false);
  const [editIsOpen, setEditIsOpen] = React.useState(false);
  //
  const openModal = () => {
    setIsOpen(true);
  };

  const viewFeature = (id) => {
    setViewIsOpen(true);
  };

  const editFeature = (id) => {
    setIsOpen(true);
    setEditIsOpen(true);
  };

  return (
    <Container>
      {isOpen && (
        <AddModal
          close={() => {
            if (editIsOpen) {
              setEditIsOpen(false);
            }
            setIsOpen(false);
          }}
          edit={editIsOpen}
        />
      )}
      {viewIsOpen && <ViewModal close={() => setViewIsOpen(false)} />}
      <NavHeader
        two
        text="Subscription"
        path="/subscriptions"
        titleOne="Subscription"
        openModal={openModal}
        btnTitle="Add new"
      />
      <TitleAndSearch text="Subscription" number="2" />
      <Table view={viewFeature} edit={editFeature} />
    </Container>
  );
};

export default Subscription;
