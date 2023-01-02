import axios from "axios";
import { useEffect, useState } from "react";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  const filtered = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountries(res.data.map((c) => ({ ...c, show: false })));
    });
  }, []);

  const handleShowToggle = (countryToToggle) => {
    setCountries(
      countries.map((country) =>
        country.name.common === countryToToggle.name.common
          ? { ...country, show: !countryToToggle.show }
          : country
      )
    );
  };

  return (
    <>
      <span>find countries</span>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      {filtered.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filtered.length !== 1 ? (
        filtered.map((c) => (
          <div key={c.name.common}>
            <span>{c.name.common}</span>
            <button onClick={() => handleShowToggle(c)}>show</button>
            {c.show ? <CountryInfo country={c} /> : null}
          </div>
        ))
      ) : (
        <CountryInfo country={filtered[0]} />
      )}
    </>
  );
}

export default App;
