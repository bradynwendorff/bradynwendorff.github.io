
var d = new Date();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekday = weekdays[d.getDay()];



if
  (weekday == "Friday"){

var n = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
document.getElementById("banner").innerHTML = n;
  }
else
{
  document.getElementById("banner").style.display = "none";
}