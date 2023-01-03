plays = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

// get computers choice
function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3)
	return plays[randomNumber]
}

// get player choice
function getPlayerChoice() {
	return prompt('Enter your choice...').toLowerCase()
}

const computer = getComputerChoice()
const player = getPlayerChoice()

function playRound(player, computer) {
	if (player === computer) {
		return 'It is a Tie Game'
	} else if (player === 'rock' && computer === 'scissors') {
		playerScore++
		return 'You win! Rock beats Scissors'
	} else if (player === 'rock' && computer === 'paper') {
		computerScore++
		return 'You lose! Paper beats Rock'
	} else if (player === 'scissors' && computer === 'paper') {
		playerScore++
		return 'You win! Scissors beat paper'
	} else if (player === 'scissors' && computer === 'rock') {
		computerScore++
		return 'You lose! Rock beats Scissors'
	} else if (player === 'paper' && computer === 'rock') {
		playerScore++
		return 'You win! Paper beats Rock'
	} else if (player === 'paper' && computer === 'scissors') {
		computerScore++
		return 'You lose! Scissors beat Paper'
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		getPlayerChoice()
		playRound(player, computer)
	}
    if (playerScore > computerScore) {
        return 'You are the winner'
    } else {
        return 'Computer is the winner'
    }
}

console.log(game())
