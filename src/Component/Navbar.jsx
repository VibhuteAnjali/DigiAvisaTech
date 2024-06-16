import { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setResponsive(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      {showNav && responsive ? (
        <div className="navlinks2">
          <a href="#About" className="link">
            About Us
          </a>
          <a href="#Service" className="link">
            Services
          </a>
          
          <a href="#Contact" className="link">
            Contact Us
          </a>
        </div>
      ) : (
        <div className="navlinks">
          <a href="#About" className="link">
            About Us
          </a>
          <a href="#Service" className="link">
            Services
          </a>
         
          <a href="#Contact" className="link">
            Contact Us
          </a>
        </div>
      )}

      <div className="rightcorner">
        {
          <div className="hamburger" onClick={() => setShowNav(!showNav)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
            </svg>
          </div>
        }
        <div className="actionButton">
          <button className="ctc">GET STARTED</button>
        </div>
      </div>
    </div>
  );
}
