import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

class Display extends React.Component {
  constructor(props) {
    super();

    this.state = { display: props.display, width: window.width };

    this.divRef = React.createRef();
    this.spanRef = React.createRef();

    this.previousWidth = window.width;
    console.log(this.previousWidth);
  }


  render() {
    return (
      <div ref={this.divRef} className="Display">
      
        <span ref={this.spanRef} className="DisplaySpan">
          {this.props.display}
        </span>
      </div>
    );
  }

  componentDidUpdate() {
    let divWidth = this.divRef.current.clientWidth;
    this.previousWidth = divWidth;
  }
}

Display.propTypes = {
  display: PropTypes.string,
};

export default Display;
