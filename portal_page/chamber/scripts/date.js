document.querySelector(
  "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// Store the selected elements that we are going to use.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener(
  "click",
  () => {
    mainnav.classList.toggle("responsive");
  },
  false
);

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});

// derive the current date using a date object

const now = new Date();
const day = now.getDay();
if (day == 1) {
  document.querySelector(".banner__close").closest(".banner").style.display =
    "block";
}
if (day == 4) {
  document.querySelector(".banner__close").closest(".banner").style.display =
    "block";
}

document.querySelector(".banner__close").addEventListener("click", function () {
  this.closest(".banner").style.display = "none";
});
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
  now
);

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);

// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldateUK}</em>`;
