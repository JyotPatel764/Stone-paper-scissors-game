const numberOfButtons = document.querySelectorAll(".actual").length;
const buttonElements = document.querySelectorAll(".actual");

let userScore = 0;
let computerScore = 0;


for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".actual")[i].addEventListener("click" , () => {
        let computerChoice = buttonElements[Math.floor(Math.random() * 3)].innerHTML;
        let userChoice = buttonElements[i].innerHTML;

        assessingScore(userChoice , computerChoice);
        
    })
}

function addUserScore() {
  userScore++;
  document.getElementById("user").textContent = userScore;
}

function addComputerScore() {
  computerScore++;
  document.getElementById("computer").textContent = computerScore;
}

function assessingScore(userValue , computerValue) {
    let resultText = document.getElementById("final-message");
    let rock1 = buttonElements[0].innerHTML;
    let paper1 = buttonElements[1].innerHTML;
    let scissors1 = buttonElements[2].innerHTML;
    
     if (userValue === rock1) {
        if (computerValue === rock1) {
            resultText.textContent = "It's a draw!";
            resultText.style.backgroundColor = "black";
        }

        else if (computerValue === paper1) {
            addComputerScore();
            resultText.textContent = "you lost! Paper beats Rock";
            resultText.style.backgroundColor = "red";

        }
        else if (computerValue === scissors1){
            addUserScore();
            resultText.textContent = "you won! Rock beats Scissors";
            resultText.style.backgroundColor = "green";
        }
     }

     else if (userValue === paper1) {
        if (computerValue === rock1) {
            addUserScore();
            resultText.textContent = "you won! Paper beats Rock";
            resultText.style.backgroundColor = "green";

        }

        else if (computerValue === paper1) {
            resultText.textContent = "It's a draw!";
            resultText.style.backgroundColor = "black";
        }

        else if (computerValue === scissors1){
            addComputerScore();
            resultText.textContent = "you lost! Scissors beats Paper";
            resultText.style.backgroundColor = "red";
        }
     }

     else if (userValue === scissors1) {
        if (computerValue === rock1) {
            addComputerScore();
            resultText.textContent = "you lost! Rock beats Scissors";
            resultText.style.backgroundColor = "red";

        }

        else if (computerValue === paper1) {
            addUserScore();
            resultText.textContent = "you won! Scissors beat Paper";
            resultText.style.backgroundColor = "green";
        }

        else if (computerValue === scissors1){
            resultText.textContent = "It's a draw!";
            resultText.style.backgroundColor = "black";
        }
     }
}