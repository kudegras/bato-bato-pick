let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return 'BATO';
        case 1:
            return 'PAPEL';
        case 2:
            return 'GUNTING';
    }
}

function playRound(playerSelection, computerSelection) {
    endGame();

    if (playerSelection === computerSelection) {
        roundWinnerInfo.textContent = 'Tabla!';
        roundInfo.textContent = playerSelection + ' draws with ' + computerSelection;
    }
    if ((playerSelection === 'BATO' && computerSelection === 'GUNTING') ||
        (playerSelection === 'GUNTING' && computerSelection === 'PAPEL') ||
        (playerSelection === 'PAPEL' && computerSelection === 'BATO')) {
        roundWinnerInfo.textContent = 'Panalo ka!';
        roundInfo.textContent = playerSelection + ' beats ' + computerSelection;
        playerScore++;
        
    }
    if ((computerSelection === 'BATO' && playerSelection === 'GUNTING') ||
        (computerSelection === 'GUNTING' && playerSelection === 'PAPEL') ||
        (computerSelection === 'PAPEL' && playerSelection === 'BATO')) {
        roundWinnerInfo.textContent = 'Olats erps!';
        roundInfo.textContent = computerSelection + ' beats ' + playerSelection;
        computerScore++;    
    }
    
    updateDisplayInfo(playerSelection, computerSelection);
    setTimeout(() => endGame(), 50);
}

function updateDisplayInfo(playerSelection, computerSelection) {
    if (playerSelection == 'BATO') {
        playerDisplaySelectionImg.src = './images/hand-back-fist-solid.svg';
    } else if (playerSelection == 'PAPEL') {
        playerDisplaySelectionImg.src = './images/hand-solid.svg';
    } else if (playerSelection == 'GUNTING') {
        playerDisplaySelectionImg.src = './images/hand-scissors-solid.svg';
    }

    if (computerSelection == 'BATO') {
        computerDisplaySelectionImg.src = './images/hand-back-fist-solid.svg';
    } else if (computerSelection == 'PAPEL') {
        computerDisplaySelectionImg.src = './images/hand-solid.svg';
    } else if (computerSelection == 'GUNTING') {
        computerDisplaySelectionImg.src = './images/hand-scissors-solid.svg';
    }
    playerDisplayScore.textContent = `Player: ${playerScore}`;
    computerDisplayScore.textContent = `Computer: ${computerScore}`;
}

function endGame() {
    if (playerScore === 5) {
        alert('GGWP!');
        window.location.reload()
    } else if (computerScore === 5) {
        alert('Aww.. iyak!');
        window.location.reload()
    }
}

const roundWinnerInfo = document.querySelector('.content__task');
const roundInfo = document.querySelector('.content__game-info');
const playerDisplaySelectionImg = document.querySelector('.content__player-selection img');
const computerDisplaySelectionImg = document.querySelector('.content__computer-selection img');
const playerDisplayScore = document.querySelector('.content__player-score');
const computerDisplayScore = document.querySelector('.content__computer-score');

const batoBtn = document.querySelector('.content__bato-button');
const papelBtn = document.querySelector('.content__papel-button');
const guntingBtn = document.querySelector('.content__gunting-button');

batoBtn.addEventListener('click', () => playRound('BATO', computerPlay()));
papelBtn.addEventListener('click', () => playRound('PAPEL', computerPlay()));
guntingBtn.addEventListener('click', () => playRound('GUNTING', computerPlay()));