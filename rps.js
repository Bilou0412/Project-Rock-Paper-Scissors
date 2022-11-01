
let computerSelection = "";
let playerSelection = "";

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




const buttons = document.querySelectorAll('#container > #photoUser > img')

let userPoint = 0;
let computerPoint = 0;


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        computerSelection = getComputerChoice(); 
        playerSelection = button.id ;
        console.log (playerSelection)
        let winOr = doPoint(playerSelection, computerSelection)
            if((winOr === 2)){
                userPoint++;
                if(userPoint === 5){
                    alert("T'as fumé l'IA ")
                    userPoint = 0;
                    computerPoint = 0;
                }
                displayScore();
                displayWinner(1);
            }
            else if(winOr === 3){
                computerPoint++;
                if(computerPoint === 5){
                    alert("T'AS PERDU")
                    userPoint = 0;
                    computerPoint = 0;
                }
                displayScore();
                displayWinner(2);
            }
            else{
                displayScore();
                displayWinner(3);
            }
    });
});

let imgs = document.querySelectorAll('#container > #photoUser > img')
      
imgs.forEach((img)=>{
        img.addEventListener('mouseover',function(){
        img.classList.add('animation')

      })
      })

imgs.forEach((img)=>{
        img.addEventListener('mouseout',function(){
        img.classList.remove('animation')

      })
      })

      const score = document.querySelector('div.score');
      console.log(score)

function displayScore(){
    score.replaceChildren();
    
    const scoreIA = document.createElement('div');
    scoreIA.classList.add('scoreIA');
    scoreIA.innerHTML = `Score IA  <br>${computerPoint}`;
    score.appendChild(scoreIA);

    const scoreUser = document.createElement('div');
    scoreUser.classList.add('scoreUser');
    scoreUser.innerHTML = "Score User  <br>"+userPoint;
    score.appendChild(scoreUser);


}
const scoreIA = document.createElement('div');
scoreIA.classList.add('scoreIA');
scoreIA.innerHTML = `Score IA  <br>${computerPoint}`;
score.appendChild(scoreIA);  
const scoreUser = document.createElement('div');
scoreUser.classList.add('scoreUser');
scoreUser.innerHTML = "Score User  <br>"+userPoint;
score.appendChild(scoreUser);

const pouce = document.querySelector('.choix')  
function displayWinner(number){
    
    if(number == 1){
    pouce.innerHTML = '<img class=left src="img/pouceUp.png" alt=""></img><img class=right src="img/pouceBas.png" alt=""></img>';
    beat.innerHTML = "<p>"+playerSelection+" VS "+computerSelection+"</p>"
    }
    else if(number == 2){
        pouce.innerHTML = '<img class=left src="img/pouceBas.png" alt=""></img><img class=right src="img/pouceUp.png" alt=""></img>'; 
        beat.innerHTML = "<p>"+playerSelection+" VS "+computerSelection+"</p>" 
    }
    else{
        pouce.innerHTML = '<img class=left src="img/egaliter.png" alt=""></img><img class=right src="img/egaliter.png" alt=""></img>'; 
        beat.innerHTML = "<p>"+playerSelection+" VS "+computerSelection+"</p>"
    }

}

const beat = document.querySelector('.beat')
function winner(){
    if(number == 1){
        beat.innerHTML = "<p>YOU WIN</p>"
        }
        else if(number == 2){
            
            beat.innerHTML = "<p>YOU LOSE</p>" 
        }
}
      

