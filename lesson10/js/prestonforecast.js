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
                var weekday = new Array(7);
                weekday[0] = "Sunday";
                weekday[1] = "Monday";
                weekday[2] = "Tuesday";
                weekday[3] = "Wednesday";
                weekday[4] = "Thursday";
                weekday[5] = "Friday";
                weekday[6] = "Saturday";
                
                var n = weekday[d.getDay()];
                
                weekdays = "h5day" + a;
                
                
                document.getElementById(weekdays).textContent = n;
                
                
                
                
               // var n = d.getDate();
                




console.log(weekdays);

            }
        }
    });