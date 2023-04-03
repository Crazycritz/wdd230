const url2 =
  "https://api.openweathermap.org/data/2.5/forecast?lat=33.15&lon=117.35&units=imperial&appid=748613bdf7f14a41dd15943cd59d19b0";

async function apiFetch2() {
  try {
    const response = await fetch(url2);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults2(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch2();

function displayResults2(weatherData2) {
  currentTemp2 = document.querySelector("#current-temp2");
  currentTemp3 = document.querySelector("#current-temp3");
  currentTemp4 = document.querySelector("#current-temp4");
  console.log(weatherData2.list[0].main.temp);
  currentTemp2.innerHTML = weatherData2.list[8].main.temp.toFixed(0);
  currentTemp3.innerHTML = weatherData2.list[17].main.temp.toFixed(0);
  currentTemp4.innerHTML = weatherData2.list[25].main.temp.toFixed(0);
  
}
