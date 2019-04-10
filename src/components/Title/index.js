import React from "react";
import "./style.css";

const Title = props => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/"><h3>Motocross Clicky Game      Don't CLick the Same Image Twice!</h3></a>
      <h5 className="ml-auto mt-2" id="counters">Score: {props.score} </h5>
  </nav>
)

export default Title;
