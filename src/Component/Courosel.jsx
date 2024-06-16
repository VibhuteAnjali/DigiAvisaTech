// import "../Styles/Courosel.css";
// export default function Courosel() {
//   return (
//     <div className="courosel">
//       <div className="carousel-track">
//         <div className="block">
//           <div className="margin">90+</div> <div>Email Services</div>
//         </div>
//         <div className="block">
//           <div className="margin">80+</div>
//           <div> Digital Services</div>
//         </div>
//         <div className="block">
//           <div className="margin">60+</div> <div> SEO Optimizations</div>
//         </div>
//         <div className="block">
//           <div className="margin">50+</div> <div>Social Media Marketing</div>
//         </div>
//         <div className="block">
//           <div className="margin">80+</div> <div>IT Services</div>
//         </div>
//       </div>
//     </div>
//   );
// }
import "../Styles/Courosel.css";

export default function Carousel() {
  const items = [
    { margin: "90+", text: "Email Services" },
    { margin: "80+", text: "Digital Services" },
    { margin: "60+", text: "SEO Optimizations" },
    { margin: "50+", text: "Social Media Marketing" },
    { margin: "80+", text: "IT Services" },
    // Duplicates for seamless loop
    { margin: "90+", text: "Email Services" },
    { margin: "80+", text: "Digital Services" },
    { margin: "60+", text: "SEO Optimizations" },
    { margin: "50+", text: "Social Media Marketing" },
    { margin: "80+", text: "IT Services" },
  ];

  const middleIndex = Math.floor(items.length / 2);

  return (
    <div className="carousel">
      <div className="carousel-track">
        {items.map((item, index) => (
          <div
            className={`block ${index === middleIndex ? "glow" : ""}`}
            key={index}
          >
            <div className="margin">{item.margin}</div>
            <div className="ServicesText">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
