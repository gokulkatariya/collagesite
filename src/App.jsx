import { useState } from "react";
import About from "./Components/About/About";
import AboutVideo from "./Components/AboutVideo/AboutVideo";
import Campus from "./Components/Campus/Campus";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Programs from "./Components/Programs/Programs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Title from "./Components/Title/Title";

function App() {
  const [videstate, setVideoState] = useState(false);

  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
        <About setVideoState={setVideoState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says" />
        <Testimonials />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
        <Footer />
      </div>
      <AboutVideo videstate={videstate} setVideoState={setVideoState} />
    </>
  );
}

export default App;
