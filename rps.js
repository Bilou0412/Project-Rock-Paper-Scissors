let playerSelection = "";
let computerSelection = "";
startGame();

function getUserChoice(){
    let userChoice = "Empty"
    userChoice = prompt("rock paper or scissors ?")
    if(userChoice != null){
       return userChoice.toLocaleLowerCase(); 
    }
    else{
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}

function getComputerChoice(){           
    const randomNumb = Math.random();   
    if(randomNumb >= 0.66){             
        return "scissors";              
    }
    else if (randomNumb <= 0.33){       
        return "rock";                  
    }
    else{                               
        return "paper";                 
    }
}

function startGame(){
    const wantPlay = confirm("Did you want play rock paper scissors")
    if (wantPlay == true){
        alert("The rules are simple.\nRock beat scissors, scissors beat paper, paper beat rock.\nYou play 5 rounds.\nIf its tie we remake lets go !!")
        playerSelection = getUserChoice(); 
        computerSelection = getComputerChoice(); 
        game();
    }
    else{
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
} 

function game(){
    let userPoint = 0;
    let computerPoint = 0;
    while(userPoint < 5 && computerPoint < 5){
        let winOr = doPoint(playerSelection, computerSelection)
        if(winOr === 2){
            userPoint++;
            if(userPoint === 5){
                alert("You win the Game and have 5 points")
                startGame()
            }
            alert("You win "+playerSelection+" beat "+computerSelection+".\nYou have "+userPoint+" points and the computer have "+computerPoint+" points.")
            playerSelection = getUserChoice();
            computerSelection = getComputerChoice();
        }
        else if(winOr === 3){
            computerPoint++;
            if(computerPoint === 5){
                alert("You lose the game computer have 5 points")
                startGame()
            }
            alert("You loose "+computerSelection+" beat "+playerSelection+".\nYou have "+userPoint+" points and the computer have "+computerPoint+" points.")
            playerSelection = getUserChoice();
            computerSelection = getComputerChoice();
        }
        else{
            alert("It's tie !!\nYou have "+userPoint+" points and the computer have "+computerPoint+" points.")
            playerSelection = getUserChoice();
            computerSelection = getComputerChoice();
        }
    }
    
}

function doPoint(playerSelection, computerSelection){                       
    if(playerSelection === computerSelection){
        return 1;                                                    
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "scissors" && computerSelection ==="paper")){
        return 2;         
    }                                                                           
    else{
        return 3;      
    }
}