const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=d3b43d505ecc99e2518a63983534d64a";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    /*  console.log(jsObject);*/
    
    document.getElementById('current-temp').textContent = jsObject.main.temp;


  /*  const temper = jsObject.main.temp;
    //(K − 273.15) × 9/5 + 32 = °F
    const F = (temper - 273.15)*9/5+32;
    const Far =F.toFixed(2);
    document.getElementById('current-temp').textContent = Far;
*/



const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

document.querySelector('icon').appendChild('icon');

  });
  


