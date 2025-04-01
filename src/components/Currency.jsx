import React from "react";
import woman from "../assets/images/woman-1.png";
import woman2 from "../assets/images/woman-2.png";
import Button from "./Button";
import mobile from "../assets/images/mobile-phone.png";

const Currency = () => {
  return (
    
      <section className="currency-wrapper">
        <div>
          <h6>
            Manage all your
            <br /> currencies all
            <br />
            over the world
          </h6>
          <p>
            Save up to 2times, when you send, spend and
            <br /> withdraw 50 currencies, all in one account
          </p>
          <div>
            <Button size="sd">Open an account</Button>
            <Button variant="change" size="sd">Compare Savings</Button>
        </div>
        </div>
        <div className="image-container">
          <img className="first-img" src={woman} alt="" />
          <img className="second-img" src={woman2} alt="" />
          <img className="phone" src={mobile} alt="" />
        </div>
        
      </section>

  );
};

export default Currency;
