import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Weather from "./Components/Weather";
import InputCity from "./Components/InputCity";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [city, setCity] = useState("Frankfurt");
  const cityInput = useRef();
  const apiKey = "f297cd9403bf847e2b55ce53889a1405";

  useEffect(() => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        setCurrentWeather({
          name: res.data.name,
          country: res.data.sys.country,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          short_description: res.data.weather[0].main,
          wind: res.data.wind.speed,
          dt:res.data.dt,
          clouds: res.data.clouds.all,
          humidity: res.data.main.humidity,
          timezone:res.data.timezone,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
        });
      })
      .then((err) => {
        console.log(err);
      });
  }, [city]);
console.log(currentWeather)
  const submitCity = (e) => {
    e.preventDefault();
    setCity(cityInput.current.value);
    e.target.reset()
  };

  return (
    <div className="App">
      {/* <input ref={cityInput} type="text" name="" />
      <button onClick={submitCity}>Change City</button> */}
      <InputCity reference={cityInput} submitCity={submitCity} />
      <Weather weatherData={currentWeather} />
    </div>
  );
}

export default App;
