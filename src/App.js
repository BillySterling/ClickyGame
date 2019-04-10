import React, { Component } from "react";
import MotoCard from "./components/MotoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import motocross from "./motocross.json";

class App extends Component {
  // Setting this.state.motocross to the motocross json array
  state = {
    motocross,
    idsClicked: [],
    score: 0,
    topScore: 0,
    message: "Don't Click the Same Image Twice!"
  };

  handleClick = id => {
    console.log(id)
    this.shuffleCards(this.state.motocross)
    if (this.state.idsClicked.includes(id)) {
      this.setState( {message: "YOU LOST!    Click here to replay"} )
      this.setState( {score: 0} )
      }  else if (
        this.state.score >= 14  ) {
          this.setState( {message: "YOU WON!    Click here to replay"} )}
          else {
            this.setState( {score: this.state.score +1} )
          };
    this.setState({ idsClicked: this.state.idsClicked.concat(id) });
  };

  //  The Fisher–Yates shuffle. See:  https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array and refer to ES6 version on page. 
  shuffleCards = a => {
      for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
  }

  // Map over this.state.motocross and render a motoCard component for each moto object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} message={this.state.message}/>
        {this.state.motocross.map(moto => (
          <MotoCard
            handleClick={this.handleClick}
            id={moto.id}
            key={moto.id}
            name={moto.name}
            image={moto.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
