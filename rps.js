
/*This fonction getComputerChoice return 
randomly rock, paper or scissors */
function getComputerChoice(){           //Declare and named the function
    const randomNumb = Math.random();   //Create variable randomNumb and assigned with Math.random number between 0 and 1
    if(randomNumb >= 0.66){             //I choice to divide 1 by 3 and make 3 interval this line is 1 to 0.66  
        return "scissors";              //Each interval match with scissor, rock or paper and this interval match with scissors and return it
    }
    else if (randomNumb <= 0.33){       //If randomNumb < or = to 0.33 then look line 10 
        return "rock";                  //The function return the string rock 
    }
    else{                               //As the function Math.random return number between 1 and 0 the last interval is between 0.66 and 0.33 no other choice possible that is why i make just else.
        return "paper";                 //The function return the string paper
    }
}

const playerSelection = prompt("rock paper or scissors ?").toLocaleLowerCase(); //Declare and assign the result of prompt function (witch is pop for user can enter value)to playerSelection

const computerSelection = getComputerChoice();                                  //Declare and assign the result of getComputerChoice function to computerSelection

function playRound(playerSelection, computerSelection) {                        //Create playRound function and have to parameter that is the precedent variable
    if(playerSelection === computerSelection){                                  //If playerSelection its strictly equal (value and type) then
        return "It's tie !"                                                     //Function return it's tie
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||(playerSelection === "paper" && computerSelection === "rock")||(playerSelection === "scissors" && computerSelection ==="paper")){
        return "You win "+playerSelection+" beat "+computerSelection+".";       //If the player select rock and the computer scissors or things like that, you know the game. && = and , and || = or, then i hope you understand  
    }                                                                           //Function return "You win rock beat scissors."
    else{
        return "You loose "+computerSelection+" beat "+playerSelection+".";     //And then if other if not match its mean the player loose 
    }
  }
