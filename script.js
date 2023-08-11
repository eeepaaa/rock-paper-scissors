let picksAvailable = ['Rock', 'Paper', 'Scissors'];
let getRandomPicksIndex = () => Math.floor((Math.random() * 3));
let getComputerChoice = () => picksAvailable[getRandomPicksIndex()];

function capitalizeString(string) {  
    let getFirstLetter = string.charAt(0);
    let getRemainingLetters = string.slice(1);
    let upperCaseFirstLetter = getFirstLetter.toUpperCase();
    return upperCaseFirstLetter + getRemainingLetters
}