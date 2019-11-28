var d = new Date();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekday = weekdays[d.getDay()];



if (weekday == "Wednesday") {

  var n = "Today is the middle of the work week";
  document.getElementById("banner").innerHTML = n;
} else if (weekday == "Monday"){
  var n = "Sorry the work week is just beginning";
  document.getElementById("banner").innerHTML = n;
} else if (weekday == "Friday"){
  var n = "Get ready for the weekend!!!";
  document.getElementById("banner").innerHTML = n;
}else {
  document.getElementById("banner").style.display = "none";
}