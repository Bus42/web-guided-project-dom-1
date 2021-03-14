// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

const consoleColor = "#007AAF"

// A- finding across the entire DOM
const header = document.getElementsByTagName("header")[0];
// console.log(header)
const logoTitle = document.getElementsByTagName("h1");
const firstCard = document.querySelector(".card:nth-of-type(1)");
// console.log(firstCard)
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
// console.log(imageFirstCard);
const titleFirstCard = firstCard.querySelector(".card-title");
// console.log(titleFirstCard)
const subtitleFirstCard = firstCard.querySelector("h3");
// console.log(subtitleFirstCard);
const textFirstCard = firstCard.innerText;
// console.log(textFirstCard)
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector(".card-body > a");
// console.log(link1FirstCard)
const link2FirstCard = firstCard.querySelectorAll(".card-body > a")[1];
// console.log(link2FirstCard);
console.groupCollapsed("Task 2");
// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const allLinks = document.querySelector("nav").querySelectorAll("a");
console.log(`%cTask 2A`, `color: ${consoleColor}`, '\n', allLinks);
// B- Loop over the links and console.log their text content
console.log(`%cTask 2B`, `color: ${consoleColor}`);
allLinks.forEach((link) => console.log(link.textContent));
// C- Turn the collection of links into a real array
allLinksArray = Array.from(allLinks);
console.log(`%cTask 2C`, `color: ${consoleColor}`, '\n', allLinksArray);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = allLinksArray.filter(link => link.textContent.toLowerCase() === 'home')
console.log(`%cTask 2D`, `color: ${consoleColor}`, '\n', homeLink);
console.groupEnd("Task 2");

console.group("Task 3");
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
console.groupEnd("Task 3");

console.groupCollapsed("Task 4");
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes
console.groupEnd("Task 4");

console.groupCollapsed("Task 5");
// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element
console.groupEnd("Task 5");

console.groupCollapsed("Task 6");
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
console.groupEnd("Task 6");

console.groupCollapsed("Task 7");
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
console.groupEnd("Task 7");

console.groupCollapsed("Task 8");
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
console.groupEnd("Task 8");

console.groupCollapsed("Task 9");
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
console.groupEnd("Task 9");
