import { Bars } from "react-loader-spinner";
import Modal from ".";

const Loading = () => {
  return (
    <Modal>
      <Bars
        height="50"
        width="50"
        color={"#b50d0d"}
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Modal>
  );
};

export default Loading;
