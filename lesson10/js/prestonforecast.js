const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=d3b43d505ecc99e2518a63983534d64a&units=imperial';

fetch(forecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const fore = jsonObject['list']
        let a = 0;
        for (let i = 0; i < fore.length; i++) {
            // console.log(jsonObject.list[4].dt_txt);

            if (jsonObject.list[i].dt_txt.includes("18:00:00")) {
                const list = (jsonObject.list[i].main.temp.toFixed(0));
                a++;
                temp = "pday" + a;
                document.getElementById(temp).textContent = list;


                const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png'; // note the concatenation
                const desc = jsonObject.list[i].weather[0].description; // note how we reference the weather array
                icon = "day" + a;
                document.getElementById(icon).setAttribute('src', imagesrc); // focus on the setAttribute() method
                document.getElementById(icon).setAttribute('alt', desc);



                var d = new Date(jsonObject.list[i].dt_txt);
                //var res = d.slice(0, 3);
                //if (d.includes("Fri")){
                //    w = "Friday";
               // }
               // console.log(w);
              


             //   var totalWords = "foo love bar very much.";

              //  var firstWord = d.replace(/ .*/,'');
                
              //  $('body').append(firstWord);




console.log(d);

            }
        }
    });