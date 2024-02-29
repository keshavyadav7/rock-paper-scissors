let rocks = document.querySelector(".rocks");
let scissors = document.querySelector(".scissors");
let papers = document.querySelector(".papers");
let computer = document.querySelector(".computerplayer");
let state = document.querySelector(".status");
let countNum = document.querySelector(".countNum");
let playerscore = document.querySelector(".yourscore");
let computerscore = document.querySelector(".computerscore");
function num() {
    let val = Math.random();
    if (val < 0.33) {
        x = "rock";
    }
    else if (val > 0.33 && val < 0.66) {
        x = "paper";
    }
    else { x = "scissor"; }
    return x;
}
function winner() {
    let rockval = Math.random();
    console.log(num(rockval));
    let computer = Math.random();
    console.log(num(computer));
    if (num(rockval) === num(computer)) {
        console.log("winner");
    }
}
function countTheNumber() {
    count += 1;
    countNum.innerText = `${count}`;
}
function winnerScore() {
    win += 1;
    playerscore.innerText = `${win}`;
}
function looseScore() {
    lose += 1;
    computerscore.innerText = `${lose}`;
}
let rock = "rock";
let paper = "paper";
let scissor = "scissor";
//rock == paper paper ==scissors scissors == rock 
let count = 0;
let win = 0;
let lose = 0;
rocks.addEventListener("click", () => {
    let y = num();
    console.log(y);
    if (y === rock) {
        computer.style.backgroundImage = "url('images/rock.png')";
        state.style.backgroundColor = "#59D5E0";
        state.innerText = "TIE";
    }
    if (y === scissor) {
        state.style.backgroundColor = "green";
        state.innerText = "YOU WIN";
        computer.style.backgroundImage = "url('images/scissors.png')";
        winnerScore();
    }
    if (y === paper) {
        state.style.backgroundColor = "red";
        state.innerText = "YOU LOSE";
        computer.style.backgroundImage = "url('images/paper.png')";
        looseScore();
    }
    countTheNumber();
});

scissors.addEventListener("click", () => {
    let y = num();
    console.log(y);
    if (y === rock) {
        state.style.backgroundColor = "red";
        state.innerText = "YOU LOSE";
        computer.style.backgroundImage = "url('images/rock.png')";
        looseScore();
    }
    if (y === scissor) {
        state.style.backgroundColor = "#59D5E0";
        state.innerText = "TIE";
        computer.style.backgroundImage = "url('images/scissors.png')";
    }
    if (y === paper) {
        state.style.backgroundColor = "green";
        state.innerText = "YOU WIN";
        computer.style.backgroundImage = "url('images/paper.png')";
        winnerScore();
    }
    countTheNumber();
});
papers.addEventListener("click", () => {
    let y = num();
    console.log(y);
    if (y === rock) {
        state.style.backgroundColor = "green";
        state.innerText = "YOU WIN";
        computer.style.backgroundImage = "url('images/rock.png')";
        winnerScore();
    }
    if (y === scissor) {
        state.style.backgroundColor = "red";
        state.innerText = "YOU LOSE";
        computer.style.backgroundImage = "url('images/scissors.png')";
        looseScore();
    }
    if (y === paper) {
        state.style.backgroundColor = "#59D5E0";
        state.innerText = "TIE";
        computer.style.backgroundImage = "url('images/paper.png')";
    }
    countTheNumber();
});

