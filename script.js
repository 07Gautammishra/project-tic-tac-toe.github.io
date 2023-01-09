console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let gameout = false;
let turn = "X";

// fuction to change turn
const ChangeTurn = ()=>{
    return turn === "X"? "0": "X"
};
// function to check win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2, 0, 5, 0],
        [3, 4, 5, 0, 15, 0],
        [6, 7, 8, 0, 25, 0],
        [0, 3, 6, -10, 15, 90],
        [1, 4, 7, 0, 15, 90],
        [2, 5, 8, 10, 15, 90],
        [0, 4, 8, 0, 15, 45],
        [2, 4, 6, 1, 15, 135],
    ]
    win.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' winer';
            gameout = turn
            gameover.play();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector('.line').style.width = `30vw`;
        }
    })
};

//game logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            // music.play(); 
            boxtext.innerText = turn;
            turn = ChangeTurn();
            audioturn.play();
            checkwin();
            if(!gameout){
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
        }
    })
})

// Add onclick listener to reset button
let reset = document.getElementById('reset')
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
}) 