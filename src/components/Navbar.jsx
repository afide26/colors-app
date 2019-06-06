import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import Slider from "rc-slider";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import "rc-slider/assets/index.css";
import "../styles/Navbar.css";

class Navbar extends Component {
  state = {
    format: "hex",
    open: false
  };
  handleFormatChange = e => {
    this.setState({ format: e.target.value, open: true }, () => {
      return this.props.handleChange(this.state.format);
    });
  };

  closeSnackbar = () => {
    this.setState({ open: false });
  };
  render() {
    const { level, changeLevel, showSlider } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">colorpicker</Link>
        </div>
        {showSlider && (
          <div className="slider-container">
            <span style={{ marginRight: "5px" }}>Level:{level} </span>
            <div className="slider">
              <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
              />
            </div>
          </div>
        )}
        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem key="hex" value="hex">
              HEX - #ffffff
            </MenuItem>
            <MenuItem key="rgb" value="rgb">
              RGB - rgb(255,255,255)
            </MenuItem>
            <MenuItem key="rgba" value="rgba">
              RGBA - rgb(255,255,255,1.0)
            </MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          open={open}
          autoHideDuration={3000}
          message={
            <span id="message-id">
              Format Changed to {format.toUpperCase()}!
            </span>
          }
          ContentProps={{ "aria-describedby": "message-id" }}
          action={[
            <IconButton onClick={this.closeSnackbar}>
              <CloseIcon color="inherit" key="close" aria-label="close" />
            </IconButton>
          ]}
          onClose={this.closeSnackbar}
        />
      </header>
    );
  }
}

export default Navbar;
