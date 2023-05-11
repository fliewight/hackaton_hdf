const URL = 'http://localhost:8000/';
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
one.onclick = function () {
	document.location.href = URL+"Berck";
}
two.onclick = function () {
	document.location.href = URL+"Beffroi";
}
three.onclick = function () {
	document.location.href = URL+"Bergues";
}
four.onclick = function () {
	document.location.href = URL+"Dunkercques";
}
five.onclick = function () {
	document.location.href = URL+"Lens";
}
six.onclick = function () {
	document.location.href = URL+"Lille";
}
seven.onclick = function () {
	document.location.href = URL+"Cambrai";
}
eight.onclick = function () {
	document.location.href = URL+"Maroilles";
}

let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

btn.onclick = function () {
	container.style.transform = "rotate(" + number + "deg)";
	number += Math.ceil(Math.random() * 1000);
}
