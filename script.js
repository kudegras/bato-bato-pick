function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return 'Bato';
    } else if (randomNum === 2) {
        return 'Papel';
    } else {
        return 'Gunting';
    }
}

// Group wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Draw');
        return 'draw';
    } else if (playerSelection == 'Bato' && computerSelection == 'Gunting') {
        console.log('You Win! Bato beats Gunting');
        return 'win';
    } else if (playerSelection == 'Papel' && computerSelection == 'Bato') {
        console.log('You Win! Papel beats Bato');
        return 'win';
    } else if (playerSelection == 'Gunting' && computerSelection == 'Papel') {
        console.log('You Win! Gunting beats Papel');
        return 'win';
    } else if (playerSelection == 'Gunting' && computerSelection == 'Bato') {
        console.log('You Lose! Bato beats Gunting');
        return 'lose';
    } else if (playerSelection == 'Bato' && computerSelection == 'Papel') {
        console.log('You Lose! Papel beats Bato');
        return 'lose';
    } else if (playerSelection == 'Papel' && computerSelection == 'Gunting') {
        console.log('You Lose! Gunting beats Papel');
        return 'lose';
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore !== 5 || computerScore !== 5) {
        let result = playRound(prompt('Choose your armas'), computerPlay());
        
        if (result == 'win') {
            playerScore++;
        } else if (result == 'lose') {
            computerScore++;
        }
    }

    if (playerScore == 5) {
        alert('You Win!');
    } else if (computerScore == 5) {
        alert('You Lose!');
    }
}

// game();

function lCat(cat) {
    return cat.startsWith('L');
}

const cats = ['Leopard', 'Serval', 'Jaguar', 'Tiger', 'Caracal', 'Lion'];

const filtered = cats.filter(cat => cat.startsWith('L'));

console.log(filtered);
// [ "Leopard", "Lion" ]