const prompt = require("prompt-sync")();
// class cordinate {
//     constructor(row, col){
//         this.row = row;
//         this.col = col;
//     }

// }
let array = [
    [" - ", " - ", " - "],
    [" - ", " - ", " - "],
    [" - ", " - ", " - "],
];

let noOfPlayers = parseInt(prompt("Enter the number of players (1 or 2): "));
printArray(array);
switch (noOfPlayers) {
    case 1: {
        singlePlayer(array);
        break;
    }
    case 2: {
        multiPlayer(array);
        break;
    }
    default: {
        console.log("Enter number 1 or 2");
    }
}

function randomNoGenerator(){
    let compRowNo = Math.round(Math.random() * 3);
    let compColNo = Math.round(Math.random() * 3);

}

function winningCombinationFirst(array) {
    if (
        (array[0][0] == " 0 " && array[0][1] == " 0 " && array[0][2] == " 0 ") ||
        (array[1][0] == " 0 " && array[1][1] == " 0 " && array[1][2] == " 0 ") ||
        (array[2][0] == " 0 " && array[2][1] == " 0 " && array[2][2] == " 0 ") ||
        (array[0][0] == " 0 " && array[1][0] == " 0 " && array[2][0] == " 0 ") ||
        (array[0][1] == " 0 " && array[1][1] == " 0 " && array[2][1] == " 0 ") ||
        (array[0][2] == " 0 " && array[1][2] == " 0 " && array[2][2] == " 0 ") ||
        (array[0][0] == " 0 " && array[1][1] == " 0 " && array[2][2] == " 0 ") ||
        (array[2][0] == " 0 " && array[1][1] == " 0 " && array[0][2] == " 0 ")
    ) {
        return true;
    }
}
function winningCombinationSecond(array) {
    if (
        (array[0][0] == " X " && array[0][1] == " X " && array[0][2] == " X ") ||
        (array[1][0] == " X " && array[1][1] == " X " && array[1][2] == " X ") ||
        (array[2][0] == " X " && array[2][1] == " X " && array[2][2] == " X ") ||
        (array[0][0] == " X " && array[1][0] == " X " && array[2][0] == " X ") ||
        (array[0][1] == " X " && array[1][1] == " X " && array[2][1] == " X ") ||
        (array[0][2] == " X " && array[1][2] == " X " && array[2][2] == " X ") ||
        (array[0][0] == " X " && array[1][1] == " X " && array[2][2] == " X ") ||
        (array[2][0] == " X " && array[1][1] == " X " && array[0][2] == " X ")
    ) {
        return true;
    }
}

function singlePlayer(array) {
    let rowNo = parseInt(prompt("Enter the number of row (0, 1, 2 ): "));
    let colNo = parseInt(prompt("Enter the number of column (0, 1, 2 ): "));
    array[rowNo][colNo] = " 0 ";
    printArray(array);
    if (winningCombinationFirst(array)) {
        console.log("You Win!");
        return;
    }
    console.log();
    console.log();
    console.log();

    let compRowNo = Math.round(Math.random() * 3);
    let compColNo = Math.round(Math.random() * 3);
    
    array[compRowNo][compColNo] = " X ";
    printArray(array);

    if (winningCombinationSecond(array)) {
        console.log("You Loss!");
        return;
    }
    singlePlayer(array);
}
function multiPlayer(array) {
    console.log("First Player Turn: ");
    let rowNo = parseInt(prompt("Enter the number of row (0, 1, 2 ): "));
    let colNo = parseInt(prompt("Enter the number of column (0, 1, 2 ): "));
    array[rowNo][colNo] = " 0 ";
    if (winningCombinationFirst(array)) {
        // printArray(array);

        console.log("First Player Win!");
        return;
    } else {
        printArray(array);

        console.log("Second Player Turn");
        let secrowNo = parseInt(prompt("Enter the number of row (0, 1, 2 ): "));
        let seccolNo = parseInt(prompt("Enter the number of column (0, 1, 2 ): "));
        array[secrowNo][seccolNo] = " X ";
        printArray(array);
    }

    if (winningCombinationSecond(array)) {
        // printArray(array);
        console.log("Second Player Win!");
        return;
    }
    if (winningCombinationFirst(array) || winningCombinationSecond(array)) {
    }
    multiPlayer(array);
}

function printArray(array) {
    for (let i = 0; i < 3; i++) {
        let col = "";
        for (let j = 0; j < 3; j++) {
            col += ` ${array[i][j]}   `;
        }
        console.log(col);
    }
}
