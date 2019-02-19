import React, { Component } from "react";
import SearchField from "../common.js/SearchField";

class First extends Component {
  state = {
    continent: "",
    isVisible: false
  };

  getContinent = continent => {
    this.setState({ continent, isVisible: true }, () =>
      this.props.onShowCity(this.state.isVisible, this.state.continent)
    );
  };

  hideContinent = show => {
    this.setState({ isVisible: !show });
  };

  render() {
    return (
      <div className="text-center">
        <div className="step">Step 1</div>
        <div className="select">Select a continent.</div>
        <SearchField
          options="continents"
          getContinent={continent => this.getContinent(continent)}
          hideContinent={show => this.hideContinent(show)}
        />
        {this.state.isVisible ? (
          <div>
            <div className="select-bottom">You selected</div>
            <p className="step">{this.state.continent}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default First;
