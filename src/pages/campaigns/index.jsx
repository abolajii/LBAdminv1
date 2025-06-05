import { Container, NavHeader, TitleAndSearch } from "../../components";

import CreateCampaignodal from "./components/modal";
import React from "react";
import Table from "./components/table";

const Campaigns = () => {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      {showModal && <CreateCampaignodal close={closeModal} />}
      <NavHeader
        text="Campaigns"
        path="/campaigns"
        titleOne="Campaigns"
        two
        btnTitle="Create campaign"
        openModal={openModal}
      />
      <TitleAndSearch text="Campaigns created" number="28" />
      <Table />
    </Container>
  );
};

export default Campaigns;
