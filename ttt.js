const boardSquare = document.querySelectorAll(".square");
const message = document.querySelector(".message");
const button = document.querySelector(".startBtn")

let isXturn = true;
boardSquare.forEach((square, index) => {
    square.addEventListener('click', () => {
        if (square.textContent === "") {
            square.textContent = isXturn ? "X" : "O";
            isXturn = !isXturn;
            console.log(`square ${index} was clicked`);
            console.log(`Value : ${square.textContent}`);
            checkWinner();

        }


    });
});

const disableBoxes = () => {
    for (let square of boardSquare) {
        square.disabled = true;
    }
}

const enableBoxes = () => {
    for (let square of boardSquare) {
        square.disabled = false;
    }
}

button.addEventListener('click', () => {
    boardSquare.forEach((square) => {
        square.textContent = "";
    })
    message.textContent = "";
    enableBoxes();
})

function showWinner(pos1Value) {
    message.innerHTML = `Winner of this game is :     <span class="winner">  ${pos1Value}<span/>`
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
        let pos1Value = boardSquare[combination[0]].textContent
        let pos2Value = boardSquare[combination[1]].textContent
        let pos3Value = boardSquare[combination[2]].textContent

        if (pos1Value !== "" && pos2Value !== "" && pos3Value !== "") {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                console.log("winner", pos1Value)
                showWinner(pos1Value);


            }
        }

    }

}