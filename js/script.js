//challenge 1: age in days

function ageInDays(){
    let birthYear = prompt("What Year were you born?");
    let ageDays = (2020 - birthYear) * 365;
//  create text node and add it to html
    let h1 = document.createElement('h1');
    let textAnswer = document.createTextNode('You are ' + ageDays + ' days old');
    h1.setAttribute('id','ageInDays'); //h1 has ageDays id
    h1.appendChild(textAnswer); //add h1 id to textanswer
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    document.getElementById('ageInDays').remove();
}

//challenge 2

function genFruit() {
    let image = document.createElement('img'); //create img element
    let div = document.getElementById('flex-gen-fruit');
    image.src = "images/img1.jpg"; //access image
    div.appendChild(image);
}

//challenge 3
//this - object-oriented
//Math.random() always returns a number lower than 1.
// function rpsGame(yourChoice) {
//     console.log(yourChoice);
//     console.log(yourChoice.id);
//     var humanChoice, botChoice;
//     humanChoice = yourChoice.id;
//     botChoice = numberToChoice(randToRpsInt());
//     console.log('Computer Choice: ',botChoice);
//     results = decideWinner(humanChoice, botChoice); //return as an array - (0,1) - human lost, bot won
//     console.log(results);
    // message = finalMessage(results); //return message eg You Lost
    // console.log(message);
    //rpsFrontEnd(yourChoice.id, botChoice, message);
// }
//
// function randToRpsInt() {
//     return Math.floor(Math.random() * 3); //0-2
// }
//
// function numberToChoice(number) {
//     return ['rock','paper','scissors'][number];
// }
//
// function decideWinner(yourChoice, computerChoice) {
    // var rpsDatabase = {
    //     'rock': {'scissors':1, 'rock': 0.5, 'paper': 0},
    //     'paper': {'rock':1, 'paper': 0.5, 'scissors': 0},
    //     'scissors': {'paper':1, 'scissors': 0.5, 'rock': 0}
    // };
    //
    // var yourScore = rpsDatabase[yourChoice][computerChoice]; //if yourChoice=rock, computerChoice=rock, return 0.5
    // var computerScore = rpsDatabase[computerChoice][yourChoice];
    //
    // return [yourScore, computerScore];
//     if (yourChoice == computerChoice){
//         console.log("draw");
//     }
// }
//
// let choiceStack = ['paper','rock','scissors'];

// function finalMessage([yourScore, computerScore]) {
//     if (yourScore === 0){
//         return {'message': 'You Lost!', 'color': 'red'};
//     }else if (yourScore === 0.5){
//         return {'message': 'Draw!!', 'color': 'blue'};
//     }else{
//         return {'message': 'You Won!', 'color': 'green'};
//     }
// }

//Rock Paper Scissors
//caching the DOMs - creating and storing variables that will be used later
//efficient in performance and convenience
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
//querySelector* is more flexible
//he performance of querySelector changes with the size of the DOM that it is invoked on.* To be precise, querySelector* calls run in O(n) time and getElement* calls run in O(1) time, where n is the total number of all children of the element or document it is invoked on
//getElement* calls return direct references to the DOM, whereas querySelector* internally makes copies of the selected elements before returning references to them. These are referred to as "live" and "static" elements
//querySelectorAll and getElementsByName both return NodeLists
//getElementsByClassName and getElementsByTagName both return HTMLCollections
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); //change p text
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock","paper", "scissors"];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertResult(word) {
    if (word == "rock") return "Rock";
    if (word == "paper") return "Paper";
    return "Scissors";
}

// setTimeout(function(){} , time before execution)

function win(user, computer) {
    const userChoiceGlow = document.getElementById(user);
    const smallUserWord = "user".fontsize(3).bold().sup();
    const smallCompWord = "comp".fontsize(3).bold().sup();
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    //avoids concatenation of string
    result_p.innerHTML = `${convertResult(user)}${smallUserWord} beats ${convertResult(computer)}${smallCompWord}. You win!`; //e6 text string
    userChoiceGlow.classList.add('green-glow'); //add green glow to win
   // setTimeout(function () {userChoiceGlow.classList.remove('green-glow')}, 300);
    setTimeout( () => userChoiceGlow.classList.remove('green-glow'), 300);
}

function lose(user, computer) {
    const userChoiceGlow = document.getElementById(user);
    const smallUserWord = "user".fontsize(3).bold().sup();
    const smallCompWord = "comp".fontsize(3).bold().sup();
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    //avoids concatenation of string
    result_p.innerHTML = `${convertResult(user)}${smallUserWord} loses to ${convertResult(computer)}${smallCompWord}. You lose!`; //e6 text string
    userChoiceGlow.classList.add('red-glow'); //add green glow to win
  //  setTimeout(function () {userChoiceGlow.classList.remove('red-glow')}, 300);
    setTimeout( () => userChoiceGlow.classList.remove('red-glow'), 300); //es6 JS
}

function draw(user, computer) {
    const userChoiceGlow = document.getElementById(user);
    const smallUserWord = "user".fontsize(3).bold().sup();
    const smallCompWord = "comp".fontsize(3).bold().sup();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    //avoids concatenation of string
    result_p.innerHTML = `${convertResult(user)}${smallUserWord} equals ${convertResult(computer)}${smallCompWord}. It's a draw!`; //e6 text string
    userChoiceGlow.classList.add('grey-glow'); //add green glow to win
    //setTimeout(function () {userChoiceGlow.classList.remove('grey-glow')}, 300);
    setTimeout( () => userChoiceGlow.classList.remove('grey-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
//syntax
//document.addEventListener(event, function, useCapture) - useCapture boolean is optional
    //below is the prev code version. Rest of code is es6 version
//     rock_div.addEventListener('click', function () {
//         game("rock");
//     })

    rock_div.addEventListener('click', () => game("rock"));
    paper_div.addEventListener('click',  () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();






























































