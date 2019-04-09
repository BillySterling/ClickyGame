import React, { Component } from "react";
import MotoCard from "./components/MotoCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import motocross from "./motocross.json";

class App extends Component {
  // Setting this.state.motocross to the motocross json array
  state = {
    motocross
  };

  removeMoto = id => {
    // Filter this.state.motocross for motocross with an id not equal to the id being removed
    const motocross = this.state.motocross.filter(moto => moto.id !== id);
    // Set this.state.motocross equal to the new motocross array
    this.setState({ motocross });
  };

  // Map over this.state.motocross and render a motoCard component for each moto object
  render() {
    return (
      <Wrapper>
        <Title>Motocross Funnies</Title>
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
