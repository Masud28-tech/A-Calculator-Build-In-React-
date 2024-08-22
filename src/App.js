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
  }

  handleClick = (e) => {
    e.preventDefault();
    const btnValue = e.target.innerText;
    if (this.state.evaluated) {
      this.setState({ values: "", evaluated: false });
    }

    if (btnValue === "Clear") {
      this.setState({ values: "", isDecimalUsed: false });
    } else if (btnValue === "=") {
      var equation = this.state.values;
      var lastValue = equation[equation.length - 1];
      // If it's an operator or a decimal, remove it
      if (this.state.operators.indexOf(lastValue) > -1 || lastValue === ".") {
        equation.replace(/.$/, "");
      }

      if (equation) {
        this.setState({
          values: +eval(equation).toFixed(4),
          isDecimalUsed: false,
          evaluated: true,
        });
      }
    } else if (btnValue === ".") {
      if (!this.state.isDecimalUsed) {
        this.setState((prev) => ({
          values: (prev.values += btnValue),
          isDecimalUsed: true,
        }));
      }
    } else if (btnValue === "0") {
      let ifValueIsAlreadyZero =
        this.state.values.slice(-1) === '0' && this.state.values.length === 1;
      if (!ifValueIsAlreadyZero) {
        this.setState((prev) => ({
          values: (prev.values += btnValue),
        }));
      }
    } else {
      this.setState((prev) => ({
        values: (prev.values += btnValue),
      }));

      // if new value is new operator so, decimal value can be used again
      if(this.state.operators.indexOf(btnValue) > -1){
        this.setState({isDecimalUsed: false});
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
