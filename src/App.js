import React from "react";
import "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: "",
      operators: ["+", "-", "*", "/"],
      isDecimalUsed: false,
      evaluated: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.isOperator = this.isOperator.bind(this);
  }

  isOperator(value) {
    return this.state.operators.some((item) => item === value);
  }

  handleClick = (e) => {
    e.preventDefault();

    if (this.state.evaluated) {
      this.setState({ values: "", evaluated: false });
    }

    const btnValue = e.target.innerText;
    switch (btnValue) {
      case "Clear":
        this.setState({ values: "", isDecimalUsed: false });
        break;
      case "=":
        var equation = this.state.values;
        var lastValue = equation[equation.length - 1];
        // If it's an operator or a decimal, remove it
        if (this.isOperator(lastValue) || lastValue === ".") {
          equation.replace(/.$/, "");
        }

        if (equation) {
          this.setState({
            values: +eval(equation).toFixed(4),
            isDecimalUsed: false,
            evaluated: true,
          });
        }
        break;
      case ".":
        if (!this.state.isDecimalUsed) {
          this.setState((prev) => ({
            values: (prev.values += btnValue),
            isDecimalUsed: true,
          }));
        }
        break;
      case "0":
        let ifValueIsAlreadyZero =
          this.state.values.slice(-1) === "0" && this.state.values.length === 1;
        if (!ifValueIsAlreadyZero) {
          this.setState((prev) => ({
            values: (prev.values += btnValue),
          }));
        }
        break;
      default:
        if (this.isOperator(btnValue)) {
          if (btnValue === "-") {
            this.setState((prev) => ({
              values: (prev.values += btnValue),
            }));
          } else {
            let str = this.state.values;
            while (this.isOperator(str.charAt(str.length - 1))) {
              str = str.slice(0, str.length - 1);
            }
            this.setState({
              values: str + btnValue,
              isDecimalUsed: false,
            });
          }
          // now decimal value can be used again
          this.setState({
            isDecimalUsed: false,
          });
        } else {
          this.setState((prev) => ({
            values: (prev.values += btnValue),
          }));
        }
    }
  };

  render() {
    return (
      <div id="calculator">
        {/* Display component */}
        <div id="display">
          <button onClick={this.handleClick} className="btn" id="clear">
            Clear
          </button>
          <div className="screen">
            {this.state.values === "" ? 0 : this.state.values}
          </div>
        </div>
        {/* Inputs component */}
        <div id="input-container">
          <button onClick={this.handleClick} className="btn" id="seven">
            7
          </button>
          <button onClick={this.handleClick} className="btn" id="eight">
            8
          </button>
          <button onClick={this.handleClick} className="btn" id="nine">
            9
          </button>
          <button onClick={this.handleClick} className="btn operator" id="add">
            +
          </button>
          <button onClick={this.handleClick} className="btn" id="four">
            4
          </button>
          <button onClick={this.handleClick} className="btn" id="five">
            5
          </button>
          <button onClick={this.handleClick} className="btn" id="six">
            6
          </button>
          <button
            onClick={this.handleClick}
            className="btn operator"
            id="subtract"
          >
            -
          </button>
          <button onClick={this.handleClick} className="btn" id="one">
            1
          </button>
          <button onClick={this.handleClick} className="btn" id="two">
            2
          </button>
          <button onClick={this.handleClick} className="btn" id="three">
            3
          </button>
          <button
            onClick={this.handleClick}
            className="btn operator"
            id="multiply"
          >
            *
          </button>

          <button onClick={this.handleClick} className="btn" id="zero">
            0
          </button>

          <button onClick={this.handleClick} className="btn" id="decimal">
            .
          </button>

          <button
            onClick={this.handleClick}
            className="btn calculate"
            id="equals"
          >
            =
          </button>
          <button
            onClick={this.handleClick}
            className="btn operator"
            id="divide"
          >
            /
          </button>
        </div>
      </div>
    );
  }
}

function App() {
  return <Calculator />;
}

export default App;
