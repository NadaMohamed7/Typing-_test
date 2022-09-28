
    const words = [
        'Awesome',
        'Special',
        'Sofisticated',
        'Simple',
        'Great',
        'Better',
        'Stronger',
        'Stylish',
        'Flawless',
        'Envied',
        'Strong',
        'Sucessful',
        'Grow',
        'Innovate',
        'Global',
        'Knowledgable',
        "Destructuring",
        "Paradigm",
        "Styling",
        "Cascade",
        "Documentation",
        "Coding",
        "Funny",
        "Working",
        "Dependencies",
        "Task",
        "Runner",
        "Roles",
        "Test",
        "Rust",
        "Playing",
        'Solid'
        ];


const startButton = document.querySelector(".btn");
const theWord = document.querySelector(".the-word");
const upcomingWords = document.querySelector(".upcoming-words");
const input = document.querySelector(".input");
const timeLeftSpan = document.querySelector(".timer span");
const scoreGot = document.querySelector(".score span");



let total = 0,
    n = 0,
    sco = 0,
    isPaused = true;
let correctWord, timer = 0;


// added by farrag to run the time functions

const checkWords = setInterval(Check, 50);
function Check() {
    var valid = checkWord();
    if (valid) {
        genWords();
        correctWord = theWord.innerHTML.toString().toLowerCase();
        input.value = "";
    }
}



const startTime = setInterval(timerFunc, 1000);

function timerFunc() {    
    if (!isPaused && timer > 0) {
        scoreGot.innerHTML = total;
        timer--;
        timeLeftSpan.innerHTML = timer;
    } else if (timer == 1) {
        StopTime();
        scoreGot.innerHTML = total;
        timer = 0, total = 0;
    }
}

function StopTime() {
    clearInterval(startTime);
    clearInterval(checkWords);

}

//end of time functions



input.onpaste = function () {
    return false; } 
    startButton.onclick = function () {
    this.remove();
    input.focus();
    // Generate Word Function
    genWords();
    // call start play
    startPlay(); }

function genWords() {
     // Get Random Word From Array
  var randomWord = words[Math.floor(Math.random() * words.length)];
    // Show The Random Word
    theWord.innerHTML = randomWord;
}


function initGame() {
    //to set the time
    startTime;
    //to set the word
    genWords();
    correctWord = theWord.innerHTML.toString().toLowerCase();
    checkWords;
    

}

function checkWord () {
    let userWord = input.value.toString().toLowerCase();
    if (userWord == correctWord) {
        total += 1;
        return true;
    }
    return false;
}


function startPlay() {

    timer = 30;
    total = 0;
    isPaused = false;
    initGame();
}

