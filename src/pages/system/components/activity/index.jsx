// import React from "react";

import Admin from "./svg/admin";
import Item from "./svg/item";
import TabInner from "../tabinner";
import { colors } from "../../../../constants";
import styled from "styled-components";

const Inner = styled.div`
  .gap {
    gap: 14px;
    border-bottom: 1px solid #eff2f5;
    padding-bottom: 10px;
    margin-bottom: 11px;
  }
  h2 {
    color: ${colors.textColor};
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ActivityItem = styled.div`
  border-radius: 6px;
  border-bottom: 1px dashed #e4e6ef;
  padding: 18px 0;
  gap: 20px;
  .icon {
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
    background: #eff2f5;
  }

  .activity {
    color: #3f4254;
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }

  .date {
    color: #b5b5c3;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;

    span {
      color: #ce1f1f;
    }
  }

  .flex-col {
    gap: 5px;
  }

  .item {
    gap: 14px;
  }
`;

const Activity = () => {
  return (
    <TabInner>
      <Inner>
        <div className="flex ai-center gap">
          <Admin />
          <h2>Admin Activity</h2>
        </div>
        <div className="flex flex-col item">
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Logged in to account</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Created new user account</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>Abolaji</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Updated privacy policy</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>Innocent</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Viewed user account - Karina Clark</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>Nosa</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Resolved report issues - ID: 83291</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Signed out of account</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Updated favicon in settings</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">
                Deleted subscription plan - Basic Plan
              </div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">
                Edited subscription plan - Basic Plan
              </div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>Innocent</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">Created new campaign</div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>Nosa</span>
              </div>
            </div>
          </ActivityItem>
          <ActivityItem className="flex">
            <div className="icon center">
              <Item />
            </div>
            <div className="flex flex-col">
              <div className="activity">
                Deleted subscription plan - Basic Plan
              </div>
              <div className="date">
                4:23 PM, 24 Jul 2023 by <span>You</span>
              </div>
            </div>
          </ActivityItem>
        </div>
      </Inner>
    </TabInner>
  );
};

export default Activity;
