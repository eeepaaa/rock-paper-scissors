let picksAvailable = ['Rock', 'Paper', 'Scissors'];
let getRandomPicksIndex = () => Math.floor((Math.random() * 3));
let getComputerChoice = () => picksAvailable[getRandomPicksIndex()];
let playerScore = 0;
let computerScore = 0;

function capitalizeString(string) {  
    let getFirstLetter = string.charAt(0);
    let getRemainingLetters = string.slice(1);
    let upperCaseFirstLetter = getFirstLetter.toUpperCase();
    return upperCaseFirstLetter + getRemainingLetters
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        // declare setter and getter methods
        playerScore += 1;
        // 
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection == computerSelection) {
        return 'It\'s a tie!';
    } else {
        // declare setter and getter methods
        computerScore += 1;
        //
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}