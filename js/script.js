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
    printMessage('Mój wybór to ' + argComputerMove + ', a Twój ' + argPlayerMove);
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!')
    } else if( argComputerMove =='nożyce' && argPlayerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove =='nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove =='nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else if( argComputerMove =='papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if( argComputerMove =='papier' && argPlayerMove == 'kamień'){
        printMessage('Komputer wygrywa!');
    } else if( argComputerMove =='papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else {
        printMessage('Coś poszło nie tak');
    }
}
//Computer move
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);
//Player moves
let playerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerMove);
let argPlayerMove = getMoveName(playerMove);
printMessage('Twój ruch to: ' + argPlayerMove);
//Results
displayResult(argComputerMove, argPlayerMove);

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