import { getRandomThrow, checkResult } from './my-functions.js';
import { getCompThrow } from './my-functions.js';


const playButton = document.getElementById('play-button');
const displayWhoWins = document.getElementById('display-who-wins');
const displayWins = document.getElementById('display-wins');
const displayLosses = document.getElementById('display-losses');
const displayDraws = document.getElementById('display-draws');
const displayGames = document.getElementById('number-of-games');


let numOfWins = 0;
let numOfLosses = 0;
let numOfDraws = 0;

function displayAll() {
    displayWins.textContent = numOfWins;
    displayLosses.textContent = numOfLosses;
    displayDraws.textContent = numOfDraws;
    let totalGames = numOfWins + numOfLosses + numOfDraws;
    displayGames.textContent = totalGames;  
}



playButton.addEventListener('click', () => {
    const radioSelection = document.querySelector('input[type = radio]:checked');
    let playerChoice = radioSelection.value;
    console.log('player is', playerChoice);
    const compChoice = getCompThrow();
    console.log('computer is ',compChoice);
    
    // whoWins: player point of view
    
    const whoWins = checkResult(playerChoice, compChoice);
    if (whoWins === 'win') {
        displayWhoWins.textContent = 'You Won!';
        numOfWins ++;
    } else if (whoWins === 'lose') {
        displayWhoWins.textContent = 'Computer Wins';
        numOfLosses ++;
    } else if (whoWins === 'draw') {
        displayWhoWins.textContent = 'It\'s a Draw';
        numOfDraws ++;
    }
    displayAll();
});





