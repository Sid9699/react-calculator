import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      result: "",
      history: "",
      disabled: false,
    };
  }

  evaluateResult = (e) => {
    this.setState((prevState) => {
      return {
        query: "",
        result: eval(prevState.query),
        history: "",
        disabled: true,
      };
    });
  };

  handleInput = (e) => {
    const temp = e.target.id;
    if (e.target.className === "operator") {
      !(this.state.result === "") &&
        this.setState((prevState) => {
          return {
            query: prevState.query.concat(temp),
            result: "",
            history: prevState.history.concat(prevState.result.concat(temp)),
          };
        });
    } else {
      this.setState((prevState) => {
        return {
          query: prevState.query.concat(temp),
          result: prevState.result.concat(temp),
        };
      });
    }
  };

  handleClick = (e) => {
    if (e.target.id === "clear") {
      this.setState({
        query: "",
        result: "",
        history: "",
        disabled: false,
      });
    } else if (e.target.id === "backspace") {
      if (!(this.state.result === "")) {
        this.setState((prevState) => {
          return {
            result: prevState.result.substring(0, prevState.result.length - 1),
          };
        });
      }
    } else {
      e.target.id === "=" ? this.evaluateResult(e) : this.handleInput(e);
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="result">
          <div className="history">
            <p className="history-value">{this.state.history}</p>
          </div>
          <div className="output">
            <p className="output-value">{this.state.result}</p>
          </div>
        </div>
        <div className="keyboard">
          <button onClick={this.handleClick} className="operator" id="clear">
            C
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="backspace"
            disabled={this.state.disabled}
          >
            CE
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="%"
            disabled={this.state.disabled}
          >
            %
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="/"
            disabled={this.state.disabled}
          >
            &#247;
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="7"
            disabled={this.state.disabled}
          >
            7
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="8"
            disabled={this.state.disabled}
          >
            8
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="9"
            disabled={this.state.disabled}
          >
            9
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="*"
            disabled={this.state.disabled}
          >
            &times;
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="4"
            disabled={this.state.disabled}
          >
            4
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="5"
            disabled={this.state.disabled}
          >
            5
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="6"
            disabled={this.state.disabled}
          >
            6
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="-"
            disabled={this.state.disabled}
          >
            -
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="1"
            disabled={this.state.disabled}
          >
            1
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="2"
            disabled={this.state.disabled}
          >
            2
          </button>
          <button
            onClick={this.handleClick}
            className="number"
            id="3"
            disabled={this.state.disabled}
          >
            3
          </button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="+"
            disabled={this.state.disabled}
          >
            +
          </button>
          <button className="empty" id="empty"></button>
          <button
            onClick={this.handleClick}
            className="number"
            id="0"
            disabled={this.state.disabled}
          >
            0
          </button>
          <button className="empty" id="empty"></button>
          <button
            onClick={this.handleClick}
            className="operator"
            id="="
            disabled={this.state.disabled}
          >
            =
          </button>
        </div>
        {/* Keyboard div */}
      </div> //Calculator div
    );
  }
}

export default App;
