function getComputerChoice() {
    // Gives a number between 1 and 3
	let randomNum = Math.floor(Math.random() *3) +1;

    // Checks if number is 1 to 3 and returns and logs a choice of rock, paper, or scissors
    if(randomNum == 1) {
        console.log("comp choice: rock");
        return "rock";
    }
    else if (randomNum == 2) {
        console.log("comp choice: paper");
        return "paper";
    }
    else if (randomNum == 3) {
        console.log("comp choice: scissors");
        return "scissors";
    }
    else {
        console.log("Error");
    }
	
}

// Calling getComputerChoice function
getComputerChoice();

function getHumanChoice() {
    //prompts user for an option of rock,paper,or scissors
	let userChoice = prompt("Pick rock, paper, or scissors");

    //if user doesn't enter anything then logs pls try again
    //else it logs the user's entry
    //When user presses ok then entry is returned automatically
	if (userChoice === ""){
	console.log("Please try again");
	}
	else {
	console.log(`User choice: ${userChoice}`);
	}
}

getHumanChoice();