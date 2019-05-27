import React, { Component } from "react";
import HumanGuess from "./HumanGuess";
import CpuGuess from "./CpuGuess";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      humanGuess: true
    };
  }
  render() {
    const { humanGuess } = this.state;
    return (
      <div>
        <div>
          <label>
            <input
              onClick={() => this.setState({ humanGuess: true })}
              type="radio"
              className="nes-radio"
              name="answer"
              checked={humanGuess ? true : false}
            />
            <span>Adivinar</span>
          </label>
          <label>
            <input
              onClick={() => this.setState({ humanGuess: false })}
              type="radio"
              className="nes-radio"
              name="answer"
              checked={!humanGuess ? true : false}
            />
            <span>Ser adivinado</span>
          </label>
        </div>
        <div style={{ display: humanGuess === false ? "block" : "none" }}>
          <CpuGuess />
        </div>
        <div style={{ display: humanGuess === true ? "block" : "none" }}>
          <HumanGuess />
        </div>
      </div>
    );
  }
}
