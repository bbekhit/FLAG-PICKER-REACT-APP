import React, { Component } from "react";

class Third extends Component {
  onClick = e => {
    e.preventDefault();
    this.props.onEmptyFlags();
    this.props.flags.length = 0;
  };

  render() {
    let myFlags = this.props.flags
      .toLocaleString()
      .toLowerCase()
      .split(",");
    return (
      <div className="text-center">
        {this.props.flags.length > 0 ? (
          <div className="step">Selected flags:</div>
        ) : null}
        <div className="row">
          <div className="container d-flex">
            {myFlags.map((item, i) => (
              <div key={i} className="col-md-2 f32">
                <div
                  className={`${item} flag`}
                  style={{ height: "35px", width: "45px" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          {this.props.flags.length > 0 ? (
            <button className="btn btn-success mt-3" onClick={this.onClick}>
              Clear Flags
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}
export default Third;
