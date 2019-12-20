const current = "https://api.openweathermap.org/data/2.5/weather?q=vancouver,CA&APPID=d3b43d505ecc99e2518a63983534d64a&units=imperial";

fetch(current)
  .then((response) => response.json())
  .then((jsObject) => {

    const F = jsObject.main.temp;
    const Far = F.toFixed(0);
    document.getElementById('van-current-temp').textContent = Far;


    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('van-currentweather').textContent = desc;

    const humidity = jsObject.main.humidity;
    document.getElementById("van-humidity").textContent = humidity;

    const windspeed = jsObject.wind.speed;
    document.getElementById("van-wind").textContent = windspeed;


    var wc = 35.74 + (0.6215 * Far) - (35.75 * windspeed ** 0.16) + (0.4275 * Far * windspeed ** 0.16)
    var windchill = wc.toFixed(0);
    if (Far < 50 && windspeed > 3) {
      document.getElementById("van-chill").textContent = windchill + " F";
    } else {
      document.getElementById("van-chill").innerHTML = "N/A";
    }

  });