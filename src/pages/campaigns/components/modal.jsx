import { MdClose } from "react-icons/md";
import { Modal } from "../../../components";
// import React from "react";
import { colors } from "../../../constants";
import styled from "styled-components";

const Inner = styled.div`
  background-color: ${colors.white};
  padding: 24px 0;
  width: 500px;
  border-radius: 16px;
`;

const Header = styled.h2`
  padding: 0 15px;
  border-bottom: 1px solid #eff2f5;
  padding-bottom: 19px;
  p {
    color: #3f4254;
    font-size: 17px;
    font-weight: 800;
    line-height: normal;
  }
`;

const FormContainer = styled.div`
  padding: 20px;
`;

const Label = styled.div`
  color: ${colors.textColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 150%; /* 21px */
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  height: 55px;

  border-radius: 15px;
  background: ${colors.bgSecondary};
  padding: 0 15px;
  margin-bottom: 20px;
`;

const TextArea = styled.textarea`
  background: ${colors.bgSecondary};
  border-radius: 15px;
  width: 100%;
  height: 100px;
  border: none;
  outline: none;
  padding: 0 15px;
  resize: none;
`;

const Footer = styled.div`
  margin-top: 10px;
  padding: 15px;
  border-top: 1px solid #eff2f5;
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

// eslint-disable-next-line react/prop-types
const CreateCampaignodal = ({ close }) => {
  return (
    <Modal>
      <Inner>
        <Header className="flex ai-center justify-between">
          <div>
            <p>New campaign</p>
          </div>
          <button className="center" onClick={close}>
            <MdClose size={23} />
          </button>
        </Header>
        <FormContainer>
          <div>
            <Label>Title</Label>
            <Input />
          </div>
          <div>
            <Label>Body</Label>
            <TextArea />
          </div>
        </FormContainer>
        <Footer className="flex">
          <Button onClick={close}>Cancel</Button>
          <Create>Send</Create>
        </Footer>
      </Inner>
    </Modal>
  );
};

export default CreateCampaignodal;
