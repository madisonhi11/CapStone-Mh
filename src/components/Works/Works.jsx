import React, { useContext } from "react";
import "./Works.css";
import MYSQL from "../../img/1mysql.png";
import MH from "../../img/PicOfMe.jpeg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import JS from "../../img/NODEjs.png";
 import HTML from "../../img/HTML.png";
 import REACT from "../../img/REACT.webp";
//  import MYSQL from "@iconscout/react-unicons/icons/uil-";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
           Practiced  
          </span>
          <span style={{color:"#5F8A55"}}>Subjects</span>
          <spane>
         
          </spane>

          <div
            className="blur s-blur1"
            style={{ background: "#C6F5BC" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={JS} alt="" style={{width:"158px", borderRadius:"200px"}}/>

          </div>
          <div className="w-secCircle">
        <img src={HTML} alt="" style={{width:"150px", borderRadius:"200px"}}/>

          </div>
          <div className="w-secCircle">
            <img src={MH} alt="" style={{width:"100px", borderRadius:"200px"}}/>
          </div>{" "}
          <div className="w-secCircle">
          <img src={REACT} alt="" style={{width:"150px", borderRadius:"200px"}}/>

          </div>
          <div className="w-secCircle">
          <img src={MYSQL} alt=""  style={{width:"140px", backgroundColor:"white", borderRadius:"100px"}}/>
          </div>
          
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;