import { formatExpiration, formatNextBill } from "../../../../../utils";

import Header from "../header";
// import Mastercard from "./svg/mastercard";
import Visa from "./svg/visa";
// import React from "react";
import { colors } from "../../../../../constants";
import styled from "styled-components";
import usersStore from "../../../store/index";

const Container = styled.div`
  .payment {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 700;
    line-height: 150%; /* 22.5px */
    margin-bottom: 9px;
  }

  .card-name {
    gap: 10px;
    margin-bottom: 6px;
  }

  .name {
    color: #3f4254;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px; /* 122.222% */
  }

  .primary {
    display: inline-flex;
    padding: 6px 11.5px;
    border-radius: 6px;
    background: #e8fff3;

    color: #50cd89;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: normal;
  }

  .card {
    width: 79.094px;
    height: 48px;
    flex-shrink: 0;
    border-radius: 6px;
    background: #f6f8fa;
  }

  .card-type {
    gap: 10px;
  }

  .card-details {
    color: #3f4254;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px; /* 137.5% */
  }

  .expires {
    color: #b5b5c3;
    font-size: 14px;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
  }

  .plan-name {
    color: ${colors.black};
    font-size: 16px;
    font-weight: 500;
    line-height: normal;
  }

  .price {
    color: ${colors.black};
    font-size: 17px;
    font-weight: 700;
    line-height: normal;
  }

  .month {
    color: ${colors.textColor};
    font-size: 15px;
    font-weight: 400;
    line-height: 150%; /* 22.5px */
  }

  .next-date {
    color: #757999;
    font-size: 13px;
    font-weight: 500;
    line-height: 150%; /* 19.5px */
  }
`;

const Plan = styled.div`
  display: inline-flex;
  padding: 24px 25px;
  flex-direction: column;
  gap: 10px;

  border-radius: 15px;
  background: ${colors.bgSecondary};

  margin-bottom: 24px;
`;

const PaymentMethod = styled.div`
  border-radius: 6px;
  border: 1px dashed #e4e6ef;
  background: #fff;
  height: 143px;
  padding: 27px 30px;
  margin-bottom: 24px;
`;

const Delete = styled.button`
  display: inline-flex;
  padding: 10px 16px;

  border-radius: 6px;
  background: #f5f8fa;

  color: #a1a5b7;
  font-size: 12px;
  font-weight: 700;
  line-height: normal;
`;

const FreePlan = styled.div`
  height: 100px;
  padding: 24px 25px;

  flex-direction: column;
  gap: 10px;
  width: 221px;
  border-radius: 15px;
  background: ${colors.bgSecondary};
  margin-bottom: 24px;
`;

const Subscription = () => {
  const { cardDetails } = usersStore();
  const paymentDetails = cardDetails?.default_payment_method;
  const plan = cardDetails?.items.data[0].plan;

  if (!cardDetails?.items) {
    return (
      <Container>
        <Header title="Subscription" />
        <FreePlan>
          <div className="flex ai-center justify-between">
            <div className="plan-name">Free Plan</div>
            <div className="plan-price flex justify-between">
              <div className="price">$0</div>
              <div className="month">/mth</div>
            </div>
          </div>
        </FreePlan>

        <div className="payment">Payment Methods</div>
        <PaymentMethod className="flex ai-center justify-between">
          <div>
            <div className="flex ai-center card-name">
              <p className="name">No payment method</p>
            </div>
          </div>
        </PaymentMethod>
      </Container>
    );
  }
  return (
    <Container>
      <Header title="Subscription" />
      <Plan>
        <div className="flex ai-center justify-between">
          <div className="plan-name">{plan.nickname}</div>
          <div className="plan-price flex">
            <div className="price">${plan.amount / 100}</div>
            <div className="month">/mth</div>
          </div>
        </div>
        <div className="next-date">
          Next billing date is {formatNextBill(cardDetails.current_period_end)}
        </div>
      </Plan>
      <div className="payment">Payment Methods</div>
      <PaymentMethod className="flex ai-center justify-between">
        <div>
          <div className="flex ai-center card-name">
            <p className="name">{paymentDetails.billing_details.name}</p>
            <div className="primary">Primary</div>
          </div>

          <div className="card-type flex ai-center">
            <div className="card center">
              {paymentDetails.card.brand === "visa" && <Visa />}
            </div>
            <div>
              <div className="card-details">
                Visa **** {paymentDetails.card.last4}
              </div>
              <div className="expires">
                Card expires at{" "}
                {formatExpiration(
                  paymentDetails.card.exp_month,
                  paymentDetails.card.exp_year
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Delete>Delete</Delete>
        </div>
      </PaymentMethod>
      {/* <PaymentMethod className="flex ai-center justify-between">
        <div>
          <div className="flex ai-center card-name">
            <p className="name">Oyediran Folashade</p>
          </div>

          <div className="card-type flex ai-center">
            <div className="card center">
              <Mastercard />
            </div>
            <div>
              <div className="card-details">Mastercard **** 2806</div>
              <div className="expires">Card expires at 10/24</div>
            </div>
          </div>
        </div>
        <div>
          <Delete>Delete</Delete>
        </div>
      </PaymentMethod> */}
    </Container>
  );
};

export default Subscription;
