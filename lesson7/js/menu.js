function toggleMenu() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}



var d = new Date();

var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var weekday = weekdays[d.getDay()];
var day = d.getDate();
var month = months[d.getMonth()];
var year = d.getFullYear();

var n = weekday + ", " + day + " " + month + " " + year;
document.getElementById("today").innerHTML = n;


