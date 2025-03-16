function getComputerChoice() {
	let randomNum = Math.floor(Math.random() *3) +1;

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

getComputerChoice();

function getHumanChoice() {
	let userChoice = prompt("Pick rock, paper, or scissors");

	if (userChoice === ""){
	console.log("Please try again");
	}
	else {
	console.log(`User choice: ${userChoice}`);
	}
}

getHumanChoice();