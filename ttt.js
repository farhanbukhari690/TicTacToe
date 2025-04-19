const boardSquare = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const button = document.querySelector(".startBtn");

let isXturn = true;

boardSquare.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (square.textContent === "") {
            square.textContent = isXturn ? "X" : "O";
            isXturn = !isXturn;
            checkWinner();
        }
    });
});

const disableBoxes = () => {
    boardSquare.forEach((square) => {
        square.style.pointerEvents = 'none';  // Disable click events
    });
}

const enableBoxes = () => {
    boardSquare.forEach((square) => {
        square.style.pointerEvents = 'auto';  // Enable click events
    });
}

button.addEventListener('click', () => {
    boardSquare.forEach((square) => {
        square.textContent = "";
    })
    message.textContent = "";
    enableBoxes();
});

function showWinner(pos1Value) {
    message.innerHTML = `Winner of this game is :  ${pos1Value}`;
    disableBoxes();
}

function checkWinner() {
    let winnerCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combination of winnerCombination) {
        let pos1Value = boardSquare[combination[0]].textContent;
        let pos2Value = boardSquare[combination[1]].textContent;
        let pos3Value = boardSquare[combination[2]].textContent;

        if (pos1Value !== "" && pos2Value !== "" && pos3Value !== "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                showWinner(pos1Value);
                return;
            }
        }
    }

    checkDraw();
}

function checkDraw() {
    const isDraw = [...boardSquare].every(square => square.textContent !== "");
    if (isDraw) {
        message.innerHTML = "It's a draw!";
    }
}
