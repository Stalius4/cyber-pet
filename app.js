class Pet {
  constructor(name) {
    this._name = name;
    this._hunger = 100;
    this._thirst = 100;
    this._energy = 100;
  }
  get name() {
    return this._name;
  }
  get hunger() {
    return this._hunger;
  }
  get thirst() {
    return this._thirst;
  }
  get energy() {
    return this._energy;
  }

  play() {
    if (this._energy < 30) {
    } else if (this._hunger < 40) {
      console.log("I want to eat!");
    } else if (this._thirst < 40) {
      console.log("I need water!");
    } else {
      this._energy -= 5;
      this._hunger -= 5;
      this._thirst -= 10;
    }
  }
  eat() {
    if (this._hunger > 90) {
      console.log("I am not hungry");
    } else {
      this._hunger += 20;
    }
  }
  drink() {
    if (this._thirst > 80) {
      console.log("I am not thirsty");
    } else {
      this._thirst += 20;
    }
  }
  walk() {
    if (this._energy <= 30) {
      console.log("I want to sleep!");
    }
  }
  sleep() {
    if (this._energy > 100) {
      console.log("I dont want sleep!");
    } else {
      this._energy = 100;
    }
  }

  time() {
    if (this._energy <= 0) {
      this._hunger -= 1;
      this._thirst -= 2;
    } else if (this._hunger <= 0) {
      this._energy -= 2;
      this._thirst -= 2;
    } else if (this._thirst <= 0) {
      this._energy -= 2;
      this._hunger -= 1;
    } else {
      this._energy -= 2;
      this._hunger -= 1;
      this._thirst -= 2;
    }
  }
}

const petName = new Pet("Tufis");

const energyMeter = document.querySelector("#energyMeter");
const drinkMeter = document.querySelector("#drinkMeter");
const hungerMeter = document.querySelector("#hungerMeter");

const playBtn = document.querySelector("#play");
const drinkBtn = document.querySelector("#drink");
const sleepBtn = document.querySelector("#sleep");
const eatBtn = document.querySelector("#eat");

let bunny2 = document.getElementById("bunny-straight");
let bunnySide = document.querySelector("#bunny-right");
const splashs = document.getElementById("splash");
const forestBg = document.getElementById("forest-img");
const sleepingBunny = document.getElementById("bunny-straight-sleep");
const carrot = document.getElementById("carrot");

function meterDisplay() {
  hungerMeter.value = petName.hunger;
  drinkMeter.value = petName.thirst;
  energyMeter.value = petName.energy;
}

function shake(place) {
  place.classList.remove("shake");
  place.offsetWidth;
  place.classList.add("shake");
}

function splash(place) {
  place.classList.remove("splash");
  place.offsetWidth;
  place.classList.add("splash");
}

function disableBtn() {
  playBtn.disabled = true;
  drinkBtn.disabled = true;
  sleepBtn.disabled = true;
  eatBtn.disabled = true;
}
function enableBtn() {
  playBtn.disabled = false;
  drinkBtn.disabled = false;
  sleepBtn.disabled = false;
  eatBtn.disabled = false;
}
playBtn.addEventListener("click", () => {
  petName.play();
  meterDisplay();
  shake(hungerMeter);
  shake(drinkMeter);
  shake(energyMeter);
  bunnySide.style.display = "none";
  bunny2.style.display = "inline";
  disableBtn();
  setTimeout(() => {
    enableBtn();
    bunnySide.style.display = "inline";
    bunny2.style.display = "none";
  }, 5000);
});

drinkBtn.addEventListener("click", () => {
  petName.drink();
  shake(drinkMeter);
  drinkMeter.value = petName.thirst;
  splash(splashs);
});

sleepBtn.addEventListener("click", () => {
  petName.sleep();
  meterDisplay();
  forestBg.classList.add("night");
  forestBg.offsetWidth;
  forestBg.classList.add("night");
  bunnySide.style.display = "none";
  sleepingBunny.style.display = "inline";
  shake(energyMeter);
  disableBtn();
  setTimeout(() => {
    enableBtn();
    forestBg.classList.remove("night");
    console.log("change display");
    bunnySide.style.display = "inline";
    sleepingBunny.style.display = "none";
  }, 10000);
});

eatBtn.addEventListener("click", () => {
  petName.eat();
  meterDisplay();
  splash(carrot);
});


//decreasing hunger, energy and thirst
setInterval(() => {
  petName.time();
  meterDisplay();
}, 3000);
