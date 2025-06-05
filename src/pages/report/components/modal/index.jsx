/* eslint-disable react/prop-types */
import { Loading, Modal } from "../../../../components";

import Block from "../block";
import Button from "../button";
import { MdClose } from "react-icons/md";
import { colors } from "../../../../constants";
import styled from "styled-components";
import { updateSingleReport } from "../../../../api/auth.requests";
import { useParams } from "react-router-dom";
import useReportOptions from "../../hook/useReport";

const Inner = styled.div`
  width: 382px;
  height: 427px;
  border-radius: 19.884px;
  background: ${colors.white};
  padding: 44px;
  position: relative;

  .empty {
    flex: 1;
  }

  .close {
    position: absolute;
    top: 24px;
    right: 44px;
  }

  .center {
    gap: 20px;
  }

  .title {
    color: ${colors.black};
    font-size: 25px;
    font-weight: 700;
    font-family: "Lato";
    line-height: normal;
  }

  .small {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
    font-family: "Lato";
  }

  .cancel {
    background-color: transparent;
    border: none;
    outline: none;
    color: ${colors.textColor};
    font-family: "Lato";
    font-size: 17px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 31.814px */
  }

  .report {
    color: ${colors.black};
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
  }

  &.sm-padding {
    padding: 30px 44px;
  }
`;
const SuspendUserModal = ({ close }) => {
  const { id } = useParams();

  const { reportTag, setReportTag, setSingleReport } = useReportOptions();

  const handleSuspend = async () => {
    setReportTag("loading");
    const response = await updateSingleReport(id, { suspended: true });
    close();
    setSingleReport(response.data);
  };

  switch (reportTag) {
    case "suspend":
      return (
        <Modal>
          <Inner>
            <div className="flex">
              <div className="empty"></div>
              <div className="close cursor" onClick={close}>
                <MdClose size={30} />
              </div>
            </div>
            <div className="center flex-col">
              <Block />
              <div className="title">Suspend Account</div>
              <div className="small text-center">
                This will automatically suspend reported user account for
                breaching policy
              </div>

              <div className="btn w-100">
                <Button title={"Suspend"} fill btnClick={handleSuspend} />
              </div>

              <div className="center">
                <button className="cancel" onClick={close}>
                  Cancel
                </button>
              </div>
            </div>
          </Inner>
        </Modal>
      );

    case "loading":
      return (
        <Modal>
          <Loading />
          <Inner>
            <div className="flex">
              <div className="empty"></div>
              <div className="close cursor" onClick={close}>
                <MdClose size={30} />
              </div>
            </div>
            <div className="center flex-col">
              <Block />
              <div className="title">Suspend Account</div>
              <div className="small text-center">
                This will automatically suspend reported user account for
                breaching policy
              </div>

              <div className="btn w-100">
                <Button title={"Suspend"} fill />
              </div>

              <div className="center">
                <button className="cancel" onClick={close}>
                  Cancel
                </button>
              </div>
            </div>
          </Inner>
        </Modal>
      );

    default:
      return null;
  }
};

export default SuspendUserModal;
