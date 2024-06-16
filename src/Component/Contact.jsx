
import "../Styles/Contact.css";
import contact from "../assets/contact.png";
import blob from "../assets/blobContact.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (name && email && message) {
      if (name.length > 5) {
        const currentDate = getCurrentDate();
        console.log(currentDate);
        try {
          const response = await fetch("https://backend-avisa.vercel.app/contactUs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, message, date: currentDate }),
          });

          if (response.ok) {
            setResponse(
              "Thank you for your time. We will get back to you shortly!"
            );
            setName("");
            setEmail("");
            setMessage("");
          } else {
            setResponse("Failed to send message.");
          }
        } catch (error) {
          setResponse("An error occurred. Please try again later.");
        }
      } else {
        setResponse(
          "Please ensure your name is longer than 5 characters and your email is valid."
        );
      }
    } else {
      setResponse("Please fill in all the details!");
    }
    console.log(response);
  }

  return (
    <div id="Contact">
      <div className="contactImg">
        <div data-aos="fade-right" className="main-contact-img">
          <h2>LET’S SCALE YOUR BRAND TOGETHER</h2>
          <img src={contact} alt="contact" />
        </div>
      </div>
      <div className="side">
        <img src={blob} alt="blob" className="blob" />
        <div className="form">
          <h3 className="heading2">GET IN TOUCH!</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            {response && <p className="response">{response}</p>}
            <button className="ctc" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
