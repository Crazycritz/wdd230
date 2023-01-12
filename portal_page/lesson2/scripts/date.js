let text = document.lastModified;

const date = new Date(document.lastModified)

document.getElementById('last-modified').innerHTML = 'The date and time of the document when it is last modified is : '+ document.lastModified;

let  symbol_date = new Date();

let current_year = symbol_date.getFullYear()

document.querySelector('#year').innerHTML = '&copy;' + current_year + '| Joshua Mostert | South Africa';