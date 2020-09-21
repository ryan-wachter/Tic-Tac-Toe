let board = [];
let turn = 0;
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetGame);

const gameBoard = (() => {
    for(i = 0; i < 9; i++){
        const square = document.createElement('div');
        const container = document.getElementById('container');
        square.classList.add('board-square');
        container.appendChild(square);
        square.addEventListener('click', function(){
            if(this.textContent === 'X' || this.textContent === 'O' || this.classList.contains('frozen')){
                return;
            }

            if(turn % 2 === 0){
                this.textContent = 'X';
                turn++;
                if(turn >= 5){
                    checkWin('X');
                }
            }
            else if(turn %2 === 1){
                this.textContent = 'O';
                turn++;
                if(turn >= 5){
                    checkWin('O');
                }
            }
        });
        board[i] = square;
    }
})();

function checkWin(move){
    let winCond = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const announce = document.getElementById('announce');

    winCond.forEach(function(subArray){
        let count = 0;
        subArray.forEach(function(a){
            if(board[a].textContent === move){
                count++;
                if(count === 3){
                    if(move === 'X'){
                        announce.textContent = 'Player 1 wins!';
                        for(i = 0; i < 9; i++){
                            board[i].classList.add('frozen');
                        }
                    }
                    else if(move === 'O'){
                        announce.textContent = 'Player 2 wins!';
                        for(i = 0; i < 9; i++){
                            board[i].classList.add('frozen');
                        }
                    }
                }
            }
        })
    });
}

function resetGame(){
    for(i = 0; i < 9; i++){
        board[i].classList.remove('frozen');
        board[i].textContent = '';
        turn = 0;
        announce.textContent = '';
    }
}

const Player = (name) => {

    return {name};
}