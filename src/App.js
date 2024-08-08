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
          <button className="btn" id="clear">Clear</button>
          <div className="screen">1234.4</div>
        </div>
        {/* Inputs component */}
        <div id="input-container">
          <button className="btn" id="seven">7</button>
          <button className="btn" id="eight">8</button>
          <button className="btn" id="nine">9</button>
          <button className="btn operator" id="add">
            +
          </button>
          <button className="btn" id="four">4</button>
          <button className="btn" id="five">5</button>
          <button className="btn" id="six">6</button>
          <button className="btn operator" id="subtract" >
            -
          </button>
          <button className="btn" id="one">1</button>
          <button className="btn" id="two">2</button>
          <button className="btn" id="three">3</button>
          <button className="btn operator" id="multiply" >
            *
          </button>

          <button className="btn" id="zero">0</button>

          <button className="btn" id="decimal">.</button>

          <button className="btn calculate" id="equals">
            =
          </button>
          <button className="btn operator" id="divide" >
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
