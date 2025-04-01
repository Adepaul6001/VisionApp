import React from "react";
import Button from "./Button";
import secure from "../assets/images/shield.png";

const Secure = () => {
  return (
    <div className="secure-container">
      <div className="secure-first">
        <div>
          <h5>Disappoint thieves</h5>
          <p>
            Every month, our customers trust us to move <br /> over £10 billion
            of their money. Here are some <br /> of the important ways to
            protect them.
          </p>
          <Button>How we keep your money safe</Button>
        </div>
        <div>
          <img src={secure} alt="shield image" />
        </div>
      </div>
    </div>
  );
};

export default Secure;
