function getComputerChoice() {
    // Gives a number between 1 and 3
	let randomNum = Math.floor(Math.random() *3) +1;

    // Checks if number is 1 to 3 and returns and logs a choice of rock, paper, or scissors
    if(randomNum === 1) {
        console.log("comp choice: rock");
        return "rock";
    }
    else if (randomNum === 2) {
        console.log("comp choice: paper");
        return "paper";
    }
    else if (randomNum === 3) {
        console.log("comp choice: scissors");
        return "scissors";
    }
    else {
        console.log("Error");
    }
	
}


function getHumanChoice() {
    //prompts user for an option of rock,paper,or scissors
	let userChoice = prompt("Pick rock, paper, or scissors");

    //if user doesn't enter anything then logs pls try again
    //else it logs the user's entry
	if (userChoice === ""){
	console.log("Please try again");
	}
	else {
	console.log(`User choice: ${userChoice}`);
    return userChoice;
	}
}


//variables for human score and computer score that are set to 0
let humanScore = 0;
let computerScore = 0;

//function to play a round
function playRound(humanChoice, computerChoice) {

    //if human wins
    if(humanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock crushes scissors");
        humanScore++;
    }
    else if(humanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper covers rock");
        humanScore++;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors cuts paper");
        humanScore++;
    }
    //if human loses
    else if(computerChoice === "paper" && humanChoice === "rock")
    {
        console.log("You lose. Paper covers rock");
        computerScore++;
    }
    else if (computerChoice === "scissors" && humanChoice === "paper")
    {
        console.log("You lose. Scissors cuts paper");
        computerScore++;
    }
    else if(computerChoice === "rock" && humanChoice === "scissors")
    {
        console.log("You lose. Rock crushes scissors");
        computerScore++;
    }
    else if(computerChoice === humanChoice)
    {
        console.log("Its a tie!");
    }
}


//calls the playRound function where humanSelection/computerSelection replaces the humanChoice/computerChoice variables/params
//playRound(humanSelection, computerSelection);

function playGame(){

	for(let i = 0; i < 5; i++)
	{   
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
		playRound(humanSelection, computerSelection);
	}
    console.log("Human Score:" + humanScore);
    console.log("Computer Score:" + computerScore);

}

playGame();