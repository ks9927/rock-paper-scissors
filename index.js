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

    //variable to convert humanChoice string to lowercase
    let convertHumanChoice = humanChoice.toLowerCase();

    //if human wins
    if(convertHumanChoice === "rock" && computerChoice === "scissors")
    {
        console.log("You win! Rock beats scissors");
        humanScore++;
    }
    else if(convertHumanChoice === "paper" && computerChoice === "rock")
    {
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if(convertHumanChoice === "scissors" && computerChoice === "paper")
    {
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
    //if human loses
    else if(computerChoice === "paper" && convertHumanChoice === "rock")
    {
        console.log("You lose. Rock covers paper");
        computerScore++;
    }
    else if (computerChoice === "scissors" && convertHumanChoice === "paper")
    {
        console.log("You lose. Scissors cuts paper");
        computerScore++;
    }
    else if(computerChoice === "rock" && convertHumanChoice === "scissors")
    {
        console.log("You lose. Rock crushes scissors");
        computerScore++;
    }
    else if(computerChoice === convertHumanChoice)
    {
        console.log("Its a tie!");
    }
}

//variable that calls the getHumanChoice function
const humanSelection = getHumanChoice();
//variable that calls the getComputerChoice function
const computerSelection = getComputerChoice();

//calls the playRound function where humanSelection/computerSelection replaces the humanChoice/computerChoice variables/params
playRound(humanSelection, computerSelection);