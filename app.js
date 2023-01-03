plays = ['rock', 'paper', 'scissors'];

// get computers choice
const getComputerChoice = () => {
   const randomNumber = Math.floor(Math.random() * 3)
   return plays[randomNumber]
}

console.log(getComputerChoice());