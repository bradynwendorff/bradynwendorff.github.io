
var tempf = parseFloat(document.getElementById('temp').textContent);
var winds = parseFloat(document.getElementById('wind').textContent);

var wc = 35.74 + (0.6215 * tempf) - (35.75 * winds**0.16) + (0.4275 * tempf * winds**0.16)
var n = wc.toFixed(2);

if (tempf < 50 && winds > 3){ 
document.getElementById("chill").innerHTML = n;
}
else{
    document.getElementById("chill").innerHTML = "N/A";   
}