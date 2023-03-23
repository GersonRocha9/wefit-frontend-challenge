// MENU
const menuContainer = document.querySelector(".btn-group-vertical");
menuContainer.style.display = "flex";
menuContainer.style.flexDirection = "row";
menuContainer.style.justifyContent = "space-between";
menuContainer.style.alignItems = "center";
menuContainer.style.gap = "4px";
menuContainer.style.width = "100%";
menuContainer.style.maxWidth = "545px";

const menuButtons = document.querySelectorAll(".btn-group-vertical button");
menuButtons.forEach((button) => {
  button.style.borderRadius = "5px";
  button.style.width = "fit-content";
});

// HEADER
const headerContainer = document.querySelector(".jumbotron");
headerContainer.style.display = "flex";
headerContainer.style.flexDirection = "column";
headerContainer.style.alignItems = "flex-end";
headerContainer.style.backgroundColor = "#6c757d";
headerContainer.style.color = "#fff";
headerContainer.style.textAlign = "right";

const headerButton = document.querySelector(".jumbotron a");
headerButton.style.backgroundColor = "#279E43";
headerButton.style.border = "none";

const headerSeparator = document.querySelector(".jumbotron hr");
headerSeparator.style.width = "100%";

// CARDS
const cardButtons = document.querySelectorAll(".card .btn-primary");

const secondCardButton = cardButtons[1];

secondCardButton.style.backgroundColor = "#279E43";
secondCardButton.style.border = "none";

// LISTA
var listContainer = document.querySelector(".list-group");

var fourthItem = document.createElement("li");
fourthItem.className = "list-group-item";
fourthItem.textContent = "Quarto item";

var fifthItem = document.createElement("li");
fifthItem.className = "list-group-item";
fifthItem.textContent = "Quinto item";

listContainer.appendChild(fourthItem);
listContainer.appendChild(fifthItem);

var firstItem = document.querySelector(".list-group-item.active");

firstItem.classList.remove("active");

var fourthItem = document.querySelectorAll(".list-group-item")[3];

fourthItem.classList.add("active");
