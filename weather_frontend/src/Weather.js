import { useState } from "react";
import ShowWeather from "./ShowWeather.js";
// import ShowWeather from "./ShowWeather";
function Weather() {
    const [weather, setWeather] = useState(0);
    const [city, setCity] = useState("");
    async function checkWeather() {
        try {
            const response = await fetch("http://localhost:5000/api/weather", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ city }),
            });
            const data = await response.json();
            setWeather(data);
        }
        catch (err) {
            console.log("Error Fetching Weather", err);
        }

    }
    return (
        <>
            <div className='container'>
                <div className="header">
                    <h1>Weather App</h1>
                </div>
                <div className="cityPart">
                    <label htmlFor="cityName">City </label>
                    <input type="text" name="cityName" id="cityName" value={city} placeholder='Type City' onChange={(e) => setCity(e.target.value)} required></input>
                </div>
                <div className='buttonDiv'>
                    <button type="submit" onClick={checkWeather}>Check Weather</button>
                </div>
                <ShowWeather weatherData={weather} />
                <div className='copyright'>
                    <h2>&copy; all rights reserved by Imtiaz Adar</h2>
                    <div>
                        <a href="https://www.x.com/imtiazaadar"><i className="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Weather;