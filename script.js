// initialize variables
let computerPts = 0;
let playerPts = 0;

// function randomly returns either Rock, Paper, or Scissors

function computerPlay() {
    randNum = Math.floor(Math.random() * 3);

    if ( randNum == 0 ) 
    {
        returnVal = "ROCK";
    }
    else if ( randNum == 1 )
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
        computerPts++;
    }
    else if ( playerSelection == "ROCK" && computerSelection == "SCISSORS")
    {
        returnStr = "You Win! Rock beats Scissors";
        playerPts++;
    }
    else if ( playerSelection == "PAPER" && computerSelection == "SCISSORS")
    {
        returnStr = "You Lose! Scissors beats Paper";
        computerPts++;
    }
    else if ( playerSelection == "PAPER" && computerSelection == "ROCK")
    {
        returnStr = "You Win! Paper beats Rock";
        playerPts++;
    }
    else if ( playerSelection == "SCISSORS" && computerSelection == "ROCK")
    {
        returnStr = "You Lose! Rock beats Scissors";
        computerPts++;
    }
    else if ( playerSelection == "SCISSORS" && computerSelection == "PAPER")
    {
        returnStr = "You Win! Scissors beats Paper";
        playerPts++;
    }
    else
    {
        returnStr = "Tie! Try again";
    }

    // check win condition
    if ( playerPts == 5 )
    {
        returnStr = "Player Has Won!";
        computerPts = 0;
        playerPts = 0;
    }
    else if ( computerPts == 5 )
    {
        returnStr = "Computer Has Won!";
        computerPts = 0;
        playerPts = 0;
    }
    else
    {
        returnStr = returnStr;
    }

    return returnStr;
}

// event listners for the rock button
const btn1 = document.querySelector('#rock-btn');
btn1.addEventListener('click', () => {
    playerSelection = "ROCK";
    computerSelection = computerPlay();
    resultStr = playRound( playerSelection, computerSelection );

    //display results
    const container = document.querySelector('#game-results');
    container.innerText = resultStr;
});

// event listners for the paper button
const btn2 = document.querySelector('#paper-btn');
btn2.addEventListener('click', () => {
    playerSelection = "PAPER";
    computerSelection = computerPlay();
    resultStr = playRound( playerSelection, computerSelection );

    //display results
    const container = document.querySelector('#game-results');
    container.innerText = resultStr;
});

// event listners for the scissors button
const btn3 = document.querySelector('#scissors-btn');
btn3.addEventListener('click', () => {
    playerSelection = "SCISSORS";
    computerSelection = computerPlay();
    resultStr = playRound( playerSelection, computerSelection );

    //display results
    const container = document.querySelector('#game-results');
    container.innerText = resultStr;
});