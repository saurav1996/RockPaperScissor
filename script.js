function computerPlay(){
    let random = Math.floor(Math.random()*3)+1;
    let returnValue = '';
    if (random===1){
        returnValue = 'rock';
    }
    else if (random===2){
        returnValue = 'paper';
    }
    else {
        returnValue = "scissor";
    }
    return returnValue;
}

// console.log(playerSelection,computerSelection);


function game(){
    let playerScore = 0;
    let computerScore =0;
    for(let i = 0; i<=4; i++){
    const playerSelection = prompt("Enter rock paper or scissor:").toLowerCase();
    const computerSelection = computerPlay();
        function playRound(playerSelection,computerSelection){
            if(playerSelection === 'rock' && computerSelection === 'paper'){
                console.log(i,"You lose! Paper beats rock.");
                computerScore++;
            }
            else if(playerSelection === 'rock' && computerSelection === 'scissor'){
                console.log(i,"Congrats! Rock beats Scissor");
                playerScore++;
            } 
            else if (playerSelection==='rock' && computerSelection === 'rock'){
                console.log(i,"Its a draw !");
            }
            else if(playerSelection==='paper' && computerSelection==='rock') {
                console.log(i,"Congrat's Paper beats rock.");
                playerScore++;
            }
            else if(playerSelection==='paper' && computerSelection ==='paper'){
                console.log(i,"Its a draw !");
            }
            else if(playerSelection==='paper' && computerSelection ==='scissor'){
                console.log(i,"You lose! Scissor beats paper");
                computerScore++;
            }
            else if(playerSelection==='scissor' && computerSelection ==='rock'){
                console.log(i,"You lose! rock beats scissor");
                computerScore++;
            }
            else if(playerSelection==='scissor' && computerSelection ==='paper'){
                console.log(i,"Congrats! scissor beats rock");
                playerScore++;
            }
            else if(playerSelection==='scissor' && computerSelection ==='scissor'){
                console.log(i,"Its a draw!")
            }
            
            }
            playRound(playerSelection,computerSelection);
            console.log(playerSelection,computerSelection);
    } 
    
    if(playerScore>computerScore){
        console.log("you win the final game!")
    }
    else if(playerScore===computerScore){
        console.log("The final game is a draw.")
    }
    else{
        console.log("You lose the final game!")
    }
}

game();