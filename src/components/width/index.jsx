/* eslint-disable react/prop-types */
import { Container, Image, MinWidth } from "./styles";

import { images } from "../../constants";

const Width = ({ children }) => {
  return (
    <Container>
      <div className="center">
        <Image src={images.logo} alt="logo" />
      </div>
      <MinWidth>{children}</MinWidth>
    </Container>
  );
};

export default Width;
