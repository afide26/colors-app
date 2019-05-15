import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid red"
  },

  secondary: {
    backgroundColor: "salmon",
    color: "white",
    padding: "5px"
  },
  "& h1": {
    fontFamily: "Times, Georgia, serif",
    color: "white",
    padding: "5px",

    "& span": {
      border: "2px solid white",
      color: "teal"
    }
  }
};

const MiniPalette = ({ classes }) => {
  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary}>
        <h1>
          Mini Palette <span>Spanned HTML</span>
        </h1>
      </section>
    </div>
  );
};

export default withStyles(styles)(MiniPalette);
