{//Score
    let playerWins = 0;
    let computerWins = 0;
    let draws = 0;

    //Game
    function playGame(playerInput) {

        //Computer move
        function checkEasyMode() {
            const chekBox = document.getElementById('initEzMode');
            if (chekBox.checked == true) {
                computerMoveEasy();
            } else {
                computerMoveNormal();
            }
        }

        let randomNumber;
        function computerMoveEasy() {
            const randomNumberEasy = Math.floor(Math.random() * 4 + 1);
            randomNumber = randomNumberEasy;
        }
        function computerMoveNormal() {
            const randomNumberNormal = Math.floor(Math.random() * 3 + 1);
            randomNumber = randomNumberNormal;
        }
        checkEasyMode();

        //Get move
        function getMoveName(argMoveId) {
            if (argMoveId == 1) {
                return 'kamień';
            } else if (argMoveId == 2) {
                return 'papier';
            } else if (argMoveId == 3) {
                return 'nożyce';
            } else if (argMoveId == 4) {
                return 'win';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        // Results
        function displayResult(argComputerMove, argPlayerMove) {
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
                printMessage('Remis!')
                draws++;
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
                printMessage('Remis!');
                draws++;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
                printMessage('Remis!');
                draws++;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
                printMessage('Komputer wygrywa!');
                computerWins++;
            } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else if (argComputerMove == 'win') {
                printMessage('Ty wygrywasz!');
                playerWins++;
            } else {
                printMessage('Coś poszło nie tak');
            }
        }
        //Clearing messages
        clearMessages();


        console.info('Wylosowana liczba to: ' + randomNumber);
        let argComputerMove = getMoveName(randomNumber);
        //printMessage('Mój ruch to: ' + argComputerMove);
        //Player move
        //console.log('Gracz wpisał: ' + playerInput);
        let argPlayerMove = getMoveName(playerInput);
        //printMessage('Twój ruch to: ' + argPlayerMove);
        //Results
        displayResult(argComputerMove, argPlayerMove);
        printMessage('|Gracz: ' + playerWins + ' | Komputer: ' + computerWins + ' | Remisy: ' + draws + ' |');
    }
    //Getting pick from player
    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
    //Testing
    document.getElementById('test-run').addEventListener('click', function () {
        for (i = 100; i > 0; i--) {
            let randomNumberTest = Math.floor(Math.random() * 3 + 1);
            playGame(randomNumberTest);
        }
    });
    document.getElementById('reset').addEventListener('click', function () {
        playerWins = 0;
        computerWins = 0;
        draws = 0;
        clearMessages();
    })
}