const element = document.getElementById("fruits");

//firstElementChild

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElements) => {
  const firstChild = ulElements.firstElementChild;
  firstChild.style.textAlign = "center";
});

//lastElementChild

ulElements.forEach((ulElements) => {
  const lastChild = ulElements.lastElementChild;
  lastChild.style.textAlign = "left";
  lastChild.style.backgroundColor = "hsl(300,30%,70%)";
});

//.nextElementSibling it will select next sibling
const element1 = document.getElementById("apple");
const nextSibling = element1.nextElementSibling;
nextSibling.style.fontWeight = "bold";

//previousElementSibling

const previousSibling = element1.previousElementSibling;
previousSibling.style.backgroundColor = "yellow";

//parentElement

//children
