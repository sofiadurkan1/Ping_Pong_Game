const btnONE = document.getElementById('btnpl1');
const btnSEC = document.getElementById('btnpl2');
const btnTHI= document.getElementById('btnreset');
const spanP1 = document.getElementById('player1');
const spanP2 = document.getElementById('player2');

btnONE. addEventListener("click",increaseP1)
btnSEC.addEventListener("click",increaseP2)
btnTHI.addEventListener("click",resetScores)


// let scores = [0,0];

let scoreP1 = 0;
let scoreP2 = 0;
let winscore = 5;

function increaseP1 (){
    if(scoreP1<winScore)
    scoreP1 ++;
    spanP1.innerHTML=scoreP1;

}

function increaseP2 (){
    if(scoreP2<winScore)

    scoreP2 ++;
    spanP2.innerHTML=scoreP2;

}

function resetScores (){

     scoreP1 = 0;
     scoreP2 = 0;
    spanP1.innerHTML=scoreP1;
    spanP2.innerHTML=scoreP2;

}