import { useEffect } from "react";
import "../Styles/Services.css";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const services = [
    {
      img: service1,
      title: "Email Marketing",
      description:
        "Craft personalized email journeys. Data drives results, daily optimization for peak customer engagement.",
    },
    {
      img: service2,
      title: "Digital Marketing",
      description:
        "Supercharge your online presence. Unleash the power of data-driven strategies for targeted engagement across every digital touchpoint.",
    },
    {
      img: service3,
      title: "Social Media Marketing",
      description:
        "Amplify your brand voice. Engage existing customers and ignite new connections across social media platforms.",
    },
  ];
  const services2 = [
    {
      img: service4,
      title: "Search Engine Optimization",
      description:
        "Dominate search results. Attract organic traffic with our data-driven SEO strategies.",
    },
    {
      img: service5,
      title: "Information Solutions & Services",
      description:
        "Streamline your operations. We craft tailored IT solutions that empower your business.",
    },
  ];
  return (
    <div id="Service">
      <h2 className="heading">Services</h2>
      <div className="servicesBlock">
        {services.map((service, index) => (
          <divs
            data-aos="fade-right"
            key={index}
            data-aos-delay={index * 500}
            className="servicesBox"
          >
            <div className="block" key={service.title}>
              <img src={service.img} alt="service" className="serviceImg" />
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </divs>
        ))}
      </div>
      <div className="servicesBlock">
        {services2.map((service, index) => (
          <divs
            data-aos="fade-right"
            key={index}
            data-aos-delay={index * 500}
            className="servicesBox"
          >
            <div className="block" key={service.title}>
              <img src={service.img} alt="service" className="serviceImg" />
              <div className="content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          </divs>
        ))}
      </div>
    </div>
  );
}
