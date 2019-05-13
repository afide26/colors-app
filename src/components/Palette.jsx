import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../styles/Palette.css";

class Palette extends Component {
  state = {
    level: 500,
    format: "hex"
  };

  changeLevel = level => {
    this.setState({ level });
  };

  changeFormat = value => {
    // The event was coming from the Navbar.jsx
    this.setState({ format: value });
  };
  render() {
    const { level, format } = this.state;
    const colorBoxes = this.props.palette.colors[level].map((color, i) => (
      <ColorBox background={color[format]} name={color.name} key={i} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">
          {/* bunch of colors */}
          {colorBoxes}
        </div>
        {/* footer */}
      </div>
    );
  }
}

export default Palette;
