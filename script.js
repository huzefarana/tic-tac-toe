console.log("Welcome to Tic Tac Toe")
let turn = "X"

//Change turn

const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Win check

const checkWin = ()=>{

}

// Game Logic
let boxes = document.getElementsByClassName("box");
boxes= Array.from(boxes);
console.log(boxes);
boxes.forEach(element =>{
    console.log(element);
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ""){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})