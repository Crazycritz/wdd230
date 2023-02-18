const visitsDisplay = document.querySelector("#days");


let numVisits = Number(window.localStorage.getItem("visits-ls")); // Using the Number() function ensures that if the storage item does not exist, it will be converted into a zero (0) which helps on the if block condition.

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.

// store the new number of visits value

// show todays date demonstration

//84600000 equals the number of miliseconds in one day.


let today = Date.now();
let last = localStorage.getItem('last-visit');

localStorage.setItem("last-visit", today);



let daysleft = Math.round((today- last) / 84600000);
visitsDisplay.textContent = daysleft