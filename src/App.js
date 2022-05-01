import React, { Component } from "react";
import "./styles.css";
import Answer from "./components/Answer";
import Keypad from "./components/Keypad";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      answer: ""
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        answer: this.state.answer + button
      });
    }
  };

  calculate() {
    // this function helps to calculate our result when someone press ( = )
    try {
      this.setState({
        answer: (eval(this.state.answer) || "") + ""
      });
    } catch (e) {
      this.setState({
        // when something error occurs
        answer: "error"
      });
    }
  }
  reset = () => {
    this.setState({
      // function to reset the value ( keypad : C )
      answer: ""
    });
  };

  backspace = () => {
    this.setState({
      // funtion to clear the last character . (keypad: CE )
      answer: this.state.answer.slice(0, -1)
    });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center", fontSize: "3em", color: "red" }}>
          Simple Calculator
        </h1>
        <Answer answer={this.state.answer} />
        <Keypad onClick={this.onClick} />
      </div>
    );
  }
}
