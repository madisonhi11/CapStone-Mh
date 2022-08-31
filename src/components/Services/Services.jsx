import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/Idea.png";
import Glasses from "../../img/Computercode.png";
import Humble from "../../img/AScrum.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Amazing </span>
        <span style={{color:"#a5cb93"}}>Tech Skills</span>
        <spane style={{fontSize:"23px"}}>Over the course of six months, I was able to study 
        <br/>and grasp a few programming languages, frameworks,
        <br/> and use helpful tools.
        </spane>
        <a href={Resume} download>
          <button className="button s-button" style={{fontSize:"20px", padding:"5px"}}>Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#8CE6BF" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design / Wireframe"}
            detail={"Figma, Miro, Canva, Etc."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Languages / Frameworks"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express, Etc."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Agile/Scrum"}
            detail={
              "Trello, Monday, Miro, Figma, Kanban board, Slack, Etc."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "#07C586" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;