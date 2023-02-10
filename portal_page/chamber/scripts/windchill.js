let temp = parseInt(document.querySelector('#temp').textContent);
let speed = parseInt(document.querySelector('#speed').textContent);


tempF = (temp * 2) + 30;
speedM = speed / 1.609344 ;
console.log(tempF)
console.log(speedM)

if (tempF <= 50 && speedM > 3) {
    chill = Math.floor(((35.74 + (0.6215 * tempF) - (35.75 * speedM**0.16) + (0.4275 * tempF * speedM**0.16)) -30) /2);

    document.querySelector('#chill').innerHTML = 'Wind Chill: ' + chill + '°C';
    console.log(chill)
}
else {
    document.querySelector('#chill').innerHTML = 'Wind Chill: N/A' ;
}