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
import { Loading, Skeleton } from "../../../../../components";
import styled, { css } from "styled-components";
import { updateUser, upload } from "../../../../../api/auth.requests";

import AddPhotos from "./add.photos";
import DateOfBirth from "./dob";
import Header from "../header";
import InterestModal from "./interest.modal";
import React from "react";
import { colors } from "../../../../../constants";
import { formatDob } from "../../../../../utils";
import { useParams } from "react-router-dom";
import usersStore from "../../../store";

const Container = styled.div`
  .title {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 150%;
  }
  .gap {
    gap: 80px;
    margin-bottom: 47px;
  }

  .mb {
    margin-bottom: 17px;
  }
`;

const Label = styled.label`
  color: ${colors.textColor};
  font-size: 15px;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
`;

const Input = styled.input`
  width: 300px;
  height: 55px;
  flex-shrink: 0;
  border-radius: 15px;
  background: ${colors.bgSecondary};
  padding: 0 10px;
  color: ${colors.black};

  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */

  &.cap {
    text-transform: capitalize;
  }

  ${({ name }) => {
    return (
      name &&
      css`
        color: rgba(0, 0, 0, 0.5);
      `
    );
  }}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 30px;

  .interest {
    height: 45px;
    min-width: 150px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 1px solid ${colors.darkBorder};
    background: ${colors.white};
    padding: 0 10px;
  }

  .interest-icon {
    margin-right: 10px;
  }
`;

const GridItem = styled.div`
  gap: 10px;
  margin-bottom: 30px;
`;

const About = styled.textarea`
  min-height: 115px;
  margin-top: 10px;
  border-radius: 15px;
  background: ${colors.bgSecondary};
  padding: 16px 10px;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  resize: none;
  border: none;
  outline: none;
`;

const Add = styled.button`
  display: flex;
  width: 68px;
  height: 34px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;

  border-radius: 7.5px;
  background: ${colors.darkColor};

  color: ${colors.white};
  font-size: 12px;
  font-weight: 500;
  line-height: 150%; /* 18px */
`;

const PhotoContainer = styled.div`
  margin-top: 14px;
  gap: 20px;
  .photo {
    width: 209px;
    height: 270px;
    flex-shrink: 0;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.05);
    overflow: hidden;
  }
`;

const Overflow = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-padding-inline: 24px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding-right: 20px;
  width: 800px;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  border-top: 1px solid #ebedf3;
  margin-top: 30px;
`;

const SaveChanges = styled.button`
  padding: 12px 20px;
  background-color: ${colors.darkColor};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 15px;
  font-weight: 500;
  line-height: normal;
`;

const Discard = styled(SaveChanges)`
  color: ${colors.textThree};
  background-color: ${colors.white};
