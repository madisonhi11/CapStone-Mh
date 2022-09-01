import React, { useContext } from "react";
import "./Intro.css";
// import Vector1 from "../../img/Vector1.png";
// import Vector2 from "../../img/Vector2.png";
// import boy from "../../img/boy.png";
import myicon from "../../img/mh1.png";
// import thumbup from "../../img/thumbup.png";
// import crown from "../../img/crown.png";
// import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";

import { themeContext } from "../../Context";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

const Intro = () => {
  // Transition
//   const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "White" : "" }}>Capstone</span>
          <span>About Me</span>
          <span style={{fontSize:"23px"}}>
          My name is Madison Rikkia Hill, I'm 19 years old, and I've worked as a coding apprentice at Road To Hire. My interests include puzzles, art, and technology. I enjoy finding solutions and making new things. My interest in technology began in high school when I enrolled in a class for website building and a game development course that used Scratch to create mini games. In addition to coding, I like doing traditional and digital art, watching movies, and partaking in way too many hobbies.
          </span>
        </div>
        {/* <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Resume</button>
        </Link> */}
        {/* social icons */}
        <div className="i-icons">
            
            <a href="https://github.com/madisonhi11"><img src={Github} alt="" /></a>
          <a href="https://www.linkedin.com/in/madisonhill1/"><img src={LinkedIn} alt="" /></a>
          
         
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={myicon} alt="" style={{
            width:500,
            borderRadius:370,
          border: '7px solid rgb(101, 178, 130)',
        
        }}/>
        {/* animation */}
        {/* <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={myicon}
          alt=""
          style={{
              width:140
          }}
          
        /> */}

        {/* <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div> */}

        {/* animation */}
        {/* <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div> */}

        <div className="blur" style={{ background: "#C2EABA" ,
            width: "50rem",  top: "-8rem",  height: "21rem"}}></div>
        <div
          className="blur"
          style={{
            background: "#C5F4E0",
            top: "17rem",
            width: "40rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;