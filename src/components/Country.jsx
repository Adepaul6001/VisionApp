import React from "react";
import Button from "./Button";
import portugal from "../assets/images/flag-of-portugal.png";
import france from "../assets/images/france-flag.png";
import greece from "../assets/images/greece-flag.png";
import germany from "../assets/images/germany-flag.png";

const Country = () => {
  return (
    <section className="country-sec">
      <div className="bt-cont">
        <Button size="sd">Order your card</Button>
        <Button variant="change" size="sd">
          Learn more
        </Button>
      </div>
      <div className="flag-container">
        <div className="arrow">
          <div>
            <svg
              className="arrow-svg"
              width="104"
              height="101"
              viewBox="0 0 104 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.8997 97.0068C56.9319 99.0539 53.6566 99.0539 51.6888 97.0068C49.828 95.071 49.828 92.0111 51.6888 90.0753L82.8219 57.6876C86.5428 53.8168 86.5428 47.6984 82.8219 43.8275L51.6888 11.4398C49.828 9.504 49.828 6.44414 51.6888 4.5083C53.6566 2.46123 56.9319 2.46123 58.8997 4.5083L96.6957 43.8275C100.417 47.6984 100.417 53.8168 96.6957 57.6876L58.8997 97.0068Z"
                fill="#73C93B"
              />
              <path
                d="M0.159973 51.5002C0.159973 48.3834 2.68665 45.8567 5.80345 45.8567H90.4557C93.5725 45.8567 96.0992 48.3834 96.0992 51.5002C96.0992 54.617 93.5725 57.1437 90.4557 57.1437H5.80345C2.68664 57.1437 0.159973 54.617 0.159973 51.5002Z"
                fill="#73C93B"
              />
            </svg>
          </div>
        </div>
        <div className="flags">
          <div>
            <img src={portugal} alt="" />
          </div>
          <div>
            <img src={france} alt="" />
          </div>
          <div>
            <img src={germany} alt="" />
          </div>
          <div>
            <img src={greece} alt="" />
          </div>
        </div>
      </div>
      <div className="register">
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-lock"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
            </svg>
          </span>
          <p>
            We’re registered with the <br /> Fiancial Crimes Enforcement <br />{" "}
            Network (FinCEN) in the US
          </p>
        </div>
        <div>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-key"
              viewBox="0 0 16 16"
            >
              <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
              <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
          </span>
          <p>
            We protect your details through <br /> strict standards
          </p>
        </div>
      </div>
    </section>
  );
};

export default Country;
