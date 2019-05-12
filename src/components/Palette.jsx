import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import "../styles/Palette.css";

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
        <Navbar level={level} changeLevel={this.changeLevel} />
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
