//1) Først skal jeg lage en funksjon for computer, hvor den skal randomly returnere 
//rock, paper og scissor 

//2) Så skal jeg lage en input for bruker, der han velger rock, paper og scissor 

//3) Så lager jeg en funksjon hvor vi tester spillet, der vi tar bruker input og computerchoice, 
// deretter lager vi en if-setning
console.log("Hi");


const knapp1 = document.getElementById("rock");

const knapp2 = document.getElementById("paper");

const knapp3 = document.getElementById("scissor");

knapp1.addEventListener("click", () => {
        playerSelection= knapp1.innerText;
        console.log(playerSelection);
        PlayingSingleGame();
      });

knapp2.addEventListener("click", () => {
        playerSelection= knapp2.innerText;
        console.log(playerSelection);
        PlayingSingleGame();
      });

knapp3.addEventListener("click", () => {
        playerSelection= knapp3.innerText;
        console.log(playerSelection);
        PlayingSingleGame();
      });



const valg = ["rock", "paper", "scissor"];





function getComputerChoice(){
        const computervalg = valg [Math.floor(Math.random()* valg.length)];
        console.log(computervalg);
        return computervalg;  
        

}
getComputerChoice();



function checkWinner(playerSelection, computerSelection){
        if (playerSelection == computerSelection){
                return "Tie";
        }
        else if(
                (playerSelection==="rock" && computerSelection==="scissor" ) ||
                (playerSelection==="scissor" && computerSelection==="paper") ||
                (playerSelection==="paper" && computerSelection==="rock" )

        ) {
                return "Player"
        }
        else{
             return "Computer" 
        }
}

function PlayingSingleGame(playerSelection, computerSelection){
        
        const result = checkWinner(playerSelection, computerSelection);
        if (result == "Tie"){
                return "It is a tie"
        }
        else if(result== "Player"){
                return `Player wins  ${playerSelection} beats ${computerSelection}`
        }
        else{
                return `Player lose ${computerSelection} beats ${playerSelection}`
        }

}



function getPlayerChoice(){ 
        let checkInput = false;
        while(checkInput == false) {
                const choice = prompt("Rock Paper Scissor");
                if (choice == null){
                        continue;
                }
                const choiceInLower = choice.toLowerCase();
                if (valg.includes(choiceInLower)){
                        checkInput= true;
                        return choiceInLower;
                }
                

        }

}






function playGame(){
        
        
}

playGame()


