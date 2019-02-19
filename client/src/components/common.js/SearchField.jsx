import React from "react";
import InputField from "./InputField";
import Continents from "../layout/Continents";
import Cities from "../layout/Cities";

class SearchField extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showResults: this.props.options,
      searchText: "",
      isResultVisible: false,
      hideResults: this.props.hideResults,
      flags: []
    };
  }

  onChange = e => {
    this.setState({ searchText: e.target.value });
  };

  onFocus = () => {
    this.setState({ isResultVisible: true }, () =>
      this.props.hideContinent(this.state.isResultVisible)
    );
  };

  click = continent => {
    this.setState({ isResultVisible: false, searchText: "" }, () =>
      this.props.getContinent(continent)
    );
  };

  setFlags = flags => {
    this.setState({ flags }, () => this.props.getFlags(flags));
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto" onClick={this.onClick}>
            <InputField
              name="book"
              type="text"
              onFocus={this.onFocus}
              onChange={this.onChange}
              value={this.state.searchText}
            />
            {this.state.isResultVisible ? (
              this.state.showResults === "continents" ? (
                <Continents
                  inputText={this.state.searchText}
                  click={continent => this.click(continent)}
                />
              ) : (
                <Cities
                  continent={this.props.continent}
                  setFlags={flags => this.setFlags(flags)}
                  hideResults={this.props.hideResults}
                />
              )
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchField;
