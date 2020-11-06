import React, { Component } from "react";

let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class Details extends Component {
  state = {};
  render() {
    if (this.props.days === undefined) return "";
    let tommorow = this.props.days[1];
    let tommorowDate = new Date(this.props.days[1].dt * 1000);

    return (
      <div
        style={{
          display: this.props.week ? "block" : "none",
          backgroundImage: this.props.color,
        }}
        className="details"
      >
        <header>
          <p>
            <i onClick={this.props.openAdd} className="fas fa-plus"></i>
          </p>
          <p>Weather Forecast</p>
          <p className="right" onClick={this.props.openForecast}>
            <i className="fas fa-times"></i>
          </p>
        </header>
        <div>
          <div className="title-line">
            <p className="title">Next hours</p>
            <p className="line"></p>
          </div>

          <div className="hours">
            <div className="box">
              {this.props.hours.map((weather, i) => (
                <div key={weather.dt}>
                  <p className="time">
                    {i === 0
                      ? "Now"
                      : new Date(weather.dt * 1000).getHours() < 10
                      ? "0" + new Date(weather.dt * 1000).getHours()
                      : new Date(weather.dt * 1000).getHours()}
                    {i === 0 ? null : ":00"}
                  </p>
                  {
                    this.props.icon.filter(
                      (x) => x.id === weather.weather[0].icon
                    )[0].icon
                  }
                  <p className="temp-hours">{weather.temp.toFixed()}°</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tommorow">
            <div className="title-line">
              <p className="title">Tommorow</p>
              <p className="line"></p>
            </div>
            <div className="box">
              <div className="left">
                {
                  this.props.icon.filter(
                    (x) => x.id === tommorow.weather[0].icon
                  )[0].icon
                }
                <p>
                  {`${day[tommorowDate.getDay()]}, ${tommorowDate.getDate()} ${
                    month[tommorowDate.getMonth()]
                  }`}
                </p>
              </div>
              <div className="right">
                <div className="min">{tommorow.temp.min.toFixed()}°</div>
                <div className="max">{tommorow.temp.max.toFixed()}°</div>
              </div>
            </div>
            <div className="next-day-data">
              <div className="left">
                <div>
                  <p className="bold">Clouds</p>
                  <p>{tommorow.clouds}%</p>
                </div>
                <div>
                  <p className="bold">Humidity</p>
                  <p>{tommorow.humidity}%</p>
                </div>
              </div>
              <div className="right">
                <div>
                  <p className="bold">Wind</p>
                  <p>{tommorow.wind_speed} km/h</p>
                </div>
                <div>
                  <p className="bold">Pressure</p>
                  <p>{tommorow.pressure} hPa</p>
                </div>
              </div>
            </div>
          </div>
          <div className="next-days">
            <div className="title-line">
              <p className="title">Next days</p>
              <p className="line"></p>
            </div>

            {this.props.days.slice(0).map((weather, index) => (
              <div key={index} className="box">
                <div className="left">
                  {
                    this.props.icon.filter(
                      (x) => x.id === weather.weather[0].icon
                    )[0].icon
                  }
                  <div>
                    <p className="bold">{`${
                      day[new Date(weather.dt * 1000).getDay()]
                    }`}</p>
                  </div>
                </div>
                <div className="middle">
                  <p className="bold">{weather.weather[0].main}</p>
                </div>
                <div className="right">
                  <div>
                    <p className="opacity">{weather.temp.min.toFixed()}°</p>{" "}
                    <p>{weather.temp.max.toFixed()}°</p>
                  </div>
                  <div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
