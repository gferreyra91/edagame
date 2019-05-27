import React, { Component } from "react";
import { goods, regulars, areDifferents, areFourDigits } from "./Controller";
import Tries from "./Tries";
import { CpuPlayer } from "./CpuController";
import "./App.css";

export default class CpuGuess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correct: "",
      guess: "",
      tries: []
    };
    this.start = this.start.bind(this);
    this.handleCorrectChange = this.handleCorrectChange.bind(this);
    this.saveTry = this.saveTry.bind(this);
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

  async start() {
    await this.setState({tries: []})
    const { correct } = this.state;
    const Cpu = new CpuPlayer();

    if (!areDifferents(correct) || !areFourDigits(correct)) {
      return alert("Número no valido, por favor ingrese uno distinto");
    } else {
      const startCpu = () => {
        const newGuess = Cpu.newAttemp();
        const goodsDigits = goods(newGuess, correct);
        const regularsDigits = regulars(newGuess, correct);
        this.saveTry(newGuess, goodsDigits, regularsDigits);
        Cpu.saveSeedResult(newGuess, goodsDigits, regularsDigits);
        if (goodsDigits === 4) {
          return true;
        }
        return startCpu();
      };
      startCpu();
    }
  }

  handleCorrectChange(event) {
    this.setState({ correct: event.target.value });
  }

  render() {
    const { tries, correct } = this.state;
    return (
      <div className="nes-container with-title" style={{ margin: 10 }}>
        <h1 className="title">Adivinador Cpu</h1>
        <div>
          <button className="nes-btn is-success" onClick={() => this.start()}>
            Comenzar
          </button>
        </div>
        <div className="nes-field is-inline">
          <label for="name_field">Número a adivinar:</label>
          <input
            id="name_field"
            className="nes-input"
            type="text"
            name="correct"
            value={correct}
            onChange={this.handleCorrectChange}
          />
        </div>
        <div className="Tries">
          <Tries tries={tries} />
        </div>
      </div>
    );
  }
}
