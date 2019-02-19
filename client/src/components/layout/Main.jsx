import React, { Component } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";

class Main extends Component {
  state = {
    isCityVisible: false,
    continent: "",
    flags: [],
    hideResults: true,
    animate1: false,
    animate2: false,
    animate3: false
  };

  componentDidMount() {
    setTimeout(
      () => this.setState({ animate1: true, animate2: true, animate3: true }),
      1000
    );
  }

  onShowCity = (isCityVisible, continent) => {
    this.setState({ isCityVisible, continent });
  };

  accessFlags = flags => {
    this.setState({ flags });
  };

  onEmptyFlags = () => {
    this.setState({ isCityVisible: false });
  };

  render() {
    return (
      <div>
        <div className="container-fluid wrapper">
          <div className="row text-center d-flex flex-column justify-content-between main-wrapper">
            <div
              className={`col mb-5 title ${
                this.state.animate1 ? "myAnimate1" : null
              }`}
            >
              Flag Picker
            </div>
            <div
              className={`col mb-5 sub-title ${
                this.state.animate2 ? "myAnimate2" : null
              }`}
            >
              This app will help you to learn flags around the world in{" "}
              <u className="text-underline">3 steps</u>
            </div>
          </div>
          <div className="row">
            <div
              className={`col-md-4 mb-5 first ${
                this.state.animate3 ? "myAnimate3" : null
              }`}
            >
              <First
                onShowCity={(isCityVisible, continent) =>
                  this.onShowCity(isCityVisible, continent)
                }
              />
            </div>
            {this.state.isCityVisible ? (
              <div className="col-md-4">
                <Second
                  continent={this.state.continent}
                  accessFlags={flags => this.accessFlags(flags)}
                  isResultVisible={this.state.isResultVisible}
                  hideResults={this.state.hideResults}
                  flags={this.state.flags}
                />
              </div>
            ) : null}
            <div className="col-md-4">
              <Third
                flags={this.state.flags}
                onEmptyFlags={(flags, hideResults) =>
                  this.onEmptyFlags(flags, hideResults)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
