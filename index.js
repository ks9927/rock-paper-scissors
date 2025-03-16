function getComputerChoice() {
	let randomNum = Math.floor(Math.random() *3) +1;
    console.log(randomNum);
	return randomNum; 
	
}

getComputerChoice();