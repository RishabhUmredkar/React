import React, { useState } from 'react'

const WeatherStatusMessage = () => {

      const [weather, setWeather] = useState ('');

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const getWeatherMessage = () => {
    switch (weather) {
      case 'sunny':
        return "It's sunny today!";
      case 'rainy':
        return "Looks like rain!";
      case 'cloudy':
        return "Cloudy skies ahead.";
      default:
        return "Select a weather condition.";
    }
  };
  return (
    <div>
      <h2>Weather Status</h2>
      <select onChange={handleWeatherChange}>
        <option value="">Select weather</option>
        <option value="sunny">Sunny</option>
        <option value="rainy">Rainy</option>
        <option value="cloudy">Cloudy</option>
      </select>
      <p>{getWeatherMessage()}</p>
    </div>
  )
}

export default WeatherStatusMessage
