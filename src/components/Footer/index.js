import React from "react";
import "./Footer.css";

import head from "../../images/head.png";
import title from "../../images/titlew.png";
import twitter from "../../images/twitter.svg";

const Footer = () => {
  return (
    <div className="FSuper">
      <div className="FContainer">
        <img src={head} />
        <div className="FTrick">
          <div className="FContent">
            <img src={title} />
            <h2>
              Quote of the Day:
              <br />
              "From p00ps to (baby) y00ts" - Some dude
            </h2>
            <p>Copyright © 2022. Made with 💩 by the p00ptopia dev team!</p>
          </div>
          {/* <div className="FSocials">
            <a href="https://web.telegram.org/k/" target="_blank">
              <img src={telegram} />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src={twitter} />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
