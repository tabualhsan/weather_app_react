import './App.css';
import axois from 'axios';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [weather, setWeather] = useState(null)
  const [input, setInput] = useState('')
  useEffect(() => {

    axois.get("http://api.weatherapi.com/v1/current.json?key=c9fd6d5b2a8b4ea5bf4200630213007&q=94015&aqi=no")
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch(err => console.log(err));
  }, []);

  const weatherInput = (e) => {
    // console.log(e.target.value);
    setInput(e.target.value);
  };

  const searchWeather = () => {

    axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}`)

    .then((data) => {
      setWeather(data.data);
    });

  };
  return (
  <div>
    {weather && (
    <div>
      <div className="search">
        <input onChange={weatherInput} type="text"/>
        <button onClick={searchWeather}>Search</button>
      </div>
    <div className= "weather">
    <h1>{weather.location.name}</h1>
    <h3>Current Temperature: {weather.current.temp_f}</h3>
    <div className="condition">
      <h3>{weather.current.condition.text}</h3>
      <img src={weather.current.condition.icon} alt="weathericon" />
    </div>
    <h1>{weather.forecast}</h1>
    <h3>{weather.location.localtime}</h3>
    <h2> {weather.location.country}</h2>
    <h2> {weather.location.region}</h2>
    </div>
    </div>
    )}

</div>
  );
    }

export default App;
