import React, { Component } from "react";

class Add extends Component {
  state = {};
  render() {
    return (
      <div
        style={{ display: this.props.add ? "block" : "none" }}
        className="add"
      >
        <p className="title">Enter city name to take information</p>
        <div>
          <div className="input">
            <input type="text" placeholder="Search" />
          </div>
          <p>Cancle</p>
        </div>
      </div>
    );
  }
}

export default Add;
