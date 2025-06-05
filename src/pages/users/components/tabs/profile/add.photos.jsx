import { IoMdAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";

const Card = styled.div`
  height: 270px;
  min-width: 209px;
  border-radius: 15px;
  background: #ffffff;
  border: 1px dashed #e8e6ea;
  border-radius: 15px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 876px) {
    border-radius: 11px;
    overflow: hidden;
  }
`;

const AddPicture = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  opacity: 0;
`;

const Add = styled.div`
  height: 45px;
  width: 45px;
  border-radius: 50%;
  background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
`;

const ProfilePicture = styled(Card)`
  background-color: rgba(255, 255, 255, 0.01);
  overflow: hidden;
  width: 209px;
  border: none;
  cursor: auto;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const DeleteButton = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  right: 20px;
  bottom: 25px;
  border: none;
  outline: none;
  cursor: pointer;
`;

const AddPhotos = ({ allPictures, setAllPictures }) => {
  // Rest of the code...
  const handleAddPhoto = async (id, e) => {
    const image = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (ev) => {
      let image_url = ev.target.result;

      const image_src = document.createElement("img");
      image_src.src = image_url;

      image_src.onload = async (e) => {
        const MAX_WIDTH = 800; // Define the maximum width for the compressed image
        const MAX_HEIGHT = 800; // Define the maximum height for the compressed image

        const canvas = document.createElement("canvas");
        let width = e.target.width;
        let height = e.target.height;

        // Scale down the image if its dimensions exceed the maximum width or height
        if (width > MAX_WIDTH || height > MAX_HEIGHT) {
          const aspectRatio = width / height;

          if (width > height) {
            width = MAX_WIDTH;
            height = width / aspectRatio;
          } else {
            height = MAX_HEIGHT;
            width = height * aspectRatio;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const context = canvas.getContext("2d");
        context.drawImage(e.target, 0, 0, width, height);

        const compressedImageURL = canvas.toDataURL("image/jpeg", 0.7); // Adjust the quality (0.7 in this example)

        const urlToFile = async (url) => {
          return fetch(url)
            .then((res) => res.blob())
            .then((blob) => {
              const file = new File([blob], image.name, {
                type: blob.type,
              });
              return file;
            });
        };

        const compressedFile = await urlToFile(compressedImageURL);

        // Update the `photos` array in userStore
        const updatedPhotos = [...allPictures];
        updatedPhotos[id] = {
          url: compressedImageURL,
          compressedFile,
          size: compressedFile.size,
        };

        setAllPictures((prevPictures) => {
          const updatedPictures = prevPictures.map((picture) => {
            if (picture.id === id + 1) {
              return {
                ...picture,
                url: compressedImageURL,
                compressedFile: compressedFile,
                size: compressedFile.size,
              };
            }
            return picture;
          });
          return updatedPictures;
        });
      };
    };

    reader.readAsDataURL(image);
  };

  const handleDeletePhoto = (id) => {
    // Update the `photos` array in userStore
    const updatedPhotos = [...allPictures];
    updatedPhotos[id] = { url: "", compressedFile: null, size: 0 };

    // Update the `allPictures` state for rendering
    setAllPictures((prevPictures) => {
      const updatedPictures = [...prevPictures];
      updatedPictures[id].url = "";
      return updatedPictures;
    });
  };
  return allPictures.map((each, index) => {
    return each.url !== "" ? (
      <ProfilePicture key={index}>
        <img src={each.url} alt="profile" />
        <DeleteButton
          className="center"
          onClick={() => handleDeletePhoto(index)}
        >
          <MdDelete color="#b50d0d" />
        </DeleteButton>
      </ProfilePicture>
    ) : (
      <Card className="flex ai-center jc-center" key={index}>
        <AddPicture
          type="file"
          accept="image/*"
          name="photo"
          onChange={(e) => handleAddPhoto(index, e)}
        />
        <Add className="center">
          <IoMdAdd color="#fff" size={25} />
        </Add>
      </Card>
    );
  });
};

export default AddPhotos;
