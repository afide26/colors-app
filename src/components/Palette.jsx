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
    const { paletteName, emoji, colors } = this.props.palette;
    const colorBoxes = colors[level].map(color => (
      <ColorBox background={color[format]} name={color.name} key={color.id} />
    ));
    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <footer className="Palette-footer">
          {paletteName}
          <span className="emoji">{emoji}</span>
        </footer>
      </div>
    );
  }
}

export default Palette;
