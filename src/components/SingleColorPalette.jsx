import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      level: "",
      format: "rgba"
    };
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

  changeFormat = value => {
    // The event was coming from the Navbar.jsx
    this.setState({ format: value });
  };

  render() {
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;
    const colorboxes = this._shades.map((color, index) => (
      <ColorBox
        name={color.name}
        key={color.name}
        showLink={false}
        background={color[format]}
      />
    ));
    return (
      <div className="Palette">
        <Navbar showSlider={false} handleChange={this.changeFormat} />
        <div className="Palette-colors">{colorboxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
