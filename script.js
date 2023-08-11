let picksAvailable = ['Rock', 'Paper', 'Scissors'];
let getRandomPicksIndex = () => Math.floor((Math.random() * 3));
let getComputerChoice = () => picksAvailable[getRandomPicksIndex()];
let scores = {player: 0, computer: 0}
let canIncrease = false

function capitalizeString(string) {  
    let getFirstLetter = string.charAt(0);
    let getRemainingLetters = string.slice(1);
    let upperCaseFirstLetter = getFirstLetter.toUpperCase();
    return upperCaseFirstLetter + getRemainingLetters
}

function addPointToScore(player) {
    if (canIncrease) {
        scores[`${player}`] += 1;
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();

    if ((playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock')) {
        addPointToScore('player');
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else if (playerSelection == computerSelection) {
        return 'It\'s a tie!';
    } else {
        addPointToScore('computer');
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    canIncrease = true
    let playerSelection;

    for (let index = 0; index < 5; index++) {
        playerSelection = capitalizeString(prompt('Rock, Paper or Scissors?').toLowerCase().trim())
        console.log(playRound(playerSelection))
    }

    if (scores['player'] > scores['computer']) {
        console.log(`You win ${scores['player']} to ${scores['computer']}.`)
    } else if (scores['player'] < scores['computer']) {
        console.log(`You lose ${scores['player']} to ${scores['computer']}.`)
    } else {
        console.log(`You tied ${scores['player']} to ${scores['computer']}.`)
    }

    scores = {player: 0, computer: 0}
    canIncrease = false
}