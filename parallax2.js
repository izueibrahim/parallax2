
var drone = document.getElementById("drone");
var container = document.getElementById("container");
// var sky = document.getElementById("sky");
var mountain1 = document.getElementById("mountain1");
var mountain2 = document.getElementById("mountain2");
var mountain3 = document.getElementById("mountain3");
var mountain4 = document.getElementById("mountain4");
var person = document.getElementById("person");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1400 / 2) - (1400 / 2);

window.addEventListener("mousemove", onmousemove);

function onmousemove (event) {
    console.log(event.pageX);
    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    drone.style.left = mouseX - 20 + "px";
    drone.style.top = mouseY - 50 + "px";

    // sky.style.left = +mouseX * 0.02 + centerScreen + "px";
    mountain1.style.left = -mouseX * 0.03 + centerScreen + "px";
    mountain2.style.left = +mouseX * 0.06 + centerScreen + "px";
    mountain3.style.left = -mouseX * 0.09 + centerScreen + "px";
    mountain4.style.left = +mouseX * 0.12 + centerScreen + "px";
    person.style.left = -mouseX * 0.15 + centerScreen + "px";
    

}

