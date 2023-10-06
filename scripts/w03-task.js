/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addN1 = Number(document.querySelector('#add1').value);
    let addN2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addN1,addN2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2){
    return number1 - number2;
}

const subtractNumbers = function(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1,subtract2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */
const multiply = (number1,number2) => number1*number2;

const multiplyNumbers = () =>{
    factor1 = Number(document.querySelector('#factor1').value);
    factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1,factor2)
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



/* Open Function Use - Divide Numbers */

function divide() {
    var dividend = parseFloat(document.getElementById("dividend").value);
    var divisor = parseFloat(document.getElementById("divisor").value);
    var quotient = dividend / divisor;
    document.getElementById("quotient").value = quotient;
  }
  
  document.getElementById("divideNumbers").addEventListener("click", divide);

/* Decision Structure */

const currentDate = new Date();
let currentYear;
currentYear= currentDate.getFullYear() ;
document.getElementById('year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */
document.getElementById("array").innerHTML = numbers;
/* Output Odds Only Array */
const odds = numbers.filter(oddFunction);

function oddFunction (number){
    return number%2 !==0;
}

document.getElementById("odds").innerHTML = odds;    


/* Output Evens Only Array */
const evens = numbers.filter(evenFunction);

/* Output Sum of Org. Array */
function evenFunction (number){
    return number%2 ==0;
}

document.getElementById('evens').innerHTML = evens;   
/* Output Sum of Org. Array */
document.getElementById('sumOfArray').innerHTML=numbers.reduce((sum, number) => sum+ number)
/* Output Multiplied by 2 Array */

var multi2 = document.getElementById('multiplied').innerHTML=numbers.map( number => number*2)
/* Output Sum of Multiplied by 2 Array */

document.getElementById('sumOfMultiplied').innerHTML= multi2.reduce((sum, number) => sum+ number)

// /*function add(number1, number2){
//     return number1 + number2;
// }

// function addNumbers(){
//     let addN1 = Number(document.querySelector('#add1').value);
//     let addN2 = Number(document.querySelector('#add2').value);
//     document.querySelector('#sum').value = add(addN1,addN2);
// }
// document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// /* Function Expression - Subtract Numbers */
// const subtract = function(number1, number2){
//     return number1 - number2;
// }

// const subtractNumbers = function(){
//     let subtract1 = Number(document.querySelector('#subtract1').value);
//     let subtract2 = Number(document.querySelector('#subtract2').value);
//     document.querySelector('#difference').value = subtract(subtract1,subtract2);
// }

// document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


// /* Arrow Function - Multiply Numbers */
// const multiply = (number1,number2) => number1*number2;

// const multiplyNumbers = () =>{
//     factor1 = Number(document.querySelector('#factor1').value);
//     factor2 = Number(document.querySelector('#factor2').value);

//     document.querySelector('#product').value = multiply(factor1,factor2)
// }
// document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);



// /* Open Function Use - Divide Numbers */

// const divide = (number1,number2) => number1/number2;

// const divideNumbers = () =>{
//     dividend = Number(document.querySelector('#dividend').value);
//     divisor = Number(document.querySelector('#divisor').value);

//     document.querySelector('#qoutient').value = divide(dividend,divisor)
// }
// document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// /* Decision Structure */

// const currentDate = new Date();
// let currentYear;
// currentYear= currentDate.getFullYear() ;
// document.getElementById('year').innerHTML = currentYear;

// /* ARRAY METHODS - Functional Programming */
// /* Output Source Array */
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// /* Output Source Array */
// document.getElementById("array").innerHTML = numbers;
// /* Output Odds Only Array */
// const odds = numbers.filter(oddFunction);

// function oddFunction (number){
//     return number%2 !==0;
// }

// document.getElementById("odds").innerHTML = odds;    


// /* Output Evens Only Array */
// const evens = numbers.filter(evenFunction);

// /* Output Sum of Org. Array */
// function evenFunction (number){
//     return number%2 ==0;
// }

// document.getElementById('evens').innerHTML = evens;   
// /* Output Sum of Org. Array */
// document.getElementById('sumOfArray').innerHTML=numbers.reduce((sum, number) => sum+ number)
// /* Output Multiplied by 2 Array */

// var multi2 = document.getElementById('multiplied').innerHTML=numbers.map( number => number*2)
// /* Output Sum of Multiplied by 2 Array */

// document.getElementById('sumOfMultiplied').innerHTML= multi2.reduce((sum, number) => sum+ number)