const currentUR = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d3b43d505ecc99e2518a63983534d64a&units=imperial";

fetch(currentUR)
  .then((response) => response.json())
  .then((jsObject) => {

    const F = jsObject.main.temp;
    const Far = F.toFixed(0);
    document.getElementById('calgary-current-temp').textContent = Far;


    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('calgary-currentweather').textContent = desc;

    const humidity = jsObject.main.humidity;
    document.getElementById("calgary-humidity").textContent = humidity;

    const windspeed = jsObject.wind.speed;
    document.getElementById("calgary-wind").textContent = windspeed;


    var wc = 35.74 + (0.6215 * Far) - (35.75 * windspeed ** 0.16) + (0.4275 * Far * windspeed ** 0.16)
    var windchill = wc.toFixed(0);
    if (Far < 50 && windspeed > 3) {
      document.getElementById("calgary-chill").textContent = windchill + " F";
    } else {
      document.getElementById("calgary-chill").innerHTML = "N/A";
    }

  });