`;

const MAX_SLOTS = 4;

const fill = "#ce1f1f";

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
  { text: "Yoga", icon: <Meditate fill={fill} /> },
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

const Profile = () => {
  const { singleLoading, singleUser, setSingleUser } = usersStore();

  const [photos, setPhotos] = React.useState([]);

  const [openModal, setOpenModal] = React.useState(false);

  React.useEffect(() => {
    if (singleUser) {
      const uploadedPictures = singleUser?.photos.map((url, index) => ({
        id: index + 1, // Assign a unique ID based on the index (starting from 1)
        url: url.imageUrl,
      }));

      const emptySlots = Array(MAX_SLOTS - uploadedPictures?.length)
        .fill(null) // Use null as a placeholder for empty slots
        .map((_, index) => ({
          id: uploadedPictures.length + index + 1, // Assign unique ID to empty slots starting from the next available ID
          url: "", // Set an empty URL for empty slots
        }));

      setPhotos([...uploadedPictures, ...emptySlots]);
    }
  }, [singleUser]);

  const [showModal, setShowModal] = React.useState(false);

  const [openDate, setOpenDate] = React.useState(false);

  const { uid } = useParams();

  React.useEffect(() => {
    if (singleUser) {
      setDetails({
        name: singleUser.name || "",
        phone: singleUser.phone || "",
        email: singleUser.email || "",
        dob: singleUser.dob || "",
        gender: singleUser.gender || "",
        location: singleUser.location || "",
        bio: singleUser.bio || "",
      });
    }
  }, [singleUser]);

  const [details, setDetails] = React.useState({
    name: "",
    phone: "",
    email: "",
    dob: "",
    gender: "",
    location: "",
    bio: "",
  });

  const formatDateString = (date) =>
    date
      .toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .split("/")
      .join("-");

  const dateString =
    details.dob !== ""
      ? formatDob(details?.dob)
      : formatDob(formatDateString(new Date()));

  const handleDetails = (fieldName, value) => {
    setDetails((prevDetails) => ({
      ...prevDetails,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Find the fields that have changed and are not empty
    const data = Object.keys(details).reduce((acc, key) => {
      if (details[key] !== singleUser[key] && details[key] !== "") {
        acc[key] = details[key];
      }
      return acc;
    }, {});

    setShowModal(true);
    setOpenDate(false);

    try {
      if (Object.keys(data).length > 0) {
        // There are changed fields, so update the user data
        const response = await updateUser(uid, data);
        setSingleUser(response.data.user);
      }

      // Check if there are photos with non-empty URIs that don't start with "https"
      const photosWithURIs = photos.filter(
        (img) => img.url !== "" && !img.url.startsWith("https")
      );

      if (photosWithURIs.length > 0) {
        const photoURIs = photosWithURIs.map((photo) => photo.url);

        // Call the upload endpoint only if there are photos with non-empty URIs
        const uploadResponse = await upload({ photoURIs, user: uid });

        setSingleUser(uploadResponse.data.user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setShowModal(false);
    }
  };

  const open = () => {
    setOpenModal(true);
  };

  if (singleLoading) {
    return (
      <Container>
        <Header title="Basic Info" />
        <div className="flex justify-between gap">
          <div className="flex-1">
            <GridContainer>
              <GridItem className="flex flex-col">
                <Label>Name</Label>
                <Skeleton width="300px" height="55px" border={6} />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Phone Number</Label>
                <Skeleton width="300px" height="55px" border={6} />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Email Address</Label>
                <Skeleton width="300px" height="55px" border={6} />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Date of Birth</Label>
                <GridItem>
                  <Skeleton width="300px" height="55px" border={6} />
                </GridItem>
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Gender</Label>
                <Skeleton width="300px" height="55px" border={6} />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Location</Label>
                <Skeleton width="300px" height="55px" border={6} />
              </GridItem>
            </GridContainer>
            <Label>About</Label>
            <Skeleton width="100%" height="115px" border={6} mt="4px" />
          </div>
          <div className="flex-1">
            <div className="flex ai-center justify-between mb">
              <div>
                <p className="title">Interests</p>
              </div>
            </div>
            <GridContainer>
              <Skeleton width="140px" height="45px" border={9} />
              <Skeleton width="140px" height="45px" border={9} />
              <Skeleton width="140px" height="45px" border={9} />
              <Skeleton width="140px" height="45px" border={9} />
              <Skeleton width="140px" height="45px" border={9} />
              <Skeleton width="140px" height="45px" border={9} />
            </GridContainer>
          </div>
        </div>
        <Label>Photos</Label>
        <Overflow>
          <PhotoContainer className="flex">
            <div className="photo">
              <Skeleton width="100%" height="100%" border={15} />
            </div>
            <div className="photo">
              <Skeleton width="100%" height="100%" border={15} />
            </div>
            <div className="photo">
              <Skeleton width="100%" height="100%" border={15} />
            </div>
            <div className="photo">
              <Skeleton width="100%" height="100%" border={15} />
            </div>
          </PhotoContainer>
        </Overflow>
      </Container>
    );
  }

  return (
    <Container>
      {showModal && <Loading />}
      {openModal && <InterestModal closeModal={() => setOpenModal(false)} />}
      <Header title="Basic Info" />
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between gap">
          <div className="flex-1">
            <GridContainer>
              <GridItem className="flex flex-col">
                <Label>Name</Label>
                <Input
                  value={details.name}
                  name="name"
                  onChange={(e) => handleDetails("name", e.target.value)}
                />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Phone Number</Label>
                <Input
                  value={details.phone}
                  onChange={(e) => handleDetails("phone", e.target.value)}
                  name="phone"
                />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Email Address</Label>
                <Input
                  value={details.email}
                  name="email"
                  onChange={(e) => handleDetails("email", e.target.value)}
                />
              </GridItem>

              {/* DOB */}
              <GridItem className="flex flex-col relative">
                <Label>Date of Birth</Label>
                <Input
                  value={dateString}
                  name="dob"
                  onChange={(e) => handleDetails("dob", e.target.value)}
                  onClick={() => {
                    setOpenDate(!openDate);
                  }}
                />
                {openDate && (
                  <DateOfBirth
                    user={details}
                    changeDob={(date) => {
                      handleDetails("dob", date);
                    }}
                  />
                )}
              </GridItem>

              <GridItem className="flex flex-col">
                <Label>Gender</Label>
                <Input
                  value={details.gender}
                  name="gender"
                  className="cap"
                  onChange={(e) => handleDetails("gender", e.target.value)}
                />
              </GridItem>
              <GridItem className="flex flex-col">
                <Label>Location</Label>
                <Input
                  value={details.location}
                  name="location"
                  className="cap"
                  onChange={(e) => handleDetails("location", e.target.value)}
                />
              </GridItem>
            </GridContainer>
            <GridItem>
              <Label>About</Label>
              <About
                value={details.bio}
                onChange={(e) => handleDetails("bio", e.target.value)}
              />
            </GridItem>
          </div>
          <div className="flex-1">
            <div className="flex ai-center justify-between mb">
              <div>
                <p className="title">Interests</p>
              </div>
              <Add onClick={open}>Add</Add>
            </div>
            <div>
              <GridContainer>
                {singleUser?.my_interests.map((interest, i) => {
                  const matchingIcon = interestIcons.find(
                    (icon) => icon.text === interest
                  );

                  if (matchingIcon) {
                    return (
                      <div className="interest flex ai-center" key={i}>
                        <div className="interest-icon">{matchingIcon.icon}</div>
                        <p>{interest}</p>
                      </div>
                    );
                  } else {
                    return null; // Handle cases where there's no matching SVG icon
                  }
                })}
              </GridContainer>
            </div>
          </div>
        </div>
        <Label>Photos</Label>
        <Overflow>
          <PhotoContainer className="flex">
            <AddPhotos allPictures={photos} setAllPictures={setPhotos} />
          </PhotoContainer>
        </Overflow>
        <ButtonContainer>
          <Discard>Discard</Discard>
          <SaveChanges>Save changes</SaveChanges>
        </ButtonContainer>
      </form>
    </Container>
  );
};

export default Profile;
