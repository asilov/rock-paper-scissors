plays = ['rock', 'paper', 'scissors']

// get computers choice
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3)
	return plays[randomNumber]
}

const computerSelection = getComputerChoice()
const playerSelection = 'paper'

function playRound(playerSelection, computerSelection) {
	// tie if both choices are same
    // rock beats scissors
    // scissors beat paper
    // paper beats rock
	if (playerSelection === computerSelection) {
		return 'It is a Tie Game'
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return 'You win! Rock beats Scissors'
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return 'You lose! Paper beats Rock'
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You win! Scissors beat paper'
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return 'You win! Paper beats Rock'
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'You lose! Scissors beat Paper'
    }
}

console.log(playRound(playerSelection, computerSelection))
