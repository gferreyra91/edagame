import React, { Component } from "react";
import { goods, regulars } from "./Controller";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: "",
      guess: "",
      tries: []
    };
    this.newGame = this.newGame.bind(this);
    this.handleCorrectChange = this.handleCorrectChange.bind(this);
    this.handleGuessChange = this.handleGuessChange.bind(this);
    this.handleGuessSend = this.handleGuessSend.bind(this);
    this.attempt = this.attempt.bind(this);
  }

  newGame() {
    return this.setState({ correct: "", tries: [] });
  }

  handleCorrectChange(event) {
    this.setState({ correct: event.target.value });
  }

  handleGuessChange(event) {
    this.setState({ guess: event.target.value });
  }

  handleGuessSend(event) {
    event.preventDefault();
    const { guess, correct } = this.state;
    const attemptMessage = this.attempt(guess, correct);
    let newTries = this.state.tries;
    newTries.push(attemptMessage);
    return this.setState({ tries: newTries });
  }

  attempt (guess, correct) {
    if (goods(guess, correct) === 4 && regulars(guess, correct) === 0) {
      return `${goods(guess, correct)} bien, ${regulars(guess, correct)} regular. JUEGO TERMINADO!`;  
    }
    return `${goods(guess, correct)} bien, ${regulars(guess, correct)} regular`;
  };

  render() {
    const { tries } = this.state;
    return (
      <div className="App">
        <h1>Adivinador</h1>
        <button onClick={() => this.newGame()}>Nuevo juego</button>
        <label>
          Número a adivinar:
          <input
            type="text"
            name="correct"
            value={this.state.correct}
            onChange={this.handleCorrectChange}
          />
        </label>
        <div className="Tries">
          {tries.map(value => (
            <p>{value}</p>
          ))}
        </div>
        <label>
          Ingrese un intento:
          <input
            type="text"
            value={this.state.guess}
            onChange={this.handleGuessChange}
          />
        </label>
        <button onClick={this.handleGuessSend}>Enviar</button>
      </div>
    );
  }
}
