import {
  Academics,
  Animals,
  Art,
  BasketBall,
  BoardGames,
  Camera,
  Camping,
  Charity,
  Coffee,
  Cooking,
  Dancing,
  Drink,
  Drop,
  Extreme,
  Faith,
  Family,
  Fashion,
  Fishing,
  Gardening,
  Hiking,
  HumanRight,
  Karoke,
  Lgbt,
  Medidate,
  Meditate,
  Military,
  Movies,
  Music,
  Nutrition,
  Politics,
  Rugby,
  Run,
  Scroll,
  Shopping,
  Singing,
  Swimming,
  Tattoo,
  Tennis,
  Travel,
  Videogame,
  Weight,
  Yoga,
} from "./svg";
import { Loading, Modal } from "../../../../../components";

/* eslint-disable react/prop-types */
import Header from "../header";
import React from "react";
import { colors } from "../../../../../constants";
import styled from "styled-components";
import { updateInterests } from "../../../../../api/auth.requests";
import { useParams } from "react-router-dom";
import usersStore from "../../../store";

const Inner = styled.div`
  background: ${colors.white};
  min-height: 580px;
  width: 530px;
  border-radius: 13px;
  padding: 20px;

  .title {
    color: ${colors.textColor};
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    margin-bottom: 20px;
  }
`;

const OverflowContainer = styled.div`
  height: 360px;
  width: 100%;
`;

const Details = styled.div`
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 6px;
    margin-block: 20px;
  }
  &::-webkit-scrollbar-track {
    background: #ffe7e7;
    border-radius: 20px;
  }
  &::-webkit-scrollbar-thumb {
    background: #b50d0d;
    opacity: 0.5;
    border-radius: 20px;
  }
`;

