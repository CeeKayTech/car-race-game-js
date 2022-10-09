const score = document.querySelector(".score");
const startScreen = document.querySelector(".startScreen");
const gameArea = document.querySelector(".gameArea")

let keys = {ArrowUp:false,ArrowDown:false,ArrowRight:false,ArrowLeft:false}
let player = {speed:5};

startScreen.addEventListener("click",start);
document.addEventListener("keydown",pressOn);
document.addEventListener("keyup",pressOff);

function playGame(){
    if(player.start){
        let car =document.querySelector(".car");
        let road = gameArea.getBoundingClientRect();
        console.log(road);
        if(player.start) {
            if (keys.ArrowUp && player.y > road.top) {player.y -= player.speed;}
            if (keys.ArrowDown && player.y < road.bottom) {player.y += player.speed;}
            if (keys.ArrowLeft && player.x > 0) {player.x -= player.speed;}
            if (keys.ArrowRight && player.x < (road.width-50)) {player.x += player.speed;}
            car.style.left = player.x + 'px';
            car.style.top = player.y + 'px';
        }

        window.requestAnimationFrame(playGame);
    }
    
}

function pressOn(e) {
    e.preventDefault() 
    keys[e.key] = true;
    console.log(keys);
}

function pressOff(e) {
    e.preventDefault() 
    keys[e.key] = false;
    console.log(keys);
}

function start() {
    startScreen.classList.add("hide");
    gameArea.classList.remove("hide");
    player.start = true;
    window.requestAnimationFrame(playGame);
    let car = document.createElement("div");
    car.innerText = "car";
    car.setAttribute("class","car");
    gameArea.appendChild(car);
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
    console.log(player);
}