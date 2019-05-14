import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./colorHelpers";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <Palette palette={generatePalette(seedColors[4])} />}
        />
        <Route path="/palette/:id" render={() => <h1>Individual Palette</h1>} />
      </Switch>
      // <div>
      //   <Palette palette={generatePalette(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
