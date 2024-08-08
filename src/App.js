import React from "react";
import "./App.css";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="calculator">
        {/* Display component */}
        <div id="display">
          <button id="clear" className="btn">
            Clear
          </button>
          <div className="screen"></div>
        </div>
        {/* Inputs component */}
        <div id="input-container">
          <section className="actions">
            <button id="equals" className="btn">
              =
            </button>
          </section>
          <section className="numbers">
            <button id="zero" className="btn">
              0
            </button>
            <button id="one" className="btn">
              1
            </button>
            <button id="two" className="btn">
              2
            </button>
            <button id="three" className="btn">
              3
            </button>
            <button id="four" className="btn">
              4
            </button>
            <button id="five" className="btn">
              5
            </button>
            <button id="six" className="btn">
              6
            </button>
            <button id="seven" className="btn">
              7
            </button>
            <button id="eight" className="btn">
              8
            </button>
            <button id="nine" className="btn">
              9
            </button>
            <button id="decimal" className="btn">
              .
            </button>
          </section>
          <section className="operators">
            <button id="add" className="btn">
              +
            </button>
            <button id="subtract" className="btn">
              -
            </button>
            <button id="multiply" className="btn">
              *
            </button>
            <button id="divide" className="btn">
              /
            </button>
          </section>
        </div>
      </div>
    )
  }
}

function App() {
  return <Calculator />;
}

export default App;
