const UpcomingURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(UpcomingURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const fore = jsObject['towns']

    for (let i = 0; i < fore.length; i++) {
     

      if (jsObject.towns[i].name.includes("Preston")) {
       for (let u = 0; u <= jsObject.towns[i].events.length; u++){
        
        const up = jsObject.towns[i].events[u];
     
        upcomingevents = "upcomingevents" + u;
        document.getElementById(upcomingevents).textContent = up;
      }
    }
    }
  });