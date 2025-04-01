import React from "react";
import Credit from "../assets/images/credit-card.png";
import Button from "./Button";

const Trust = () => {
  return (
    <section className="creditcard-sec">
      <h2>
        TRUSTED BY BUSI- <br />
        NESS SMALL AND <br /> LARGE
      </h2>
      <div>
        <img src={Credit} alt="" />
        <div>
          <p>
            Go global with the international business <br /> account. Pay
            employees, get paid and manage <br />
            your cash flow in multiple currencies. Join <br />
            over 300,000 businesses thriving with Vision.
          </p>
          <div>
            <Button variant="dark" size="sd">Open a business account</Button>
            <Button size="sd"> Learn more</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
