import React from "react";
import "./style.css";

const Title = props => (
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="https://billysterling.github.io/ClickyGame/"><h3>Motocross Clicky Game      {props.message}</h3></a>
      <h3 className="ml-auto mt-2" id="counters">Score: {props.score} </h3>
  </nav>
)

export default Title;
