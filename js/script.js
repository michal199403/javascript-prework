//Score
var playerWins = 0;
var computerWins = 0;
var draws = 0;
//Game
function playGame(playerInput){

    //Functions
    function getMoveName(argMoveId){
        if(argMoveId == 1){
          return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        } else {
          printMessage('Nie znam ruchu o id ' + argMoveId + '.');
          return 'nieznany ruch';
        }
      }

      function displayResult(argComputerMove, argPlayerMove){
        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
            computerWins++;
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!')
            draws++;
        } else if( argComputerMove =='nożyce' && argPlayerMove == 'papier'){
            printMessage('Komputer wygrywa!');
            computerWins++;
        } else if( argComputerMove =='nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else if( argComputerMove =='nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
            draws++;
        } else if( argComputerMove =='papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
            draws++;
        } else if( argComputerMove =='papier' && argPlayerMove == 'kamień'){
            printMessage('Komputer wygrywa!');
            computerWins++;
        } else if( argComputerMove =='papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
            playerWins++;
        } else {
            printMessage('Coś poszło nie tak');
        }
    }
    //Clearing messages
    clearMessages();
    //Computer move
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let argComputerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + argComputerMove);
    //Player moves
    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);
    let argPlayerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + argPlayerMove);
    //Results
    displayResult(argComputerMove, argPlayerMove);
    printMessage('|Gracz: ' + playerWins + ' | Komputer: ' + computerWins + ' | Remisy: ' + draws + ' |');
}
//Getting pick from player
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  });

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
  });

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
  });



/* Trash
if(randomNumber == 1){
  computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
} else {
    printMessage('Coś poszło nie tak');
}
*/
/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
}
*/