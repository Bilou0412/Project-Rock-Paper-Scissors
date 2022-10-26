
/*This fonction getComputerChoice return 
randomly rock, paper or scissors */
function getComputerChoice(){           //Declare and named the function
    const randomNumb = Math.random();   //Create variable randomNumb and assigned with Math.random number between 0 and 1
    if(randomNumb >= 0.66){             //I choice to divide 1 by 3 and make 3 interval 
        return "scissors";              //Each interval match with scissor, rock or paper 
    }
    else if (randomNumb <= 0.33){
        return "rock";                  //And finally return the string 
    }
    else{
        return "paper";
    }
}
console.log(getComputerChoice())
