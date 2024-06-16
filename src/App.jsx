import "./App.css";
import "animate.css/animate.compat.css";
import About from "./Component/About";
import Courosel from "./Component/Courosel";
import Contact from "./Component/Contact";

import Home from "./Component/Home";
import Services from "./Component/Services";
import NewsLetter from "./Component/NewsLetter";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="app">
      <Home />
      <About />
      <Courosel />
      <Services />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
