import { useState, useEffect } from "react";
import arrow from "../assets/arrow.png";
import woman from "../assets/newsletter.png";
import "../Styles/NewsLetter.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function NewsLetter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  async function fetchIpAddress() {
    try {
      const res = await fetch("https://api.ipify.org?format=json");
      const data = await res.json();
      setIpAddress(data.ip);
    } catch (error) {
      console.error("Failed to fetch IP address", error);
    }
  }
  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchIpAddress();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      const currentDate = getCurrentDate();
      const response = await fetch("https://backend-avisa.vercel.app/newsLetter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, date: currentDate, ip: ipAddress }),
      });
      if (response.ok) {
        setResponse("Thank you for keeping in touch!");
        setEmail("");
      } else {
        setError("Sorry there was a error. Please try again later");
      }
    } else {
      setError("Please fill the details properly!");
    }
  }
  return (
    <div className="newsLetter" id="NewsLetter">
      <div className="left">
        <p>Our News Letter</p>
        <h2>Don’t Miss Our Daily Updates!</h2>
        <div className="newsl">
          <div>
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              placeholder="Enter your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>
              <img src={arrow} alt="arrow" onClick={handleSubmit}/>
            </button>
            {error && <p>{error}</p>}
            {response && <p>{response}</p>}
          </div>
        </div>
      </div>
      <div className="right">
        <divs data-aos="fade-left">
          <img src={woman} alt="woman"/>
        </divs>
      </div>
    </div>
  );
}
