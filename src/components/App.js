
import React, { useState } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const[weatherData]=useState({temperature:25,conditions:"Sunny"})
  return (
    <div className="App">
        {/* Do not remove the main div */}
        <WeatherDisplay weather={weatherData}/>
    </div>
  )
}

export default App
