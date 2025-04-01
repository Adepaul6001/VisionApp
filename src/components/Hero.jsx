import React from "react";
import Button from "./Button";
import world from "../assets/images/world.png";

const Hero = () => {
  return (
    <>
      <div className="hero-wrapper">
        <div>
          <h1>
            MONEY FOR HERE,
            <span className="indent1">THERE AND</span>
            <span className="indent2">EVERYWHERE</span>
          </h1>
          <p>
            170 country, 50 currencies. Get the account built to <br />
            save you money round the world
          </p>
          <div className="hero-btn"> 
            <Button size="sd">Open an account</Button>
            <Button variant="change" size="sd">Send money now</Button>
          </div>
        </div>
        <div>
          <img className="world-img"  src={world} alt="" />
      </div>
      </div>
      
    </>
  );
};

export default Hero;
