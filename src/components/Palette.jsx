import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";

class Palette extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color, i) => (
      <ColorBox background={color.color} name={color.name} key={i} />
    ));
    return (
      <div className="Palette">
        {/* Navbar goes here */}
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
