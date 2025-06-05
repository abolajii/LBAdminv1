// import React from "react";

import File from "./file";
import TabInner from "../tabinner";
import ThirdParty from "./third.party";
import { colors } from "../../../../constants";
import styled from "styled-components";

const Text = styled.p`
  color: ${colors.textOne};
  font-size: 16px;
  font-weight: 700;
  line-height: normal;
  padding-bottom: 21px;
  border-radius: 3px;
  border-bottom: 3px solid #eff2f5;
  margin-bottom: 29px;

  &.faint {
    border-bottom: 1px solid #eff2f5;
    margin-bottom: 21px;
    padding-bottom: 21px;
  }
`;

const Box = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 44px;
  .name {
    color: ${colors.textColor};
    font-size: 14px;
    font-weight: 400;
    line-height: 150%; /* 21px */
    margin-bottom: 5px;
  }

  .label {
    border-radius: 15px;
    border: 1px solid ${colors.darkBorder};
    background: ${colors.white};
    padding: 16px 20px;
    margin-bottom: 31px;
  }

  .hidden {
    visibility: hidden;
  }

  .logo {
    margin-bottom: 7px;
  }

  .upload-text {
    color: ${colors.textOne};
    font-size: 13px;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
    max-width: 80%;
  }

  .margin {
    margin-left: 30px;
  }
`;

const BoxOne = styled.div`
  flex: 1;
`;

const BoxTwo = styled.div`
  flex: 1;
`;

const ButtonContainer = styled.div`
  border-top: 1px solid #eff2f5;
  display: flex;
  justify-content: flex-end;
  padding: 16px 0; /* Add some padding for spacing */
`;

const SaveChanges = styled.button`
  padding: 12px 20px;
  background-color: ${colors.darkColor};
  border-radius: 6px;
  color: ${colors.white};
  font-size: 13px;
  font-weight: 500;
  line-height: normal;
`;

const Discard = styled(SaveChanges)`
  color: ${colors.textThree};
  background-color: ${colors.white};
`;

const AppConfig = () => {
  return (
    <TabInner>
      <Text>General</Text>
      <Box>
        <BoxOne>
          <div>
            <p className="name">App name</p>
            <div className="label">Lovebirdz</div>
          </div>
          <div>
            <p className="name logo">Main logo</p>
            <File
              text="Upload images up to 256 x 256 pixel, PNG or JPG to display in browser
                    tabs"
            />
          </div>
          <div>
            <p className="name logo">Webclip</p>
            <File
              text="Upload images up to 256 x 256 pixel webclip image. This icon
                    shows up when your website link is saved to an iPhone home
                    screen"
            />
          </div>
          <Text className="faint">Third-party integrations</Text>
          <ThirdParty />
        </BoxOne>
        <BoxTwo>
          <div className="hidden">
            <p className="name">App name</p>
            <div className="label">Lovebirdz</div>
          </div>
          <div>
            <p className="name">Fav logo</p>
            <File text="Upload a 32 x 32 pixel PNG or JPG to display in browser tabs" />
          </div>
        </BoxTwo>
      </Box>
      <ButtonContainer>
        <div>
          <Discard>Discard</Discard>
          <SaveChanges>Save changes</SaveChanges>
        </div>
      </ButtonContainer>
    </TabInner>
  );
};

export default AppConfig;
