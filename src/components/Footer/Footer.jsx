import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%"}} ></img>
      <div className="f-content">
        <span style={{fontSize:"25px", marginTop:"50px"}}>Rikkia731@gmail.com</span>
        <div className="f-icons">
<a href="https://www.linkedin.com/in/madisonhill1/">
  <LinkedIn color="Black" size={"6rem"} />
  </a>

<a href="https://github.com/madisonhi11">         
 <Gitub color="black" size={"6rem"} />
 </a>
          

         

        </div>
      </div>
    </div>
  );
};

export default Footer;