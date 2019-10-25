"use strict";

function add() {
    var x = Number(document.getElementById('x').innerHTML);
    var y = Number(document.getElementById('y').innerHTML);

    document.getElementById('result').innerHTML = x+y;
    return false;
}

document.getElementById('go').addEventListener('click', add);