console.log("Welcome to Tic Tac Toe");
let turn = "X";
let music = new Audio("press.wav");
let gameOver = false;

// Change turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}

// Highlight Winning Boxes
const highlightWinningBoxes = (winningBoxes) => {
    winningBoxes.forEach(index => {
        let box = document.getElementsByClassName("box")[index];
        box.style.backgroundColor = "#90EE90"; // Light green background
        box.style.border = "2px solid #32CD32"; // Darker green border
    });
}

// Check for Win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText !== '' &&
            boxtext[e[1]].innerText !== '' &&
            boxtext[e[2]].innerText !== ''
        ) {
            if (
                boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
                boxtext[e[1]].innerText === boxtext[e[2]].innerText
            ) {
                highlightWinningBoxes(e);
                document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " won";
                gameOver = true; // Set gameOver to true when someone wins
            }
        }
    });
}

// Check for Draw
const checkDraw = () => {
    let boxtexts = Array.from(document.getElementsByClassName("boxtext"));
    return boxtexts.every(element => element.innerText !== '') && !gameOver;
};

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === "" && !gameOver) {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (checkDraw()) {
                document.getElementsByClassName("info")[0].innerText = "Game Drawn!";
                gameOver = true;
            } else {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            //music.play()
        }
    });
});

// Reset Game
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    let boxcolors = document.querySelectorAll(".box");
    boxcolors.forEach(element => {
        element.style.backgroundColor = "rgb(255, 255, 255)";
        element.style.border = "2px solid rgb(0, 0, 0)";
    });
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    gameOver = false;
    turn = "X";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});
