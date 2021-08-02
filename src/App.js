import './App.css';
import axois from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [weather, setWeather] = useState(null)
  useEffect(() => {

    axois.get("http://api.weatherapi.com/v1/current.json?key=c9fd6d5b2a8b4ea5bf4200630213007&q=94015&aqi=no")
    .then(data => {
      setWeather(data.data);
      console.log(data.data);
    })
    .catch(err => console.log(err));
  }, []);
  return (
  <div>
    {weather && (
    <div>
    <h1> {weather.location.country}</h1>
    <h2> {weather.location.region}</h2>
    </div>
    )}

</div>
  );
    }

export default App;
