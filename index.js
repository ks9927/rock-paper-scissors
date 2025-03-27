const computerImg = document.querySelector(".computer-photo");
const humanImg = document.querySelector(".human-photo");

const rockBtn = document.querySelector(".rock-btn");
const paperBtn = document.querySelector(".paper-btn");
const scissorsBtn = document.querySelector(".scissors-btn");

const message = document.querySelector(".game-message");

function getComputerChoice() {
    // Gives a number between 1 and 3
	let randomNum = Math.floor(Math.random() *3) +1;

    // Checks if number is 1 to 3 and returns and logs a choice of rock, paper, or scissors
    if(randomNum === 1) {
        computerImg.src = "images/computer-rock.png";
        return "rock";
    }
    else if (randomNum === 2) {
        computerImg.src = "images/computer-paper.png"
        return "paper";
    }
    else if (randomNum === 3) {
        computerImg.src = "images/computer-scissors.png"
        return "scissors";
    }
	
}


function getHumanChoice() {
    rockBtn.addEventListener("click", () => {
        humanImg.src = "images/rock-hand.png";
        return "rock";
    });

    paperBtn.addEventListener("click", () => {
        humanImg.src = "images/paper-hand.png";
        return "paper";
    });

    scissorsBtn.addEventListener("click", () => {
        humanImg.src = "images/scissor-hand.png";
        return "scissors";
    });
}


//variables for human score and computer score that are set to 0
let humanScore = 0;
let computerScore = 0;

const compScore = document.querySelector(".c-score");
const humScore = document.querySelector(".h-score");

//function to play a round
function playRound(humanChoice, computerChoice) {

    //if human wins
    if(humanChoice === "rock" && computerChoice === "scissors")
    {
        message.textContent = "You win! Rock crushes scissors";
        humanScore++;
        humScore.textContent = humanScore;
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        message.textContent = "You win! Paper covers rock";
        humanScore++;
        humScore.textContent = humanScore;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        message.textContent = "You win! Scissors cuts paper";
        humanScore++;
        humScore.textContent = humanScore;
    }
    //if human loses
    else if(computerChoice === "paper" && humanChoice === "rock")
    {
        message.textContent = "You lose. Paper covers rock";
        computerScore++;
        compScore.textContent = computerScore;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper")
    {
        message.textContent = "You lose. Scissors cuts paper";
        computerScore++;
        compScore.textContent = computerScore;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors")
    {
        message.textContent = "You lose. Rock crushes scissors";
        computerScore++;
        compScore.textContent = computerScore;
    }
    else if(computerChoice === humanChoice)
    {
        message.textContent = "Its a tie!"
    }

    if(computerScore === 5) {
        message.textContent = "You lose the game :(";
    }
    else if (humanScore == 5) {
        message.textContent = "You win the game :)"
    }
}


 const humanSelection = getHumanChoice();

rockBtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
    
    });
    
    paperBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
    
    });
    
    scissorsBtn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
    
    });




