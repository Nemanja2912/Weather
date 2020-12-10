import React, { Component } from "react";
import cityList from "../json/city.list.json";

cityList.sort((x, y) => x.name.length - y.name.length);

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
          .toUpperCase()
          .split("")
          .splice(0, e.target.value.length)
          .join("")
          .includes(e.target.value.toUpperCase())
      );
    }

    if (typeLength < this.state.length || typeLength === 0) {
      filterList = cityList;
      filterList = filterList.filter((city) =>
        city.name
          .toUpperCase()
          .split("")
          .splice(0, e.target.value.length)
          .join("")
          .includes(e.target.value.toUpperCase())
      );
    }

    if (typeLength <= 1) {
      this.setState({
        city: [],
      });
    }

    if (typeLength >= 2) {
      this.setState({
        city: filterList.slice(0, 20).map((city) => (
          <p
            onClick={(e) => {
              this.props.closeAdd();
              this.props.handleLocation(e);
              this.setState({
                city: [],
              });

              this.inputEntry.value = "";

              filterList = cityList;
            }}
          >
            <span
              name={`${city.name}, ${city.country}`}
              lon={city.coord.lon}
              lat={city.coord.lat}
              className="bold"
            >
              {city.name.split("").splice(0, e.target.value.length).join("")}
            </span>
            <span
              name={`${city.name}, ${city.country}`}
              lon={city.coord.lon}
              lat={city.coord.lat}
              className="opacity"
            >
              {city.name
                .split("")
                .splice(e.target.value.length, city.name.split("").length - 1)
                .join("")}
              , {city.country}
            </span>
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
                ref={(input) => (this.inputEntry = input)}
              />
            </div>
            <p
              className="bold cursor"
              onClick={() => {
                this.props.closeAdd();

                this.setState({
                  city: [],
                });

                this.inputEntry.value = "";

                filterList = cityList;
              }}
            >
              Cancel
            </p>
          </div>
        </div>
        <div className="add-body">
          <p className=" cursor">
            {this.state.city.length > 0 ? this.state.city : ""}
          </p>
        </div>
      </div>
    );
  }
}

export default Add;
