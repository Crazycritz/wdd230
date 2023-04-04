const drinks = document.getElementById("num-drinks");

let numDrinks = Number(window.localStorage.getItem("attempts"));

drinks.textContent = numDrinks;