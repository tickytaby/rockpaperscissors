function getComputerChoice() {
    let pcmove = Math.random();
    if (pcmove <= 1/3) {
        pcmove = "rock"
        return pcmove
    }
    else if (pcmove <= 2/3 && pcmove > 1/3) {
        pcmove = "scissors"
        return pcmove
    }
    else {
        pcmove = "paper"
        return pcmove
    }
}

function getHumanChoice() {
    let noobmove = prompt("Make your choice")
    return noobmove
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    switch (true) {
        case (humanChoice === "rock" && computerChoice === "paper"):
            console.log("You LOSE");
            computerScore++;
            break;
        case (humanChoice === "rock" && computerChoice === "scissors"):
            console.log("You WIN")
            humanScore++;
            break;
        case (humanChoice === "rock" && computerChoice === "rock"):
            console.log("It's a TIE");
            break;
        case (humanChoice === "paper" && computerChoice === "scissors"):
            console.log("You LOSE");
            computerScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "rock"):
            console.log("You WIN")
            humanScore++;
            break;
        case (humanChoice === "paper" && computerChoice === "paper"):
            console.log("It's a TIE");
            break;   
        case (humanChoice === "scissors" && computerChoice === "rock"):
            console.log("You LOSE");
            computerScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "paper"):
            console.log("You WIN")
            humanScore++;
            break;
        case (humanChoice === "scissors" && computerChoice === "scissors"):
            console.log("It's a TIE");
            break;
    } 
}

// const humanMove = getHumanChoice();
// const pcMove = getComputerChoice();


// playRound(humanMove, pcMove);
// console.log(humanScore);
// console.log(computerScore);

for (let i = 0; i < 5; i++) {
    const humanMove = getHumanChoice();
    const pcMove = getComputerChoice();
    playRound(humanMove, pcMove);
    console.log("You: " + humanScore + " | PC: " + computerScore);
}