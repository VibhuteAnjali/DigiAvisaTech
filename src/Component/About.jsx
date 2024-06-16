import "../Styles/About.css";
import team from "../assets/team.png";
import clientRelation from "../assets/clientRelationship.png";
import subscribers from "../assets/subscribers.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function About() {
  const speciality = [
    {
      title: "Client Relationship",
      info: "At AvisaTech, happy clients are our champions. We deliver exceptional value to build lasting partnerships.",
      img: clientRelation,
    },
    {
      title: "Subscribers",
      info: "Maximize your engagement with our premium double-opted data, ensuring that every click translates into meaningful interactions.",
      img: subscribers,
    },
    {
      title: "Great Team",
      info: "Seamless implementation, expert navigation. We handle the complexities, you focus on results.",
      img: team,
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="About">
      <h2 className="heading">Why Us?</h2>
      <p className="info">
        <span>Level up</span> your digital game. We&apos;re your one-stop shop
        for exceptional marketing, email, social, and IT solutions, all designed
        to fuel your success.
      </p>
      <div className="blockAbout">
        {speciality.map((item, index) => (
          <divs data-aos="fade-right" key={index} data-aos-delay={index * 500}>
            <div className="AboutBox">
              <p className="index">0{index + 1}.</p>
              <div className="aboutImg">
                <img src={item.img} alt="about" />
              </div>
              {item.title == "Great Team" ? (
                <div className="aboutInfo mt-3">
                  <h3 className="ItemTitle">{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              ) : (
                <div className="aboutInfo">
                  <h3 className="ItemTitle">{item.title}</h3>
                  <p>{item.info}</p>
                </div>
              )}
            </div>
          </divs>
        ))}
      </div>
    </div>
  );
}
