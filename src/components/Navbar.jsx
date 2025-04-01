import Button from "./Button";
import logo from "../assets/images/logo-removebg-preview.png";
import flag from "../assets/images/america-flag.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  const HandleNavLink = (e) => {
    if (e.target.tagName === "LI") {
      setToggleMenu(false);
    }
  };

  return (
    <>
      <nav>
        <div className="nav-vision">
          <svg
            width="16"
            height="20"
            viewBox="0 0 18 22"
            fill=" rgba(237, 239, 236, 1)"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10H12M9 13V7M1 10.252C1 17.939 7.918 20.639 8.887 20.98C8.96233 21.0067 9.03767 21.0067 9.113 20.98C10.084 20.65 17 18.018 17 10.253V3.304C17.0002 3.21463 16.9705 3.12777 16.9156 3.05726C16.8607 2.98676 16.7837 2.93667 16.697 2.915L9.097 1.012C9.03331 0.996081 8.96669 0.996081 8.903 1.012L1.303 2.915C1.2163 2.93667 1.13935 2.98676 1.08443 3.05726C1.02952 3.12777 0.999791 3.21463 1 3.304V10.252Z"
              stroke="#EDEFEC"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>
            {" "}
            vision keep your money safe.{" "}
            <a className="learn" href="">
              Learn more
            </a>
          </span>
        </div>
        <div className="main-nav">
          <div className="logo-ist">
            <img className="logo" src={logo} alt="" />
            <div>
              {/* <Button/> */}
              <Button variant="primary" sizes="md">
                Personal
              </Button>
              <Button variant="secondary" sizes="md">
                Business
              </Button>
            </div>
          </div>

          <ul
            onClick={HandleNavLink}
            className={`nav-menu ${ToggleMenu ? "active" : ""}`}
          >
            <Link className="link" to="/">
              <li>Home</li>
            </Link>
            <Link className="link" to="/pricing">
              <li>Pricing</li>
            </Link>
            <Link className="link" to="/pricing">
              <li>Help</li>
            </Link>
            <Link className="link" to="/pricing">
              <li>
                <img className="flag-usa" src={flag} alt="" />
                EN
              </li>
            </Link>
            <Link className="link" to="/pricing">
              <li>Log in</li>
            </Link>
            <Link className="link" to="/pricing">
              <li>Register</li>
            </Link>
          </ul>
          <div
            onClick={() => setToggleMenu(!ToggleMenu)}
            className={`hamburger-menu ${ToggleMenu ? "open" : ""}`}
          >
            <span className="ham-bar"></span>
            <span className="ham-bar"></span>
            <span className="ham-bar"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
