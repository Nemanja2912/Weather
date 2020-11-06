import React, { Component } from "react";

class Screen extends Component {
  state = {};
  render() {
    return (
      <div className="screen">
        <div className="left">
          <p className="big-text">Right now</p>
          <div className="temp">{this.props.temp}°</div>
          <p className="current">{this.props.desc}</p>
          <p className="location">
            <i className="fas fa-location-arrow"></i> {this.props.location}
          </p>
        </div>
        <div className="right">{this.props.icon}</div>
      </div>
    );
  }
}

export default Screen;
