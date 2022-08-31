import React from "react";
import "./Card.css";

const Card = ({emoji, heading, detail, color}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" style={{ width:"22vh", borderRadius:"30px",border: "solid 2px rgb(101, 178, 130)"   }}/>
      <span>{heading}</span>
      <span>{detail}</span>
    
    </div>
  );
};

export default Card;