console.log("Welcome to Tic Tac Toe")
let turn = "X"
let music = new Audio("press.wav")
let gameOver = stop

//Change turn

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Win check

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2,3], [4,5,6,7], [8,9,10,11], [12,13,14,15],
        [0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15],
        [0,5,10,15], [3,6,9,12]
    ];
    wins.forEach(e => {
        if( boxtext[e[0]].innerText!=='',
            boxtext[e[1]].innerText!=='',
            boxtext[e[2]].innerText!=='',
            boxtext[e[3]].innerText!==''){
           if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&&
              (boxtext[e[2]].innerText === boxtext[e[3]].innerText)&&
              (boxtext[e[1]].innerText !== boxtext[e[2]].innerText)&&
              (boxtext[e[0]].innerText !== 0)||
              (boxtext[e[0]].innerText === boxtext[e[2]].innerText)&&
              (boxtext[e[1]].innerText === boxtext[e[3]].innerText))
            document.getElementsByClassName("info")[0].innerText = boxtext[e[0]].innerText + " won"
        }
    });
}

// Game Logic
let boxes = document.getElementsByClassName("box");
boxes= Array.from(boxes);
// console.log(boxes);
boxes.forEach(element =>{
    // console.log(element);
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            checkWin();
            //music.play()
            gameOver()
        }
    })
})

reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    });
})
