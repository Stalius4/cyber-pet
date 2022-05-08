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
}

const petName = new Pet("Tufis")
setTimeout(petName.play(), 2000)

let drinkMeter = document.querySelector("#drinkMeter")
let hungerMeter = document.querySelector("#hungerMeter")
const playBtn = document.querySelector("#play")
const drinkBtn = document.querySelector("#drink")
let heartImg = document.querySelector("#heart-img")
const thirstDisplay =document.querySelector("#thirstDisplay")
const hungerDisplay =document.querySelector("#hungerDisplay")
const energytDisplay =document.querySelector("#energyDisplay")
// petName.hunger = hungerMeter.value
let bunny = document.getElementsByClassName("bunny-straight")
let bunny2= document.getElementById("bunny-straight")
let bunnySide = document.querySelector("#bunny-right")
const splashs =document.getElementById("splash")



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
 
function size(image){
    if(petName.hunger >= 95){
        image.style.transform ="scale1.95)"
    }else if(petName.hunger >= 90){
        image.style.transform ="scale(1.90)"
   
    }else if(petName.hunger >= 85){
        image.style.transform ="scale(1.85)"

    }else if(petName.hunger >= 80){
        image.style.transform ="scale(1.80)"

    }else if(petName.hunger >= 75){
        image.style.transform ="scale(1.75)"

    }else if(petName.hunger >= 70){
        image.style.transform ="scale(1.70)"

    }else if(petName.hunger >= 65){
        image.style.transform ="scale(1.65)"

    }else if(petName.hunger >= 60){
        image.style.transform ="scale(1.60)"
    }

}


let userDetail