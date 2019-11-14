const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++ ) {
        let tri = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement("img");

name.textContent = towns[i].name;
motto.textContent = towns[i].motto;
yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
image.setAttribute('src', towns[i].imageurl);


tri.appendChild(name);
tri.appendChild(motto);
tri.appendChild(yearFounded);
tri.appendChild(currentPopulation);
tri.appendChild(averageRainfall);
tri.appendChild(image);

document.querySelector('div.tricities').appendChild(tri);

    }
});
  


