const computerSelection = computerPlay();
const playerSelection = prompt( "Rock, Paper, or Scissors: ").toUpperCase();

// function randomly returns either Rock, Paper, or Scissors

function computerPlay() {
    rock = 0;
    paper = 1;
    scissors = 2;
    randNum = Math.floor(Math.random() * 3);

    if ( randNum == rock ) 
    {
        returnVal = "ROCK";
    }
    else if ( randNum == paper )
    {
        returnVal = "PAPER";
    } 
    else 
    {
        returnVal = "SCISSORS";
    }

    return returnVal;
}

// function that plays a single round

function playRound( playerSelection, computerSelection ) {
    if ( playerSelection == "ROCK" && computerSelection == "PAPER")
    {
        returnStr = "You Lose! Paper beats Rock";
    }
    else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS")
    {
        returnStr = "You Win! Rock beats Scissors";
    }
    else if ( playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        returnStr = "You Lose! Scissors beats Paper";
    }
    else if ( playerSelection == "PAPER" && computerSelection == "ROCK")
    {
        returnStr = "You Win! Paper beats Rock";
    }
    else if ( playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        returnStr = "You Lose! Rock beats Scissors";
    }
    else if ( playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        returnStr = "You Win! Scissors beats Paper";
    }
    else
    {
        returnStr = "Tie! Try again";
    }

    return returnStr;
}

// function will play the game

function game(){
    for (let i = 0; i < 5; i++) {
        endgameStr = playRound( playerSelection, computerSelection );
        console.log( endgameStr );
     }
}

// play the game

game()