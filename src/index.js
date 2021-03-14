// Inserts default colored "header" line above console output with optional third argument for color of header
function taskLog(taskID, logInput, color = "cyan") {
  logInput
    ? console.log(`%cTask ${taskID}`, `color: ${color}`, "\n", logInput)
    : console.log(`%cTask ${taskID}`, `color: ${color}`);
}

console.groupCollapsed(`%cTask 1`, "color: blue");
// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.getElementsByTagName("header")[0];
taskLog("1A", header);
const logoTitle = document.getElementsByTagName("h1");
console.log(logoTitle);
const firstCard = document.querySelector(".card:nth-of-type(1)");
console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector("img");
taskLog("1B", imageFirstCard);
const titleFirstCard = firstCard.querySelector(".card-title");
console.log(titleFirstCard);
const subtitleFirstCard = firstCard.querySelector("h3");
console.log(subtitleFirstCard);
const textFirstCard = firstCard.innerText;
console.log(textFirstCard);
// C- traversing with dot notation
const link1FirstCard = firstCard.querySelector(".card-body > a");
taskLog("1C", link1FirstCard);
const link2FirstCard = firstCard.querySelectorAll(".card-body > a")[1];
console.log(link2FirstCard);
console.groupEnd("Task 1");

console.groupCollapsed(`%cTask 2`, "color: orange");
// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const allNavLinks = document.querySelector("nav").querySelectorAll("a");
taskLog("2A", allNavLinks);
// B- Loop over the links and console.log their text content
taskLog("2B", null);
allNavLinks.forEach((link) => console.log(link.textContent));
// C- Turn the collection of links into a real array
allNavLinksArray = Array.from(allNavLinks);
taskLog("2C", allNavLinksArray);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = allNavLinksArray.filter(
  (link) => link.textContent.toLowerCase() === "home"
);
taskLog("2D", homeLink);
console.groupEnd("Task 2");

console.groupCollapsed(`%cTask 3`, "color: green");
// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
const headerText = document.querySelector("h1");
headerText.textContent = headerText.textContent.replace("Cat", "Dog");
taskLog("3A", headerText.textContent);
const allLinks = document.querySelectorAll("a");
allLinks.forEach((link) => {
  link.innerText = link.innerText.replace("Cat", "Dog");
  console.log(link.innerText);
});
//  B- Have the students research online the difference between textContent and innerText;
console.log(
  `- If you want both visible and hidden content, use %ctextContent`,
  "color: limegreen",
  `\n`,
  `Otherwise, use innerText to show only human-readable elements`
);
console.groupEnd("Task 3");

console.groupCollapsed(`%cTask 4`, "color: pink");
// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
const cardImage = document.querySelector(".card").querySelector("img");
// create object to hold new values
const dogImg = {
  src: "https://i.imgur.com/jDimNTZ.jpeg",
  title: "Iz dogg. Goes woof",
  alt: "Furry canine bestest friend",
};
// create iterable array from object keys and map over it to reassign key values
Object.keys(dogImg).map((key) => {
  cardImage[key] = dogImg[key];
});
taskLog("4A", cardImage);
//  B- Using .setAttribute to change a few attributes
header.setAttribute("class", "dog_header");
taskLog("4B", header);
console.groupEnd("Task 4");

console.groupCollapsed(`%cTask 5`, "color: magenta");
// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
const body = document.querySelector("div.card-group");
body.classList.add("with_balls");
taskLog("5A", body.classList);
//  B- By manipulating inline styles on the element
firstCard.style.borderRadius = "10px";
taskLog("5b", firstCard.style);
console.groupEnd("Task 5");

console.group(`%cTask 6`, "color: red");
// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const nav = document.querySelector('nav');
const newLink = document.createElement('a');
newLink.href = "#";
newLink.classList = "menu-item";
newLink.innerText = "Blog";
nav.appendChild(newLink);
console.groupEnd("Task 6");

console.groupCollapsed(`%cTask 7`, "color: yellow");
// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
console.log(secondCard);
console.groupEnd("Task 7");

console.groupCollapsed(`%cTask 8`, "color: #af278c");
// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
console.groupEnd("Task 8");

console.groupCollapsed(`%cTask 9`, "color: #52a257");
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
console.groupEnd("Task 9");
