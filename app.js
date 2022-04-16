const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice; 
    computerChoice = generateComputerChoice();
    computerChoiceDisplay.innerHTML = computerChoice;
    result = checkWinner();
    resultDisplay.innerHTML = result;
}))

function generateComputerChoice(){
    const randomNum = Math.floor(Math.random()*3) + 1
    
    switch(randomNum){
        case 1: return 'rock'
                break;
        case 2: return 'paper'
                break;
        default: return 'scissors'
                break;
    }
}

function checkWinner(){
    if(userChoice === computerChoice){
        return 'Its a Draw ! 😲';
    }
    else if(userChoice === 'rock'){
        if(computerChoice === 'paper'){ return 'Computer wins !'}
        else {
            return 'You win !'
        }
    }
    else if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){ return 'Computer wins !'}
        else {
            return 'You win !'
        }
    }
    else{
        if(computerChoice === 'rock'){ return 'Computer wins !'}
        else {
            return 'You win !'
        }
    }
}