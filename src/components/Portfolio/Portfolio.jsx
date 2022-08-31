import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Freedom from "../../img/Freedom.png";
import Hope from "../../img/Hope.png";
import ecommerce from "../../img/eccomerce.png";
import Gateway from "../../img/Gateway.png";
import Redesign from "../../img/Redesign.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      
      <span style={{color: darkMode?'white': ''}}>Tech Projects</span>
      <span style={{color:"rgb(165, 203, 147)"}}>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
            <a href="https://madisonhi11.github.io/BrochurelakeHcity/index.html">
          <img src={Gateway} alt=""  style={{width:"333px"}}/>
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://justokes1.github.io/code4Justice/index.html">
          <img src={Freedom} alt="" style={{width:"385px"}} />
       </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://hopehacks-v1.herokuapp.com/">
          <img src={Hope} alt="" style={{width:"385px"}} />
        </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://mads-tea-herb-shop.netlify.app/">
          <img src={ecommerce} alt="" style={{width:"385px"}} />
       </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://precious-tartufo-16043b.netlify.app/">
          <img src={Redesign} alt="" style={{width:"435px"}} />
        </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;