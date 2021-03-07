//variables
var score = 0;
var timeLeft = 10;
const target = document.getElementById('target')
const time = document.getElementById('time')
const counter = document.getElementById('counter')

//disabling drag for target

target.draggable = false;

//score change

target.onclick=()=>{
    score++
    counter.innerHTML=score
}

//timer

var timer = setInterval(function () {
    timeLeft--
    time.innerHTML=timeLeft
    if (timeLeft == 0) {
        location.href="timeup.html?score=" + score
    }
}, 1000)