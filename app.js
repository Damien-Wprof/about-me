'use strict';


let usrName = prompt("What's you're name?")

let vidGame = prompt(usrName + ", Do I like video games? (yes/no)").toLowerCase();

if (vidGame === "yes" || vidGame === "y") {
    alert("Correct!");
} else if (vidGame === "no" || vidGame === "n") {
    alert ("Wrong!")
} else {
    alert ("Please answer with 'Yes' or 'No'")
} console.log("I love video games for you're information!")

let cat = prompt(usrName + ", Am I a cat person? (yes/no)").toLowerCase();

if (cat === "yes" || cat === "y") {
    alert("Correct!");
} else if (cat === "no" || cat === "n") {
    alert ("Wrong!")
} else {
    alert ("Please answer with 'Yes' or 'No'")
} console.log("I love my cat jack, he's a cutie pie")

let food = prompt(usrName + ", Do I like food? (yes/no)").toLowerCase();

if (food === "yes" || food === "y") {
    alert("Correct!");
} else if (food === "no" || food === "n") {
    alert ("Wrong!")
} else {
    alert ("Shouldn't it be obvious?")
} console.log ("This *should* be obvious")

let mom = prompt(usrName +", Isn't my favorite person my mom? (yes/no)").toLowerCase();

if (mom === "yes" || mom === "y") {
    alert("Correct!");
} else if (mom === "no" || mom === "n") {
    alert ("Wrong!")
} else {
    alert ("Please answer with 'Yes' or 'No'")
} console.log("My mom is my favorite")

let sleep = prompt(usrName + ", Don't I love to sleep? (yes/no)").toLowerCase();

if (sleep === "yes" || sleep === "y") {
    alert("Correct!");
} else if (sleep === "no" || sleep === "n") {
    alert ("Wrong!")
} else {
    alert ("Please answer with 'Yes' or 'No'")
} console.log('I can\'t wait to sleep, even now!')

const number = 4;
let guessedCorrectly = false;

for (let attempts = 1; attempts <= 4; attempts++) {
  let guess = Number(prompt("Guess a number between 1–10!"));

  if (guess > number) {
    alert("Too high!");
  } else if (guess < number) {
    alert("Too low!");
  } else {
    alert("Correct!");
    guessedCorrectly = true;
    break;
  }
}

if (!guessedCorrectly) {
  alert("Out of attempts. The correct number was " + number);
}


alert ('Welcome ' + usrName + '!')

 console.log('User\'s name is ' + usrName)