const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const currentHumidity = document.querySelector("#current-humidity");

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial&appid=748613bdf7f14a41dd15943cd59d19b0";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = weatherData.main.temp.toFixed(
    0
  );

  currentHumidity.textContent = weatherData.main.humidity.toFixed(0);

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = desc;
  console.log(weatherData.main.humidity);
}
