import React, { Component } from "react";
import { Link } from "react-router-dom";
class PaletteList extends Component {
  state = {};
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colours!</h1>
        {palettes.map((palette, i) => (
          <p key={palette.id}>
            <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
          </p>
        ))}
      </div>
    );
  }
}

export default PaletteList;
