// Access the button first
let buttons = document.querySelectorAll(".gamebutton");

//Access the reset button
let resetBtn = document.querySelectorAll(".reset-btn");

// Player Turn
let turnO = true;

//Winning Patterns 
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Make clickable buttons
buttons.forEach((gamebutton) => {
    gamebutton.addEventListener("click", () => {
       // console.log("Buttons has clicked"); // checking button has clicked.

        // find player turn and which button clicked
        if(turnO ){
            gamebutton.innerText = "O"; //Player O
            turnO = false;
        } else{
            gamebutton.innerText = "X"; // Player X
            turnO = true;
        }

        gamebutton.disabled = true; // Double click not available

        checkWinner ();
    })
})

const checkWinner = () => {
     for(let pattern of winPattern){
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
            }
        }
     }
}