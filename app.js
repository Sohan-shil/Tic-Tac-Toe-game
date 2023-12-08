let buttons = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let winnerMessage = document.querySelector(".winner");
let newGame = document.querySelector("newGame");
let message = document.querySelector("p");

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let firstTurn = true;
let count = 0;

buttons.forEach((btn)=> {
    btn.addEventListener("click" , ()=> {
        if (firstTurn) {
            btn.innerHTML = "0";  //Player 1
            firstTurn = false;
        } else {
            btn.innerText = "X";  //Player 2
            firstTurn = true; 
        }
        btn.disabled = true;
        count++;
        let won = winner();
        if (count===9 && !won) {
            draw();
        }
    })
})

const winner = () => {
   for (let patterns of winPatterns) {
       let firstPosition = buttons[patterns[0]].innerText; 
       let secondPosition = buttons[patterns[1]].innerText; 
       let thirdPosition = buttons[patterns[2]].innerText; 
       
       if (firstPosition != "" && secondPosition != "" && thirdPosition != "") {
        if (firstPosition===secondPosition && secondPosition===thirdPosition) {
            displayWinner(firstPosition);
        }
       }
}
}

const draw = () => {
    message.innerText = `Oops!! Game was a Draw.\n Start Over`;
    winnerMessage.classList.remove("winner")
    disableButton();
}

const displayWinner = (win) => { 
    winnerMessage.classList.remove("winner");
    message.innerText = `Congratulations🎊\n Winner is Player "${win}"`
    disableButton();
}

const disableButton = () => {
    for(let btn of buttons) {
        btn.disabled = true;
    }
}

const enableButton = () => {
    for(let btn of buttons){
        btn.disabled = false;
        turn = true;
        btn.innerText = ""
    }
}

const gameReset = () => {
    turn = true;
    count = 0;
    enableButton();
    winnerMessage.classList.add("winner");
}

reset.addEventListener("click", gameReset);

