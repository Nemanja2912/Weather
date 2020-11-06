import React, { Component } from "react";

class Info extends Component {
  state = {};
  render() {
    return (
      <div className="info">
        <div className="title-line">
          <p className="title">Details</p>
          <p className="line"></p>
        </div>
        <div className="info-area">
          <div className="box">
            <i className="fas fa-tint"></i>
            <p className="opacity">Humidity</p>
            <p>{this.props.humidity}%</p>
          </div>
          <div className="box">
            <i className="fab fa-hotjar"></i>
            <p className="opacity">UV Index</p>
            <p>{this.props.uvi}</p>
          </div>
          <div className="box">
            <i className="fas fa-wind"></i>
            <p className="opacity">Wind speed</p>
            <p> {this.props.wind} kmh</p>
          </div>
          <div className="box">
            <i className="fas fa-eye-slash"></i>
            <p className="opacity">Visibility</p>
            <p> {this.props.visibility}</p>
          </div>
          <div className="box">
            <i className="fas fa-cloud"></i>
            <p className="opacity">Clouds</p>
            <p>{this.props.clouds}%</p>
          </div>
          <div className="box">
            <i className="fas fa-tachometer-alt"></i>
            <p className="opacity">Pressure</p>
            <p>{this.props.pressure} Pa</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
