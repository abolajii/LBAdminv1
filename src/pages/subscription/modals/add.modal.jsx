/* eslint-disable react/prop-types */
import { Input, Modal } from "../../../components";

import { MdClose } from "react-icons/md";
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Inner = styled.div`
  padding: 30px;
  border-radius: 19px;
  background: ${colors.white};
  width: 500px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${colors.black};
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
  }

  button {
    width: 30px;
    height: 30px;
  }
`;

const Body = styled.div`
  .feature {
    color: ${colors.textOne};
    font-size: 14px;
    font-weight: 400;
    /* line-height: 150%; 24px */
  }
`;

const Footer = styled.div`
  margin-top: 30px;
`;

const Label = styled.label`
  color: ${colors.textColor};
  font-size: 13px;
  font-weight: 700;
  line-height: 150%; /* 22.5px */
  margin-bottom: 7px;
  display: inline-block;
`;

const Gap = styled.div`
  display: flex;
  gap: 20px;
`;

const CheckBox = styled.input.attrs({
  type: "checkbox",
})`
  /* Hide the default checkbox appearance */
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  /* Set the dimensions of the checkbox */
  width: 19px;
  height: 19px;
  cursor: pointer;

  /* Customize the checkbox appearance */
  background-color: #f3f6f9; /* Background color for unchecked */
  border-radius: 6px;
  position: relative;

  /* Tick symbol for checked state */
  &:checked {
    background-color: #ce1f1f; /* Background color for checked */
    border-color: #ce1f1f;
  }

  &:checked::after {
    content: "\u2713"; /* Unicode character for checkmark */
    color: white; /* Color of the checkmark */
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 11px 16px;
`;

const Button = styled.button`
  border-radius: 12px;
  padding: 17px;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 31.814px */
  flex: 1;
`;

const Create = styled(Button)`
  background: linear-gradient(180deg, #e83a3a 0%, #b50d0d 100%);
  color: ${colors.white};
`;

const features = [
  {
    id: 1,
    name: "10x more matches",
  },
  {
    id: 2,
    name: "Read receipts on chats",
  },
  {
    id: 3,
    name: "10x boost every week",
  },
  {
    id: 4,
    name: "Never run out of swipes",
  },
  {
    id: 5,
    name: "Advance preference filter",
  },
  {
    id: 6,
    name: "Browse profiles",
  },
  {
    id: 7,
    name: "Remove ads",
  },
];

const AddModal = ({ close, edit }) => {
  return (
    <Modal>
      <Inner>
        <Top>
          <p>{edit ? "Edit plan" : "New plan"}</p>
          <button className="center" onClick={close}>
            <MdClose size={23} />
          </button>
        </Top>
        <Body>
          <Label>Plan name</Label>
          <Input bg />
          <Gap>
            <div className="flex-1">
              <Label>Price/month</Label>
              <Input bg />
            </div>
            <div className="flex-1">
              <Label>Discount</Label>
              <Input bg />
            </div>
          </Gap>
          <Label>Features</Label>
          <GridContainer>
            {features.map((feature) => {
              return (
                <div
                  key={feature.id}
                  className="flex-1 flex ai-center justify-between"
                >
                  <div className="feature">{feature.name}</div>
                  <CheckBox />
                </div>
              );
            })}
          </GridContainer>
        </Body>
        <Footer className="flex">
          <Button onClick={close}>Cancel</Button>
          <Create>Create</Create>
        </Footer>
      </Inner>
    </Modal>
  );
};

export default AddModal;
