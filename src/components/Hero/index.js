import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

import byoot from "../../images/byoot.png";
import title from "../../images/title.png";
import textbg from "../../images/textbg.png";
import mint from "../../images/mntbt.png";

const Hero = () => {
  let navigate = useNavigate();
  return (
    <div className="HSuper" id="hero">
      <div className="HContainer">
        <div className="HRight">
          <img src={textbg} className="TextBgImg" />
          <div className="HRContent">
            <img src={title} className="TitleImg" />
            <p>
              The Baby Ape Social Club is a limited collection of 5,000 Baby
              Apes that reside on Dab Island, located in the heart of the
              Bermuda Triangle. Inspired by our fellow Bored Apes on the
              Ethereum chain, we are here to create the best ‘Social Club’ in
              the Solana ecosystem.
              <br />
              <br />
              Coming off our very first Dab Island bash in Bel Air, Los Angeles
              we’re about to kick things into gear as we head into Chapter 2
              where you’ll see more parties, staking, and much more. To join the
              club simply grab yourself a Baby Ape below and we’ll see you on
              Dab Island!
            </p>
          </div>
        </div>
        <div
          className="HMintBtn"
          onClick={() => {
            navigate("/mint");
          }}
        >
          <img src={mint} />
        </div>
        <div className="HLeft">
          <img src={byoot} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
