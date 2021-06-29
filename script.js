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
    let rockUrl= "https://image.shutterstock.com/image-vector/hand-that-rocks-finger-linear-600w-1916914304.jpg" ;
    let paperUrl = "https://image.shutterstock.com/image-vector/business-man-hand-hold-paper-600w-373891489.jpg" ;
    let scissorUrl = "https://image.shutterstock.com/image-photo/female-hand-holds-hairdresser-scissors-600w-1780121387.jpg" ;
    let playerScore = 0;
    let computerScore =0;
   
    window.addEventListener('click', (e) =>{
    const playerSelection = e.target.alt;
    const computerSelection = computerPlay();
    const computerSelectionDisplay = document.querySelector('.machine-side');
    const resultDisplay = document.querySelector('.result-display');
    const winResult =  '<h1 style="color:green;">Congrats you win</h1>';
    const loseResult =  '<h1 style="color:red;">Too bad you lose.</h1>';
    const drawResult =  '<h1 style="color:black;">Its a draw.</h1>';
    function playRound(playerSelection,computerSelection){
        if(playerSelection === 'rock' && computerSelection === 'paper'){
            computerSelectionDisplay.innerHTML = `<img src= ${paperUrl} class="computer-selection">`;
            resultDisplay.innerHTML = loseResult;
        }
        else if(playerSelection === 'rock' && computerSelection === 'scissor'){
            computerSelectionDisplay.innerHTML = `<img src= ${scissorUrl}>`;
            resultDisplay.innerHTML = winResult;
        } 
        else if (playerSelection==='rock' && computerSelection === 'rock'){
            computerSelectionDisplay.innerHTML = `<img src= ${rockUrl}>`;
            resultDisplay.innerHTML = drawResult;
        }
        else if(playerSelection==='paper' && computerSelection==='rock') {
            computerSelectionDisplay.innerHTML = `<img src= ${rockUrl}>`;
            resultDisplay.innerHTML = winResult;
        }
        else if(playerSelection==='paper' && computerSelection ==='paper'){
            computerSelectionDisplay.innerHTML = `<img src= ${paperUrl}>`;
            resultDisplay.innerHTML = drawResult;
        }
        else if(playerSelection==='paper' && computerSelection ==='scissor'){
            computerSelectionDisplay.innerHTML = `<img src= ${scissorUrl}>`;
            resultDisplay.innerHTML = loseResult;
            
        }
        else if(playerSelection==='scissor' && computerSelection ==='rock'){
            computerSelectionDisplay.innerHTML = `<img src= ${rockUrl}>`;
            resultDisplay.innerHTML = loseResult;
        }
        else if(playerSelection==='scissor' && computerSelection ==='paper'){
            computerSelectionDisplay.innerHTML = `<img src= ${paperUrl}>`;
            resultDisplay.innerHTML = winResult;
        }
        else if(playerSelection==='scissor' && computerSelection ==='scissor'){
            computerSelectionDisplay.innerHTML = `<img src= ${scissorUrl}>`;
            resultDisplay.innerHTML = drawResult;
        }
        
        }
        playRound(playerSelection,computerSelection);
        console.log(playerSelection,computerSelection);
    }); 
    

    
 
    
    

}

game();