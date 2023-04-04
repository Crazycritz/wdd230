//Joshua Mostert

async function getFruitData() {
  const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";
  const response = await fetch(url);
  const data = await response.json();
  console.table(data);
  display(data);
}

const display = (fruits) => {
  let carbs = 0;
  let protein = 0;
  let fat = 0;
  let sugar = 0;
  let calories = 0;

  //fruit1
  let e = document.getElementById("fruit-select1");
  let text = e.options[e.selectedIndex].text;

  const index1 = fruits.findIndex((e) => e.name === text);
  if (index1 !== -1) {
    console.log(fruits[index1]);
  }

  fruit1carbs = fruits[index1].nutritions.carbohydrates;
  fruit1protein = fruits[index1].nutritions.protein;
  fruit1fat = fruits[index1].nutritions.fat;
  fruit1sugar = fruits[index1].nutritions.sugar;
  fruit1calories = fruits[index1].nutritions.calories;

  carbs = carbs + fruit1carbs;
  protein = protein + fruit1protein;
  fat = fat + fruit1fat;
  sugar = sugar + fruit1sugar;
  calories = calories + fruit1calories;

  //fruit 2
  let e2 = document.getElementById("fruit-select2");
  let text2 = e2.options[e2.selectedIndex].text;

  if (text2 != "Nothing") {
    const index2 = fruits.findIndex((e) => e.name === text2);
    if (index2 !== -1) {
      console.log(fruits[index2]);
    }

    fruit2carbs = fruits[index2].nutritions.carbohydrates;
    fruit2protein = fruits[index2].nutritions.protein;
    fruit2fat = fruits[index2].nutritions.fat;
    fruit2sugar = fruits[index2].nutritions.sugar;
    fruit2calories = fruits[index2].nutritions.calories;

    carbs = carbs + fruit2carbs;
    protein = protein + fruit2protein;
    fat = fat + fruit2fat;
    sugar = sugar + fruit2sugar;
    calories = calories + fruit2calories;
  }

  //fruit 3
  let e3 = document.getElementById("fruit-select3");
  let text3 = e3.options[e3.selectedIndex].text;

  if (text3 != "Nothing") {
    const index3 = fruits.findIndex((e) => e.name === text3);
    if (index3 !== -1) {
      console.log(fruits[index3]);
    }

    fruit3carbs = fruits[index3].nutritions.carbohydrates;
    fruit3protein = fruits[index3].nutritions.protein;
    fruit3fat = fruits[index3].nutritions.fat;
    fruit3sugar = fruits[index3].nutritions.sugar;
    fruit3calories = fruits[index3].nutritions.calories;

    carbs = carbs + fruit3carbs;
    protein = protein + fruit3protein;
    fat = fat + fruit3fat;
    sugar = sugar + fruit3sugar;
    calories = calories + fruit3calories;
  }

  console.log(carbs);
  console.log(protein);
  console.log(fat);
  console.log(sugar);
  console.log(calories);

  //display all info now back to user
  const cards = document.querySelector("div.cards");
  let card = document.createElement("section");

  const date = new Date();
  const current_date =
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();

  let heading1 = document.createElement("h2");
  let heading2 = document.createElement("h2");
  let fname = document.createElement("p");
  let email = document.createElement("p");
  let phone = document.createElement("p");
  let option1 = document.createElement("p");
  let option2 = document.createElement("p");
  let option3 = document.createElement("p");
  let desc = document.createElement("p");
  let order = document.createElement("p");

  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let p3 = document.createElement("p");
  let p4 = document.createElement("p");
  let p5 = document.createElement("p");

  // Build the h2 content out to show the prophet's full name - finish the template string

  p1.textContent = "Total carbohydrates: " + carbs + "g";
  p2.textContent = "Total protein: " + protein + "g";
  p3.textContent = "Total fat: " + fat + "g";
  p4.textContent = "Total sugar: " + sugar + "g";
  p5.textContent = "Total calories: " + calories;

  heading1.textContent =
    "Thanks for filling out the form for your drink, below is the output of the info you entered:";
  fname.textContent =
    "Your firstname: " + document.querySelector("#fname").value;
  email.textContent = "Your email: " + document.querySelector("#email").value;
  phone.textContent = "Your number: " + document.querySelector("#phone").value;
  option1.textContent = "Option 1: " + text;
  option2.textContent = "Option 2: " + text2;
  option3.textContent = "Option 3: " + text3;
  desc.textContent =
    "Drink description: " + document.querySelector("#desc").value;
  order.textContent = "The date of your order: " + current_date;

  heading2.textContent =
    "The total nutrients and calories for your ordered drink are: ";

  // Append the section(card) with the created elements
  card.appendChild(heading1);
  card.appendChild(fname);
  card.appendChild(email);
  card.appendChild(phone);
  card.appendChild(option1);
  card.appendChild(option2);
  card.appendChild(option3);
  card.appendChild(desc);
  card.appendChild(order);

  card.appendChild(heading2);
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(p4);
  card.appendChild(p5);
  cards.appendChild(card);

  document.getElementById("form").style.display = "none";
  document.getElementById("button").style.display = "none";

  let attempts = localStorage.getItem("attempts");
  localStorage.setItem("attempts",++attempts);
  console.log(attempts);
  

  
};

document.querySelector("#button").addEventListener("click", getFruitData);
