import React, { Component } from "react";
import "../styles/ColorBox.css";
class ColorBox extends Component {
  render() {
    const { background, name } = this.props;
    return (
      <div style={{ backgroundColor: background }} className="ColorBox">
        <span>{name}</span>
      </div>
    );
  }
}

export default ColorBox;
