const url = "data.json";

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  console.table(data.prophets);
  displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let a = document.createElement("a");

    // Build the h2 content out to show the prophet's full name - finish the template string

    p1.textContent = prophet.address;
    p2.textContent = prophet.number;
    a.textContent = prophet.link;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("alt", `Portait of ${prophet.name}`);
    portrait.setAttribute("loading", "lazy");

    a.setAttribute("href", "index.html");

    // Append the section(card) with the created elements
    card.appendChild(portrait);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(a);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

getProphetData(url);

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
  // example using arrow function
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}
