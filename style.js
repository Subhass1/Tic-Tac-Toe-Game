// Access the button first
let buttons = document.querySelectorAll(".gamebutton");

//Access the reset button
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

// Player Turn
let turnO = true;
let count = 0; //To Track Draw

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
        count++;

      let isWinner =   checkWinner ();
      if(count === 9 && !isWinner){
        gameDraw();
      }
    })
});

// reset game btn
const resetGame = () => {
turnO  = true;
enabledbuttons ();
msgContainer.classList.add("hide")
};

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disabledbuttons();
  };

//function of winner declared then donot fill the boxes
const disabledbuttons = () =>{
    for(let gamebutton of buttons){
        gamebutton.disabled = true;
    }
};

const enabledbuttons = () =>{
    for(let gamebutton of buttons){
        gamebutton.disabled = false;
        gamebutton.innerText = "";
    }
};


const showWinner = (winner) => {
    msg .innerText = `Congraculation, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledbuttons(); // if any player wins the game and boxes are empty then taggle the boxes do not fill, function calls 
}

const checkWinner = () => {
     for(let pattern of winPattern){
        let pos1val = buttons[pattern[0]].innerText;
        let pos2val = buttons[pattern[1]].innerText;
        let pos3val = buttons[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);

                showWinner (pos1val); // winner function calling
            }
        }
     }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

