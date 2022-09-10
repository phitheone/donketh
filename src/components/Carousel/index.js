import React, { useEffect, useState } from "react";
import "./Carousel.css";
import images from "./images";
import title from "../../images/carotitle.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper";

function useWindowSize() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let t = Math.floor(w / 310);
  if (t > 5) return 5;
  return t < 1 ? 1 : t;
}

const Carousel = () => {
  const sn = useWindowSize();
  return (
    <div className="CSuper" id="car">
      <div className="CtitleContainer">
        <div className="CTitle">
          <img src={title} />
        </div>
      </div>
      <div className="CSwiper">
        <Swiper
          spaceBetween={220}
          slidesPerView={sn}
          freeMode={{ enabled: true, sticky: true, momentumRatio: 0 }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          className="MySwiper"
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <div className="SImg">
                  <img src={image} alt="" height="400" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