const InterestBox = styled.div`
  width: 99%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const ItemButton = styled.button`
  height: 45px;
  width: 80%;
  border-radius: 15px;
  background: #fff;
  padding: 9px 11px;
  cursor: pointer;
  border: 1px solid #e8e6ea;
  color: black;
  display: flex;
  align-items: center;

  p {
    margin-left: 9px;
    font-family: "Lato", sans-serif;
    color: ${(props) => (props.selected ? "white" : "black")};
  }

  &.active {
    background-color: #ce1f1f;
    color: white;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

const SaveChanges = styled.button`
  padding: 12px 20px;
  background-color: ${colors.darkColor};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 500;
  line-height: normal;

  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.white};
    color: ${colors.textThree};
  }
`;

const Discard = styled(SaveChanges)`
  color: ${colors.textThree};
  background-color: ${colors.white};
  margin-right: 30px;
`;
const fill = "#ce1f1f";

const Item = ({ text, children, selected, onClick }) => {
  return (
    <ItemButton
      className={selected ? "active" : ""}
      onClick={onClick}
      selected={selected}
    >
      {React.cloneElement(children, {
        fill: selected ? colors.white : fill,
      })}
      <p>{text}</p>
    </ItemButton>
  );
};

const interestIcons = [
  {
    text: "Photography",
    icon: <Camera fill={fill} />,
  },
  { text: "Shopping", icon: <Shopping fill={fill} /> },
  { text: "Karoke", icon: <Karoke fill={fill} /> },
  { text: "Sports", icon: <Yoga fill={fill} /> },
  { text: "Cooking", icon: <Cooking fill={fill} /> },
  { text: "Tennis", icon: <Tennis fill={fill} /> },
  { text: "Run", icon: <Run fill={fill} /> },
  { text: "Swimming", icon: <Swimming fill={fill} /> },
  { text: "Art", icon: <Art fill={fill} /> },
  { text: "Traveling", icon: <Travel fill={fill} /> },
  { text: "Dancing", icon: <Dancing fill={fill} /> },
  { text: "Singing", icon: <Singing fill={fill} /> },
  { text: "Charity", icon: <Charity fill={fill} /> },
  { text: "Movies", icon: <Movies fill={fill} /> },
  { text: "Fishing", icon: <Fishing fill={fill} /> },
  { text: "Politics", icon: <Politics fill={fill} /> },
  { text: "Fashion", icon: <Fashion fill={fill} /> },
  { text: "Family", icon: <Family fill={fill} /> },
  { text: "Human rights", icon: <HumanRight fill={fill} /> },
  { text: "LGBTQ", icon: <Lgbt fill={fill} /> },
  { text: "Meditate", icon: <Meditate fill={fill} /> },
  { text: "Tattoo", icon: <Tattoo fill={fill} /> },
  { text: "Nutrition", icon: <Nutrition fill={fill} /> },
  { text: "Academics", icon: <Academics fill={fill} /> },
  { text: "Meditation", icon: <Medidate fill={fill} /> },
  { text: "History", icon: <Scroll fill={fill} /> },
  { text: "Collectables", icon: <Drop fill={fill} /> },
  { text: "Drinking", icon: <Drink fill={fill} /> },
  { text: "Faith", icon: <Faith fill={fill} /> },
  { text: "Animals", icon: <Animals fill={fill} /> },
  { text: "Coffee", icon: <Coffee fill={fill} /> },
  { text: "Extreme", icon: <Extreme fill={fill} /> },
  { text: "Hiking", icon: <Hiking fill={fill} /> },
  { text: "Camping", icon: <Camping fill={fill} /> },
  { text: "Gardening", icon: <Gardening fill={fill} /> },
  { text: "Fitness", icon: <Weight fill={fill} /> },
  { text: "Video games", icon: <Videogame fill={fill} /> },
  { text: "Military", icon: <Military fill={fill} /> },
  { text: "Board games", icon: <BoardGames fill={fill} /> },
  { text: "Football", icon: <Rugby fill={fill} /> },
  { text: "Basketball", icon: <BasketBall fill={fill} /> },
  { text: "Music", icon: <Music fill={fill} /> },
];

const InterestModal = ({ closeModal }) => {
  const { singleUser, setSingleUser } = usersStore();
  const [selectedItems, setSelectedItems] = React.useState(
    singleUser?.my_interests || []
  );

  const { uid } = useParams();

  const [showModal, setShowModal] = React.useState(false);

  const maxFilled = selectedItems.length >= 4 && selectedItems.length <= 8;

  const updateInterest = async () => {
    try {
      setShowModal(true);
      const response = await updateInterests(uid, selectedItems);
      // Handle success response if neededuid
      //   console.log(response.data);
      setSingleUser(response.data.user);
    } catch (error) {
      // Handle error if needed
      console.error(error);
    } finally {
      setShowModal(false);
    }
  };

  const hasInterestsChanged = () => {
    // Check if the selected items are different from the user's interests
    return (
      JSON.stringify(selectedItems.sort()) !==
      JSON.stringify(singleUser.my_interests.sort())
    );
  };

  const selectItems = (item) => {
    const updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(item)) {
      const index = updatedSelectedItems.indexOf(item);
      updatedSelectedItems.splice(index, 1);
    } else {
      updatedSelectedItems.push(item);
    }

    setSelectedItems(updatedSelectedItems);
  };

  return (
    <Modal>
      {showModal && <Loading />}
      <Inner>
        <Header title="Add Interest" />
        <p className="title">Select maximum of 8.</p>
        <OverflowContainer>
          <Details>
            <InterestBox>
              {interestIcons.map((interest) => (
                <Item
                  key={interest.text}
                  text={interest.text}
                  selected={selectedItems.includes(interest.text)}
                  onClick={() => selectItems(interest.text)}
                >
                  {interest.icon}
                </Item>
              ))}
            </InterestBox>
          </Details>
          <ButtonContainer>
            <Discard onClick={closeModal}>Discard</Discard>
            <SaveChanges
              onClick={updateInterest}
              disabled={!hasInterestsChanged() || !maxFilled}
            >
              Save changes
            </SaveChanges>
          </ButtonContainer>
        </OverflowContainer>
      </Inner>
    </Modal>
  );
};

export default InterestModal;
