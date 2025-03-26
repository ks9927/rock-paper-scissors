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
        console.log("comp choice: rock");
        return "rock";
    }
    else if (randomNum === 2) {
        computerImg.src = "images/computer-paper.png"
        console.log("comp choice: paper");
        return "paper";
    }
    else if (randomNum === 3) {
        computerImg.src = "images/computer-scissors.png"
        console.log("comp choice: scissors");
        return "scissors";
    }
    else {
        console.log("Error");
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

//function to play a round
function playRound(humanChoice, computerChoice) {
   // humanImg.src = "images/blank-img.png";
    //computerImg.src = "images/blank-img.png";

    //if human wins
    if(humanChoice === "rock" && computerChoice === "scissors")
    {
        message.textContent = "You win! Rock crushes scissors";
        console.log("You win! Rock crushes scissors");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        message.textContent = "You win! Paper covers rock";
        console.log("You win! Paper covers rock");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        message.textContent = "You win! Scissors cuts paper";
        console.log("You win! Scissors cuts paper");
        humanScore++;
    }
    //if human loses
    else if(computerChoice === "paper" && humanChoice === "rock")
    {
        message.textContent = "You lose. Paper covers rock";
        console.log("You lose. Paper covers rock");
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper")
    {
        message.textContent = "You lose. Scissors cuts paper";
        console.log("You lose. Scissors cuts paper");
        computerScore++;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors")
    {
        message.textContent = "You lose. Rock crushes scissors";
        console.log("You lose. Rock crushes scissors");
        computerScore++;
    }
    else if(computerChoice === humanChoice)
    {
        message.textContent = "Its a tie!"
        console.log("Its a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

rockBtn.addEventListener("click", () => {

    playRound("rock", computerSelection);
    
    });
    
    paperBtn.addEventListener("click", () => {
    
    playRound("paper", computerSelection);
    
    });
    
    scissorsBtn.addEventListener("click", () => {
    
    playRound("scissors", computerSelection);
    
    });



// function playGame(){

// 	for(let i = 0; i < 5; i++)
// 	{   
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
// 		playRound(humanSelection, computerSelection);

// 	}
//     console.log("Human Score:" + humanScore);
//     console.log("Computer Score:" + computerScore);

// }

// playGame();