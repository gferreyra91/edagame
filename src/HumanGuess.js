import React, { Component } from "react";
import { goods, regulars, areDifferents, areFourDigits } from "./Controller";
import Tries from "./Tries";
import { generateRandom } from "./CpuController";
import "./App.css";

export default class HumanGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: "",
      guess: "",
      tries: [],
      status: ''
    };
    this.newGame = this.newGame.bind(this);
    this.handleCorrectChange = this.handleCorrectChange.bind(this);
    this.handleGuessChange = this.handleGuessChange.bind(this);
    this.handleGuessSend = this.handleGuessSend.bind(this);
    this.saveTry = this.saveTry.bind(this);
  }

  newGame() {
    const correct = generateRandom();
    return this.setState({ correct, tries: [], status: 'start' });
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
    if (areDifferents(guess) && areFourDigits(guess)) {
      const goodsDigits = goods(guess, correct);
      const regularsDigits = regulars(guess, correct);
      return this.saveTry(guess, goodsDigits, regularsDigits);
    }
    return alert("Número no valido, por favor ingrese uno distinto");
  }

  saveTry(guess, goodsDigits, regularsDigits) {
    const { tries } = this.state;
    let newTries = tries;
    newTries.push({ guess, goods: goodsDigits, regulars: regularsDigits });
    if (goodsDigits === 4 && regularsDigits === 0) {
      this.setState({ status: "end" });
    }
    return this.setState({ tries: newTries });
  }

  render() {
    const { tries, correct, guess, status } = this.state;
    return (
      <div className="nes-container with-title">
        <h1 className="title">Adivinador</h1>
        <div>
          <button className="nes-btn is-success" onClick={() => this.newGame()}>
            Nuevo juego
          </button>
        </div>
        <div style={{display: status === '' ? 'none' : 'block'}}>
          <div className="nes-field is-inline">
            <label for="name_field">Número a adivinar:</label>
            <input
              id="name_field"
              className="nes-input"
              type={status === "end" ? "text" : "password"}
              name="correct"
              value={correct}
              onChange={this.handleCorrectChange}
              disabled
            />
          </div>
          <div className="Tries">
            <Tries tries={tries} />
          </div>
          <div className="nes-field is-inline">
            <label>Ingrese un intento:</label>
            <input
              className="nes-input"
              type="text"
              value={guess}
              onChange={this.handleGuessChange}
            />
            <button
              className="nes-btn is-success"
              disabled={status === "end" ? true : false}
              onClick={this.handleGuessSend}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    );
  }
}
