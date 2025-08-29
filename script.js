// Part 1: Variables and Conditionals
let userName = "Student";
let score = 75;

if (score >= 50) {
  console.log(userName + " passed the test!");
} else {
  console.log(userName + " failed the test.");
}

// Part 2: Custom Functions
function greetUser(name) {
  document.getElementById("message").innerText = "Hello, " + name + "!";
}

function addNumbers(a, b) {
  return a + b;
}

// Part 3: Loops
// For loop example
for (let i = 1; i <= 3; i++) {
  console.log("For loop count: " + i);
}

// While loop example
let j = 1;
while (j <= 3) {
  console.log("While loop count: " + j);
  j++;
}

// Part 4: DOM Interactions
document.getElementById("startBtn").addEventListener("click", function() {
  // 1. Change text content
  greetUser(userName);

  // 2. Add list items dynamically
  let list = document.getElementById("list");
  list.innerHTML = ""; // clear list
  for (let k = 1; k <= 3; k++) {
    let li = document.createElement("li");
    li.innerText = "Item " + k + " (Sum=" + addNumbers(k, 2) + ")";
    list.appendChild(li);
  }

  // 3. Change style dynamically
  document.getElementById("title").style.color = "blue";
});
