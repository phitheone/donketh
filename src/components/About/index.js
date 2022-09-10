import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <div>this is About</div>;
};

export default About;
