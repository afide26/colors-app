import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

class Palette extends Component {
  state = {
    level: 500
  };

  changeLevel = level => {
    this.setState({ level });
  };
  render() {
    const { level } = this.state;
    const colorBoxes = this.props.palette.colors[level].map((color, i) => (
      <ColorBox background={color.hex} name={color.name} key={i} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
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
