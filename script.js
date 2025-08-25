
// Part 1: JavaScript Basics

// Variables & Conditionals
let userAge = 18; // variable
let basicsOutput = document.getElementById("basics-output");

// Conditional logic
if (userAge >= 18) {
  basicsOutput.textContent = "You are an adult";
} else {
  basicsOutput.textContent = "You are a minor";
}


//  Part 2: Functions

// Function 1: Greeting
function greetUser() {
  let name = prompt("Enter your name:");
  document.getElementById("greeting").textContent = `Hello, ${name}! Welcome!`;
}

// Function 2: Calculate Total
function calculateTotal(price, tax) {
  let total = price + tax;
  document.getElementById("total-output").textContent = `Total is: $${total}`;
  return total;
}


//  Part 3: Loops

// Example 1: For Loop (list numbers 1–5)
let numbersList = document.getElementById("numbers-list");
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  numbersList.appendChild(li);
}

// Example 2: While Loop (Countdown from 5 to 1)
let countdown = "";
let num = 5;
while (num > 0) {
  countdown += num + " ";
  num--;
}
document.getElementById("countdown").textContent = countdown;


//  Part 4: DOM Manipulation


// 1. Toggle Text on button click
document.getElementById("toggle-btn").addEventListener("click", function () {
  let text = document.getElementById("toggle-text");
  text.style.display = (text.style.display === "none") ? "block" : "none";
});

// 2. Change background color on button click
document.getElementById("change-color-btn").addEventListener("click", function () {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// 3. Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "New Item " + (document.querySelectorAll("#dynamic-list li").length + 1);
  document.getElementById("dynamic-list").appendChild(newItem);
});
