import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Tokenomics.css";

import doge from "../../images/head.png";

const Tokenomics = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="TSuper" id="toke">
      <div className="TContainer">
        <div className="TCUp">
          <h1>Tokenomics</h1>
          <h2>
            Down here we made a HELL of a Token Distribution just for you.
          </h2>
        </div>
        <div className="TCDown">
          <div
            className="TCard"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="10"
          >
            <img src={doge} />
            <h1>10%</h1>
            <h2>$DOGE Rewards</h2>
          </div>
          <div
            className="TCard"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            <img src={doge} />
            <h1>1%</h1>
            <h2>Other cool thing</h2>
          </div>
          <div
            className="TCard"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            <img src={doge} />
            <h1>2%</h1>
            <h2>Liquidity</h2>
          </div>
          <div
            className="TCard"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
            data-aos-delay="400"
          >
            <img src={doge} />
            <h1>55%</h1>
            <h2>Whatever</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
