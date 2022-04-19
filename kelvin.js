// The value beneath shows the temperature of today in Kelvin.
const kelvin = 0;

// The value beneath shows the value of Kelvin converted to Celcius. 
const celsius = kelvin - 12;

// The equation beneath calculates Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

// This code rounds down the value of fahrenheit.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);




let Newton = celsius * (33/100);

Newton = Math.floor(Newton);

console.log(`The temperature is ${Newton} degrees Newton.`);
