// function randomly returns either Rock, Paper, or Scissors

function computerPlay() {
    rock = 0;
    paper = 1;
    scissors = 2;
    randNum = Math.floor(Math.random() * 3);

    if ( randNum == rock ) 
    {
        returnVal = rock;
    }
    else if ( randNum == paper )
    {
        returnVal = paper;
    } 
    else 
    {
        returnVal = scissors;
    }

    return returnVal;
}
