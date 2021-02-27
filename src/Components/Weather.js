import React from "react";
import "../styles/Weather.css";
import windImg from "../images/wind-solid.svg";
import humidityIcon from "../images/tint-solid.svg";
import tempImg from "../images/term-half.svg";

const Weather = ({ weatherData }) => {
  const {
    name,
    description,
    wind,
    humidity,
    temp,
    temp_max,
    temp_min,
    country,
    icon,
    dt,
    timezone,
  } = weatherData;

  const cityTime = new Date(dt * 1000 + timezone * 1000);

  return (
    <div className="container">
      <h1>Current Weather</h1>
      <h2>
        {name}, {country}
      </h2>
      <p>
        {cityTime.toUTCString()}, {description}
      </p>
      <div className="temperature-image-flex"></div>
      <div className="temperature-box">
        <h1>
          {(temp - 273.15).toFixed(0)}
          <span style={{ fontWeight: "lighter" }}>&#8451;</span>
        </h1>
        <img
          src={`http://openweathermap.org/img/w/${icon}.png`}
          alt="Cloudy"
          width={80}
        />
      </div>

      <div className="wind-humidity-icon-flex">
        <div className="section-one-icons">
          <img src={windImg} alt="wind" width={20} />
          <p>{wind} m/s Winds</p>
        </div>
        <div className="section-two-icons">
          <img src={humidityIcon} alt="humidity" width={15} />

          <p>{humidity}% Humidity</p>
        </div>
        <div className="section-two-icons">
          <img src={tempImg} alt="termometer" width={12} />
          <p>
            {(temp_min - 273.15).toFixed(0)} <span>&#8451;</span> /{" "}
            {(temp_max - 273.15).toFixed(0)} <span>&#8451;</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
