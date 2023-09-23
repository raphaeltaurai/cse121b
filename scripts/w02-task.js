/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Raphael Shawn Taurai'; //declaration & instatiation of constant variable called fullName
let currentYear = new Date(). // new Date().getFullYear() gets the current year in full
getFullYear(); //declaration & instatiation of current year which may change
var profilePicture = 'images/shawn.jpg' // declaration & inst of image



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name'); //storing HTML element in a const 
const foodElement = document.getElementById('food'); //storing foodElement
const yearElement = document.querySelector('#year'); // the # in the selector string to indicate the id attribute value. 🪲This syntax detail is often missed.
var imageElement = document.querySelector("picture img"); //getting the profile picture on to the web page using the css //In the code above, "picture img" is a CSS selector that targets the img element inside the picture element. This selector selects the profile image element based on its position within the HTML structure.



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`; //Assigning nameElement using innerHTML, using the textContent property instead of innerHTML in this example would not work because the expression contains HTML markup that needs to be rendered. Using textContent will render the HTML markup as text, which is not what is wanted.
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);



/* Step 5 - Array */
let favFood = ['Sadza','Pasta','Chicken', 'Chapati'];
foodElement.textContent = favFood;
let fav= 'Pizza';
favFood.push(fav);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;









