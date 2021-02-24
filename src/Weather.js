import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
        })
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Find your city..." className="form-control" autoFocus="on" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn-primary w-100" />
                    </div>
                </div>
            </form>
            <h1>
                {weatherData.city}
            </h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>
                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                        alt="Cloudy" className="float-left" />
                        <div className="float-left">
                            <span className="temperature">{Math.round(weatherData.temperature)}</span>
                            <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 12%
                        </li>
                        <li>
                            Humidity: {weatherData.humidity}%
                        </li>
                        <li>
                            Wind: {weatherData.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
    } else {
        let apiKey = "60127c861398555d83daebe249ae66b4";
        let city = "New York";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";
    }    
}