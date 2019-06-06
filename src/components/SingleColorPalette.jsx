import React, { Component } from "react";
import ColorBox from "./ColorBox";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
  }

  gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      );
    }
    return shades.slice(1);
  };
  render() {
    const colorboxes = this._shades.map((color, index) => (
      <ColorBox
        name={color.name}
        key={color.name}
        showLink={false}
        background={color.hex}
      />
    ));
    return (
      <div className="Palette">
        <h1>Single Color Palette Component</h1>
        <div className="Palette-colors">{colorboxes}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
