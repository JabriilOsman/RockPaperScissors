//1) Først skal jeg lage en funksjon for computer, hvor den skal randomly returnere 
//rock, paper og scissor 

//2) Så skal jeg lage en input for bruker, der han velger rock, paper og scissor 

//3) Så lager jeg en funksjon hvor vi tester spillet, der vi tar bruker input og computerchoice, 
// deretter lager vi en if-setning
console.log("Hi");


const valg = ["rock", "paper", "scissor"];

//let playerSelection = prompt("Velg Rock, Paper, Scissor");




function getComputerChoice(){
        const computervalg = valg [Math.floor(Math.random()* valg.length)];


        
        return computervalg;

        

        

}



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
        let scorePlayer = 0;
        let scoreComputer = 0;

        console.log("Welcome")
        for( let i= 0; i<5; i++){
                const playerSelection = getPlayerChoice();
                const computerSelection = getComputerChoice();
                console.log(PlayingSingleGame(playerSelection,computerSelection));
                console.log("------------------------")

                if (checkWinner(playerSelection,computerSelection) == "Player"){
                        scorePlayer++;
                } else if (checkWinner(playerSelection,computerSelection) == "Computer"){
                        scoreComputer++;
                }
                
        }
        console.log("Game over")
        if(scorePlayer>scoreComputer){
                console.log("The player was the Winner" )
        } else if(scoreComputer>scorePlayer){
                console.log("The computer was the Winner" )  
        } else{
                console.log("It is a tie")
        }
        return "Player score is" + scorePlayer + "and computer score is" + scoreComputer
        
        
}

playGame()


