import React, { Component } from "react";
import "./css/style.css";
import Info from "./components/Info";
import Screen from "./components/Screen";
import Details from "./components/Details";
import Add from "./components/Add";

let icon = [
  {
    id: "01d",
    icon: <i className="fas fa-sun"></i>,
    color: "linear-gradient(to bottom, #54a6dc, #71b8e0)",
  },
  {
    id: "01n",
    icon: <i className="fas fa-moon"></i>,
    color: "linear-gradient(to bottom, #17255d, #905ea1)",
  },
  {
    id: "02d",
    icon: <i className="fas fa-cloud-sun"></i>,
    color: "linear-gradient(to bottom, #5594b3, #7d99b2)",
  },
  {
    id: "02n",
    icon: <i className="fas fa-cloud-moon"></i>,
    color: "linear-gradient(to bottom, #17255d, #7d99b2)",
  },
  {
    id: "03d",
    icon: <i className="fas fa-cloud"></i>,
    color: "linear-gradient(to bottom, #5a7386, #0a0d10)",
  },
  {
    id: "03n",
    icon: <i className="fas fa-cloud"></i>,
    color: "linear-gradient(to bottom, #5a7386, #0a0d10)",
  },
  {
    id: "04d",
    icon: <i className="fab fa-cloudversify"></i>,
    color: "linear-gradient(to bottom, #5a80b9, #4268a9)",
  },
  {
    id: "04n",
    icon: <i className="fab fa-cloudversify"></i>,
    color: "linear-gradient(to bottom, #56626d, #1c3a54)",
  },
  {
    id: "09d",
    icon: <i className="fas fa-cloud-showers-heavy"></i>,
    color: "linear-gradient(to bottom, #94b2ac, #001414)",
  },
  {
    id: "09n",
    icon: <i className="fas fa-cloud-showers-heavy"></i>,
    color: "linear-gradient(to bottom, #00515a, #001e1a)",
  },
  {
    id: "10d",
    icon: <i className="fas fa-cloud-sun-rain"></i>,
    color: "linear-gradient(to bottom, #a8cfe2, #586f73)",
  },
  {
    id: "10n",
    icon: <i className="fas fa-cloud-moon-rain"></i>,
    color: "linear-gradient(to bottom, #2f0920, #0b050d)",
  },
  {
    id: "11d",
    icon: <i className="fas fa-bolt"></i>,
    color: "linear-gradient(to bottom, #7382cd, #121425)",
  },
  {
    id: "11n",
    icon: <i className="fas fa-bolt"></i>,
    color: "linear-gradient(to bottom, #414757, #0e101a)",
  },
  {
    id: "13d",
    icon: <i className="far fa-snowflake"></i>,
    color: "linear-gradient(to bottom, #cdc1c5, #2a2b2c)",
  },
  {
    id: "13n",
    icon: <i className="far fa-snowflake"></i>,
    color: "linear-gradient(to bottom, #283537, #73777a)",
  },
  {
    id: "50d",
    icon: <i className="fas fa-smog"></i>,
    color: "linear-gradient(to bottom, #b19f9f, #332e34)",
  },
  {
    id: "50n",
    icon: <i className="fas fa-smog"></i>,
    color: "linear-gradient(to bottom, #717578, #283233)",
  },
];

class App extends Component {
  state = {
    hourly: [],
    days: undefined,
    week: false,
    forecast: true,
    height: window.innerHeight,
    add: false,
    lat: "44.804",
    lon: "20.4651",
  };

  openWeek = () => {
    this.setState({
      week: true,
      forecast: false,
    });
  };

  openForecast = () => {
    this.setState({
      week: false,
      forecast: true,
    });
  };

  openAdd = () => {
    this.setState({
      add: true,
    });
  };

  closeAdd = () => {
    this.setState({
      add: false,
    });
  };

  componentDidMount() {
    let api = `https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lon}&appid=f1f477110eac415ab17fb02931098b30&units=metric`;

    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        let setData = () => {
          this.setState({
            data: data,
            temp: data.current.temp.toFixed(),
            location: data.timezone,
            desc: data.current.weather[0].main,
            icon: icon.filter((x) => x.id === data.current.weather[0].icon)[0]
              .icon,
            clouds: data.current.clouds,
            humidity: data.current.humidity,
            uvi: data.current.uvi,
            wind: data.current.wind_speed,
            visibility: data.current.visibility,
            pressure: data.current.pressure,
            hourly: data.hourly,
            days: data.daily,
            color: icon.filter((x) => x.id === data.current.weather[0].icon)[0]
              .color,
            image: "c" + data.current.weather[0].icon,
          });
        };

        setData();

        setInterval(() => {
          setData();
        }, 60000);
      });
  }

  render() {
    return (
      <div
        style={{
          height: this.state.height + "px",
        }}
        className={this.state.image + " App"}
      >
        <header>
          <p>
            <i onClick={this.openAdd} className="fas fa-plus"></i>
          </p>
          <p>Weather Forecast</p>
          <p className="right" onClick={this.openWeek}>
            <i className="fas fa-bars"></i>
          </p>
        </header>
        <Screen
          temp={this.state.temp}
          location={this.state.location}
          desc={this.state.desc}
          icon={this.state.icon}
        />
        <Info
          humidity={this.state.humidity}
          uvi={this.state.uvi}
          wind={this.state.wind}
          visibility={this.state.visibility}
          clouds={this.state.clouds}
          pressure={this.state.pressure}
        />

        <Add add={this.state.add} closeAdd={this.closeAdd} />

        <Details
          openAdd={this.openAdd}
          hours={this.state.hourly}
          week={this.state.week}
          icon={icon}
          days={this.state.days}
          openForecast={this.openForecast}
          color={this.state.color}
        />
      </div>
    );
  }
}

export default App;
