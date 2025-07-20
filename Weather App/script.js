import config from '../config.js';

const weatherDataEl = document.getElementById("weather-data");

const inputEl = document.getElementById("input");

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = inputEl.value;
  console.log(inputValue);

  getWeatherData(inputValue);
});

async function getWeatherData(inputValue) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${config.weather_app_api_key}&units=metric`
    );

    if (!response.ok) {
      throw new Error("Network connection error");
    }
    const data = await response.json();

    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;
    const details = [
      `Feels like: ${Math.round(data.main.temp)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind Speed: ${data.wind.speed} m/s`,
    ];

    weatherDataEl.querySelector(
      ".icon"
    ).innerHTML = ` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
    weatherDataEl.querySelector(".temperature").textContent = `${temperature}℃`;
    weatherDataEl.querySelector(".description").style.fontSize =  "24px";
    weatherDataEl.querySelector(".description").textContent = description;
    weatherDataEl.querySelector(".details").innerHTML = details
      .map((detail) => `<div>${detail}</div>`)
      .join("");
  } catch (error) {
    weatherDataEl.querySelector(".icon").innerHTML = "";
    weatherDataEl.querySelector(".temperature").textContent = "";
    weatherDataEl.querySelector(".description").style.fontSize =  "15px";
    weatherDataEl.querySelector(".description").textContent =
    "Network Connection Error.Please check your internet connection";
    weatherDataEl.querySelector(".details").innerHTML = "";
  }
}
