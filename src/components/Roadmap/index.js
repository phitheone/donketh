import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Roadmap.css";

const Roadmap = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="RMSuper" id="rm">
      <div class="bg-gradient_solid">
        <div class="container">
          <div class="section-header">
            <h2>Road to Hell</h2>
          </div>
          <div class="steps">
            <div
              class="steps-container"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-offset="100"
            >
              <div class="content">
                <h2>Phase #1</h2>
                <p>
                  &#126; Website Development
                  <br />
                  &#126; Social Launch
                  <br />
                  &#126; Telegram Group
                  <br />
                  &#126; Token Launch
                  <br />
                  <br />
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">🔥</div>
            </div>
            <div
              class="steps-container"
              data-aos="fade-left"
              data-aos-easing="ease-in-out"
              data-aos-offset="100"
            >
              <div class="content">
                <h2>Phase #2</h2>
                <p>
                  &#126; Website Development
                  <br />
                  &#126; Social Launch
                  <br />
                  &#126; Telegram Group
                  <br />
                  &#126; Token Launch
                  <br />
                  <br />
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">😈</div>
            </div>
            <div
              class="steps-container"
              data-aos="fade-right"
              data-aos-easing="ease-in-out"
              data-aos-offset="100"
            >
              <div class="content">
                <h2>Phase #3</h2>
                <p>
                  &#126; Website Development
                  <br />
                  &#126; Social Launch
                  <br />
                  &#126; Telegram Group
                  <br />
                  &#126; Token Launch
                  <br />
                  <br />
                </p>
              </div>
              <i class="step-line"></i>
              <div class="date">🤘</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
