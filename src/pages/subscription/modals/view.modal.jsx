/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

// import React from "react";
import { MdClose } from "react-icons/md";
import { Modal } from "../../../components";
import { SiVerizon } from "react-icons/si";
import { colors } from "../../../constants";

const Inner = styled.div`
  padding: 20px;
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
  .top {
    border-radius: 12px;
    background: ${colors.bgSecondary};
    padding: 18px;
  }

  .name {
    color: ${colors.black};
    font-size: 17px;
    font-weight: 600;
    line-height: normal;
  }

  .value {
    .top {
      padding: 0;
      margin-bottom: 6px;
    }
    .amount {
      color: ${colors.black};
      font-size: 17px;
      font-weight: 600;
      line-height: normal;
    }

    .month {
      color: ${colors.textColor};
      font-size: 15px;
      font-weight: 400;
      line-height: 150%; /* 22.5px */
    }
    button {
      display: flex;
      padding: 0px 10px;
      gap: 10px;
      border-radius: 5px;
      background: ${colors.darkColor};
      color: ${colors.white};
      text-align: right;
      font-size: 15px;
      font-weight: 400;
      line-height: 150%; /* 22.5px */
    }
  }

  .body-bottom {
    margin-top: 18px;
  }
`;

const Gap = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  margin-bottom: 12px;
  p {
    color: ${colors.black};
    font-size: 15px;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }
`;

const Selected = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #d2d2d2;
  ${({ selected }) =>
    selected &&
    css`
      background: #ce1f1f;
    `}
`;

const features = [
  {
    id: 1,
    name: "10x more matches",
    selected: true,
  },
  {
    id: 2,
    name: "Read receipts on chats",
    selected: true,
  },
  {
    id: 3,
    name: "10x boost every week",
    selected: true,
  },
  {
    id: 4,
    name: "Never run out of swipes",
    selected: true,
  },
  {
    id: 5,
    name: "Advance preference filter",
    selected: false,
  },
  {
    id: 6,
    name: "Browse profiles",
    selected: false,
  },
  {
    id: 7,
    name: "Remove ads",
    selected: false,
  },
];

const ViewModal = ({ close }) => {
  return (
    <Modal>
      <Inner>
        <Top>
          <p>View plan</p>
          <button className="center" onClick={close}>
            <MdClose size={23} />
          </button>
        </Top>
        <Body>
          <div className="top flex ai-center justify-between">
            <div className="name">Basic Plan</div>
            <div className="value">
              <div className="top flex">
                <p className="amount">$9.99</p>
                <p className="month">/mth</p>
              </div>
              <div className="bottom">
                <button>save 30%</button>
              </div>
            </div>
          </div>
          <div className="body-bottom">
            {features.map((feature) => {
              return (
                <Gap key={feature.id}>
                  <Selected className="center" selected={feature.selected}>
                    <SiVerizon size={10} color={colors.white} />
                  </Selected>
                  <p>{feature.name}</p>
                </Gap>
              );
            })}
          </div>
        </Body>
      </Inner>
    </Modal>
  );
};

export default ViewModal;
