import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let [cityName, setCityname] = useState("");
  let [weatherData, setWeatherData] = useState(null);

  //use Effect
  useEffect(() => {
    console.log("use effect");
  }, []);

  let handleSubmitData = (event) => {
    event.preventDefault();
    // Fetch weather api using fetch api
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=6388b321ff7a4f239de125943230612&q=${cityName}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherData(data);
        setCityname("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="box1">
        <h1>Weather App</h1>

        <form onSubmit={handleSubmitData}>
          <input
            value={cityName}
            onChange={(event) => setCityname(event.target.value)}
            placeholder="City Name..."
            required
          ></input>{" "}
          <button>Submit</button>
        </form>
      </div>
      <div className="box2">
        {weatherData ? (
          <div className="box2Content">
            <h2>
              {weatherData.location.name} {weatherData.location.country}
            </h2>
            <h3>Temperature: {weatherData.current.temp_c}°C</h3>
            <h3>Humidity: {weatherData.current.humidity}%</h3>
            <h3>Wind Speed: {weatherData.current.wind_kph} kph</h3>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
}

export default App;
