import woman from "../assets/homeMain.png";
import mobileBlob from "../assets/mobileBlob.png";
import blobhome from "../assets/blobhome.jpg";
import Navbar from "../Component/Navbar.jsx";
import "../Styles/Home.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  const [visibleItem, setVisibleItem] = useState(0);
  const items = ["Sales", "Revenue", "Growth"];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleItem < 2) {
        setVisibleItem((prevVisibleItem) => prevVisibleItem + 1);
      } else {
        setVisibleItem(0);
      }
    }, 3000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, [items.length, visibleItem]);

  return (
    <div className="home-main" id="Home">
      <img src={mobileBlob} alt="blob" className="mobileBlob" />
      <Navbar />
      <div className="flexContainer">
        <div className="tagline-box">
          <div data-aos="fade-right">
            <h2 className="tagline">
              <span className="Cormorant">Skyrocket</span>
              Your
              <div className="animated-list">
                {items.map((item, index) => (
                  <p
                    key={index}
                    className={`item ${
                      visibleItem === index ? "visible" : "hidden"
                    }`}
                  >
                    {item}
                  </p>
                ))}
                with Us.
              </div>
            </h2>
          </div>
          <p className="subtagline">
            Email/Affiliate Marketing, SMM, software & IT infrastructure. One
            stop solution for your digital needs!
          </p>
           <a href="#NewsLetter">
            <button className="ctc">Get Started</button>
          </a>
        </div>
        <div className="images">
          <img src={woman} alt="homepage" className="home" />
        </div>
      </div>
      <img src={blobhome} alt="blob" className="blob" />
    </div>
  );
}
