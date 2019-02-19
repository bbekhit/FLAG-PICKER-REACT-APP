import React, { Component } from "react";
import data from "../../data/data.json";

class Cities extends Component {
  state = {
    checked: []
  };

  onChange = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({ checked: newChecked }, () =>
      this.props.setFlags(newChecked)
    );
  };
  render() {
    let filteredCities = data.filter(
      item => item.continent === this.props.continent
    );
    return (
      <div>
        {this.props.hideResults
          ? filteredCities[0].countries.map((item, i) => (
              <ul key={i} style={{ margin: "0" }}>
                <li className="d-flex justify-content-start list-item">
                  <input
                    type="checkbox"
                    name={item.name}
                    value={item.flag}
                    style={{ height: "20px", width: "20px" }}
                    className="align-self-center"
                    onChange={this.onChange(item.flag)}
                    checked={this.state.checked.indexOf(item.flag) !== -1}
                  />
                  <p className="ml-2">{item.name}</p>
                </li>
              </ul>
            ))
          : null}
      </div>
    );
  }
}

export default Cities;
