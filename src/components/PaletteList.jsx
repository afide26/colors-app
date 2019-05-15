import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";
class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colours!</h1>
        {palettes.map((palette, i) => (
          <MiniPalette {...palette} key={palette.id} />
        ))}
      </div>
    );
  }
}

export default PaletteList;
