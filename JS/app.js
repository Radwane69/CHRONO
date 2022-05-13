let numbers = document.querySelectorAll(".nine");

const hourtop = document.querySelector(".hourtop");
const hourtop2 = document.querySelector(".hourtop2");

const hourbottom = document.querySelector(".hourbottom");
const hourbottom2 = document.querySelector(".hourbottom2");

const minutebottom = document.querySelector(".minutebottom");
const minutebottom2 = document.querySelector(".minutebottom2");

const minutetop = document.querySelector(".minutetop");
const minutetop2 = document.querySelector(".minutetop2");

let minutes = 23;
let secondes = 60;

function GT() {
  if (secondes > 0) {
    secondes--;
  } else if (secondes === 0) {
    minutes--;
    secondes = 60;
  }
  let timer = "";
  if (minutes < 10) {
    timer += "0" + minutes;
  } else {
    timer += minutes;
  }
  if (secondes < 10) {
    timer += "0" + secondes;
  } else {
    timer += secondes;
  }
  if (
    timer[0] === "0" &&
    timer[1] === "0" &&
    timer[2] === "0" &&
    timer[3] === "0"
  ) {
    console.log("clear");
    clearInterval(interval);
  }
  for (let i = 0; i < timer.length; i++) {
    if (timer[i] === "0") {
      console.log("0");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");

      numbers[i].lastElementChild.classList.remove("haut");
      numbers[i].lastElementChild.classList.add("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "1") {
      console.log("1");
      numbers[i].firstElementChild.classList.remove("gauche");
      numbers[i].firstElementChild.classList.remove("haut");
      numbers[i].firstElementChild.classList.add("droite");

      numbers[i].lastElementChild.classList.remove("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.remove("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "2") {
      console.log("2");
      numbers[i].firstElementChild.classList.remove("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.add("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.remove("droite");
    }
    if (timer[i] === "3") {
      console.log("3");
      numbers[i].firstElementChild.classList.remove("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");
      numbers[i].lastElementChild.classList.add("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "4") {
      console.log("4");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.remove("haut");
      numbers[i].firstElementChild.classList.add("droite");
      numbers[i].lastElementChild.classList.add("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.remove("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "5") {
      console.log("5");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.remove("droite");
      numbers[i].lastElementChild.classList.add("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "6") {
      console.log("6");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.remove("droite");
      numbers[i].lastElementChild.classList.remove("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.add("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "7") {
      console.log("7");
      numbers[i].firstElementChild.classList.remove("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");
      numbers[i].lastElementChild.classList.remove("bas");

      numbers[i].lastElementChild.classList.remove("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.remove("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "8") {
      console.log("8");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");
      numbers[i].lastElementChild.classList.add("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.add("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
    if (timer[i] === "9") {
      console.log("9");
      numbers[i].firstElementChild.classList.add("gauche");
      numbers[i].firstElementChild.classList.add("haut");
      numbers[i].firstElementChild.classList.add("droite");
      numbers[i].lastElementChild.classList.add("bas");

      numbers[i].lastElementChild.classList.add("haut");
      numbers[i].lastElementChild.classList.remove("gauche");
      numbers[i].lastElementChild.classList.add("bas");
      numbers[i].lastElementChild.classList.add("droite");
    }
  }
}

const interval = setInterval(GT, 1000);
