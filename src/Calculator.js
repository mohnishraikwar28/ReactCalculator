import React from "react";
import Calculations from "./Calculations.js";
import Display from "./Display.js";
import Button from "./Button.js";
import "./Calculator.css";

class Calculator extends React.Component {
  constructor(props) {
    super();

    this.state = {
      display: "0",
      engine: new Calculations(),
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(value) {
    this.setState({
      display: this.state.engine.calculate(value),
      
    });
  }

  render() {
    return (
      <>
      <div class="container">
        <div class="calc-body">
          <div class="calc-screen">
          <Display class="calc-operation" display={this.state.display} />
          </div>
        

        <div class="calc-button-row">
        <Button
          value={this.state.engine.clearable ? "C" : "AC"}
          className="Button WhiteButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="+/-"
          className="Button WhiteButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value="%"
          className="Button WhiteButton"
          onClick={this.handleButtonClick}
        />
        <Button
          value={"\u00F7"}
          className="Button BlueButton"
          onClick={this.handleButtonClick}
        />

        </div>

        <div class="calc-button-row">
        <Button
          value="7"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="8"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="9"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="x"
          className="Button BlueButton"
          onClick={this.handleButtonClick}
        />
        </div>

        <div class="calc-button-row">
        <Button
          value="4"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="5"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="6"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="-"
          className="Button BlueButton"
          onClick={this.handleButtonClick}
        />
        </div>

        <div class="calc-button-row">
        <Button
          value="1"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="2"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="3"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="+"
          className="Button BlueButton"
          onClick={this.handleButtonClick}
        />
        </div>

        <div class="calc-button-row">
        <Button
          value="0"
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="."
          className="Button"
          onClick={this.handleButtonClick}
        />
        <Button
          value="="
          className="Button BlueButton LargeButton"
          onClick={this.handleButtonClick}
        />
        </div>
      </div>
      </div>
      </>
    );
  }
}

export default Calculator;
