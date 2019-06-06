import React from "react";
import "../styles/Palette.css";
const PaletteFooter = ({ paletteName, emoji, name }) => {
  return (
    <footer className="Palette-footer">
      {paletteName ? paletteName : name}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
