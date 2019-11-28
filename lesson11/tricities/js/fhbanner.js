var d = new Date();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekday = weekdays[d.getDay()];



if (weekday == "Sunday" || weekday == "Monday" || weekday == "Tuesday") {

  var n = "Farmer's Winter Market is Wednesday at 11:30am";
  document.getElementById("banner").innerHTML = n;
} else if (weekday == "Wednesday") {
    var n = "Farmer's Winter Market is today at 11:30am";
    document.getElementById("banner").innerHTML = n;
  } else {
    document.getElementById("banner").style.display = "none";
  }