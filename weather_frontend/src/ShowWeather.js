import Weather from "./Weather";
function ShowWeather({ weatherData }) {
    if(!weatherData) return null;
    return (
        <div className="informations">
            <h2>City Name: {weatherData.name}</h2>
            <h2>Country: {weatherData.sys.country}</h2>
            <h2>Temparature: {weatherData.main.temp} Degree</h2>
            <h2>Feels Like: {weatherData.main.feels_like} Degree</h2>
            <h2>Humidity: {weatherData.main.humidity}%</h2>
            <h2>Wind Speed: {weatherData.wind.speed} Meters/Second</h2>
            <h2>Wind Degree: {weatherData.wind.deg} Degree</h2>
            <h2>Weather Description: {weatherData.weather[0].description}</h2>
        </div>
    );
}
export default ShowWeather;