let picksAvailable = ['rock', 'paper', 'scissors'];
let getRandomPicksIndex = () => Math.floor((Math.random() * 3));
let getComputerChoice = () => picksAvailable[getRandomPicksIndex()];

