import React, { Component } from "react";
import cityList from "../json/city.list.json";

let filterList = cityList;

class Add extends Component {
  state = {
    city: [],
    button: "Cancle",
    length: 0,
  };

  handleType = (e) => {
    let typeLength = e.target.value.length;

    if (typeLength > this.state.length) {
      filterList = filterList.filter((city) =>
        city.name
          .split("")
          .splice(0, e.target.value.length)
          .join("")
          .includes(e.target.value)
      );
    }

    if (typeLength === 1) {
      filterList = cityList;
    }

    if (typeLength >= 2) {
      this.setState({
        city: filterList.map((city) => (
          <p>
            {city.name}, {city.country}
          </p>
        )),
        length: typeLength,
      });
    }
  };

  render() {
    return (
      <div
        style={{ display: this.props.add ? "block" : "none" }}
        className="add"
      >
        <div className="top">
          <p className="title">Enter city name to take information</p>
          <div className="input-box">
            <div className="input">
              <input
                onInput={this.handleType}
                type="text"
                placeholder="Search"
              />
            </div>
            <p className="bold" onClick={this.props.closeAdd}>
              Cancel
            </p>
          </div>
        </div>
        <div className="add-body">
          <p>{this.state.city.length > 0 ? this.state.city : ""}</p>
        </div>
      </div>
    );
  }
}

export default Add;
