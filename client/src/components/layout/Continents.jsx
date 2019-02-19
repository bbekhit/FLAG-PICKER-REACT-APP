import React, { Component } from "react";
import data from "../../data/data.json";

class Continents extends Component {
  onClick = continent => {
    this.props.click(continent);
  };

  render() {
    let filteredContinents = data.filter(item =>
      item.continent.toLowerCase().includes(this.props.inputText.toLowerCase())
    );

    return (
      <div className="search-item">
        {filteredContinents.map((item, i) => (
          <ul key={i} style={{ margin: "0" }}>
            <li
              className="list-item"
              onClick={this.onClick.bind(this, item.continent)}
            >
              {item.continent}
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Continents;
