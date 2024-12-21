let gameSeq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let start = false;
let lavel = 0;

let h2 = document.querySelector("h2");

document.addEventListener("touchstart", function() {
     if (start == false) {
          // console.log("Game started")
          start = true;
     }

     levelUp();
})

function btnFlash(btn) {
     btn.classList.add("flash");
     setTimeout(function() {
          btn.classList.remove("flash");
     }, 250);
}


function userFlash(btn) {
     btn.classList.add("userFlash");
     setTimeout(function() {
          btn.classList.remove("userFlash");
     }, 250);
}

function levelUp() {
     userseq = [];
     lavel++;
     h2.innerText = `Lavel ${lavel}`;
     
     let randIdx = Math.floor(Math.random() * 3);
     let randColor = btns[randIdx];
     let randBtn = document.querySelector(`.${randColor}`);
     gameSeq.push(randColor);
     // console.log(gameSeq);
     
     btnFlash(randBtn);
}

function checkAns(idx) {

     if (userseq[idx] === gameSeq[idx]) {
          if (userseq.length == gameSeq.length) {
               setTimeout(levelUp, 1000);
               
          }
     } else {
          h2.innerHTML = `Game Over! Your score was <b>${lavel}</b> <br> Press any key to start.`;
          document.querySelector("body").style.backgroundColor = "red";
          setTimeout(function() {
               document.querySelector("body").style.backgroundColor = "white";
          }, 1000)
          reset();
     }
}

function btnPress() {
     
     let btn = this;
     userFlash(btn);

     let userColor = btn.getAttribute("id");
     userseq.push(userColor);

     checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
     btn.addEventListener("click", btnPress);
}

function reset() {
     start = false;
     gameSeq = [];
     userseq = [];
     lavel = 0;
}
