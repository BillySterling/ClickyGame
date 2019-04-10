import React from "react";
import "./style.css";

const MotoCard = props => (
    <div 
    className="card"
    value={props.id} 
    onClick={() => props.handleClick(props.id)}>
      <div className="cardImage">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );


export default MotoCard;
