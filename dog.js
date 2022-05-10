class Pet {
    constructor(name) {
        this._name = name;
        this._hunger = 100;
        this._thirst = 100;
        this._energy = 100;
        this._bored = 0;
    }
    get name() {
        return this._name
    }
    get hunger() {
        return this._hunger
    }
    get thirst() {
        return this._thirst
    }
    get energy() {
        return this._energy
    }

    play() {
        if (this._energy < 30) {
            console.log("I want to sleep!")
        } else if (this._hunger < 40) {
            console.log("I want to eat!")
        } else if (this._thirst < 40) {
            console.log("I need water!")
        } else {
            this._energy -= 5;
            this._hunger -= 5;
            this._thirst -= 10;
            this._bored += 10;
        }
    }
    eat() {
        if (this._hunger > 100) {
            console.log("I am not hungry")
        } else {
            this._hunger += 2
        }


    }
    drink() {
        if (this._thirst > 100){
            console.log("I am not thirsty");
        }else{
            this._thirst += 20;
        }

    }
    walk() {
        if (this._energy <= 30){
            console.log("I want to sleep!")
        }

    }
    sleep(){
    if(this._energy >100){
        console.log("I dont want to sleep!")
    } else {
        this._enegry += 20;
        this._hunger -= 10;
        this._thirst -=10;
        }
    }
    time(){
        this._energy -=2
        this._hunger -= 1;
        this._thirst -=2;
    }
}

const petName = new Pet("Tufis")


let drinkMeter = document.querySelector("#drinkMeter")
let hungerMeter = document.querySelector("#hungerMeter")
const playBtn = document.querySelector("#play")
const drinkBtn = document.querySelector("#drink")
const sleepBtn = document.querySelector("#sleep")
let heartImg = document.querySelector("#heart-img")
const thirstDisplay =document.querySelector("#thirstDisplay")
const hungerDisplay =document.querySelector("#hungerDisplay")
const energytDisplay =document.querySelector("#energyDisplay")
// petName.hunger = hungerMeter.value
let bunny = document.getElementsByClassName("bunny-straight")
let bunny2= document.getElementById("bunny-straight")
let bunnySide = document.querySelector("#bunny-right")
const splashs =document.getElementById("splash")
const forestBg =document.getElementById("forest-img")


function shake(place){
    place.classList.remove("shake")
    place.offsetWidth
    place.classList.add("shake")
}

function splash(place){
    place.classList.remove("splash")
    place.offsetWidth
    place.classList.add("splash")
}
function func1() {
    setTimeout(() => {
        console.log("this is func1");
    }, 1000);
}

playBtn.addEventListener("click", () =>{
    petName.play();
    
    hungerMeter.value =petName.hunger
    drinkMeter.value =petName.thirst
    shake(hungerMeter)
    shake(drinkMeter)
    bunnySide.style.display="none"
    bunny2.style.display="inline"
    setTimeout(() => {
        console.log("change display")
        bunnySide.style.display="inline"
        bunny2.style.display="none"
    }, 5000);
    
    // bunny2.classList.add("bounce-5")
    // bunny2.offsetWidth
    // bunny2.classList.add("bunny-straight")
}
)

drinkBtn.addEventListener("click", () =>{
    petName.drink();
    shake(drinkMeter)
    drinkMeter.value =petName.thirst 
    splash(splashs)
});
 
setInterval(() => {
    petName.time()
    console.log("minus")
    hungerMeter.value =petName.hunger
    drinkMeter.value =petName.thirst
}, 3000);


sleepBtn.addEventListener("click", () =>{
    forestBg.classList.add("night")
    forestBg.offsetWidth
    forestBg.classList.add("night")
    bunnySide.style.display= "none";
    bunny2.style.display= "inline"
    bunny2.style.animation ="none";
    setTimeout(() => {
        console.log("change display")
        bunnySide.style.display="inline"
        bunny2.style.display="none"
    }, 5000);
})