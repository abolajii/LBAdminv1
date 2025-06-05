// import React from "react";

import TabInner from "../tabinner";
import { colors } from "../../../../constants";
import styled from "styled-components";

const Inner = styled.div`
  margin-top: 55px;
  max-width: 550px;

  .header {
    color: ${colors.textColor};
    font-size: 16px;
    font-weight: 700;
    line-height: normal;
    margin-top: 40px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #eff2f5;
    border-radius: 3px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
`;

const GridItem = styled.div`
  .title {
    color: ${colors.black};
    font-size: 15px;
    font-weight: 500;
    line-height: 150%; /* 22.5px */
  }
`;

const Update = styled.button`
  color: ${colors.darkColor};
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;
const Input = styled.input`
  border-radius: 15px;
  border: 1px solid #e8e6ea;
  background: ${colors.white};
  width: 100%;
  padding: 16px;
  margin-top: 10px;
`;

const ColorBox = styled.div`
  border-radius: 15px;
  border: 1px solid #e8e6ea;
  background: ${colors.white};
  width: 100%;
  padding: 9px 16px;
  display: flex;
  gap: 20px;
  margin-top: 10px;

  .line {
    width: 1px;
    height: 29px;
    flex-shrink: 0;
    background: #e8e6ea;
  }

  input {
    flex: 1;
  }
`;

const Color = styled.div`
  width: 27px;
  height: 27px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #f4f4f4;

  ${({ bg }) => {
    return (
      bg &&
      `
    background: ${bg};
    `
    );
  }}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
  border-top: 1px solid #ebedf3;
  margin-top: 30px;
  padding-bottom: 30px;
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

const Settings = () => {
  return (
    <TabInner>
      <Inner>
        <GridContainer>
          <GridItem>
            <div className="flex ai-center justify-between">
              <p className="title">Email address</p>
              <Update>Update</Update>
            </div>
            <Input value="abolajiadeajayo@gmail.com" readOnly />
          </GridItem>
          <GridItem>
            <div className="flex ai-center justify-between">
              <p className="title">Password</p>
              <Update>Update</Update>
            </div>
            <Input value="abolajiadeajayo@gmail.com" readOnly type="password" />
          </GridItem>
        </GridContainer>

        <div className="header">App theme</div>
        <GridContainer>
          <GridItem>
            <div>
              <div className="title">Primary color</div>
              <ColorBox>
                <Color bg="#CE1F1F" />
                <div className="line" />
                <input type="text" value="CE1F1F" />
              </ColorBox>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <div className="title">Texts colour</div>
              <ColorBox>
                <Color bg="#3B3A3C" />
                <div className="line" />
                <input type="text" value="3B3A3C" />
              </ColorBox>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <div className="title">Page background colour</div>
              <ColorBox>
                <Color bg="#FFFDFD" />
                <div className="line" />
                <input type="text" value="FFFDFD" />
              </ColorBox>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <div className="title">Modal background colour</div>
              <ColorBox>
                <Color bg="#FFFAFA" />
                <div className="line" />
                <input type="text" value="FFFAFA" />
              </ColorBox>
            </div>
          </GridItem>
        </GridContainer>
        <ButtonContainer>
          <Discard>Discard</Discard>
          <SaveChanges>Save changes</SaveChanges>
        </ButtonContainer>
      </Inner>
    </TabInner>
  );
};

export default Settings;
