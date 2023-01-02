import axios from "axios";
import React, { useEffect, useState } from "react";

const api_key = process.env.REACT_APP_WEATHER_API_KEY;

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null);
  console.log("WEATHER", weather);
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${api_key}&units=metric`
      )
      .then((res) => setWeather(res.data));
  }, [country.name.common]);
  return (
    <div>
      <h4>{country.name.common}</h4>
      <p>captial {country.capital[0]}</p>
      <p>area {country.area}</p>
      <h5>languages</h5>
      <ul>
        {Object.values(country.languages).map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      <div>
        <img src={country.flags.png} alt="flag" width="200px" />
      </div>
      <div>
        <h4>Weather in {country.name.common}</h4>
        <p>temperature {weather?.main.temp} Celcius</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt="weather"
          width="200px"
        />
        <p>wind {weather?.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default CountryInfo;
