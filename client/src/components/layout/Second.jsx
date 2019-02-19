import React, { Component } from "react";
import SearchField from "../common.js/SearchField";

class Second extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flags: [],
      continent: "",
      hideResults: true
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.continent !== state.continent) {
      return {
        continent: props.continent
      };
    }
    if (props.hideResults !== state.hideResults) {
      return {
        hideResults: props.hideResults
      };
    }
    return null;
  }

  getFlags = flags => {
    this.setState({ flags }, () => this.props.accessFlags(flags));
  };
  hideContinent = show => {};
  render() {
    return (
      <div className="text-center">
        <div className="step">Step 2</div>
        <div className="select">Now, select a country.</div>
        <SearchField
          options="cities"
          getFlags={flags => this.getFlags(flags)}
          continent={this.state.continent}
          hideResults={this.state.hideResults}
          hideContinent={show => this.hideContinent(show)}
          flags={this.props.flags}
          isResultVisible={this.props.isResultVisible}
        />
      </div>
    );
  }
}

export default Second;
