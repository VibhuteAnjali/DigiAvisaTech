import logo from "../assets/logo.png";
// import email from "../assets/emailfooter.png";
// import location from "../assets/locationfotter.png";
import "../Styles/Footer.css";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="logoFooter">
          <img src={logo} alt="logo" />
          <p>
            Email/Affiliate Marketing, SMM, software & IT infrastructure. One
            stop solution for your digital needs!
          </p>
        </div>
        <div className="footerLinks">
          <div>
            <a href="#Home">Home</a>
          </div>
          <div>
            <a href="#NewsLetter">NewsLetter</a>
          </div>
        </div>
        <div className="footerLinks">
          <div>
            <a href="#About">About</a>
          </div>
          <div>
            <a href="#Service">Services</a>
          </div>
        </div>
        <div className="footerLinks">
          <div>
            <a href="#About">admin@digiavisa.com</a>
          </div>
          <div>
            <a href="#Service">Undri, Pune, MH, India</a>
          </div>
        </div>
      </div>
      <p className="copyright">
        Copyright © {year} DigiAvisa Tech LLP. All Rights Reserved.
      </p>
    </div>
  );
}
