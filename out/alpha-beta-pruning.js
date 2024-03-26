// // // Tic-Tac-Toe board representation (using a 2D array)
// // type Board = string[][];
// // // Player symbols (X or O)
// // const PLAYER_X = "X";
// // const PLAYER_O = "O";
// // // Empty cell symbol
// // const EMPTY_CELL = "";
// // // Function to check if a cell is empty
// // function isEmptyCell(board: Board, row: number, col: number): boolean {
// //   return board[row][col] === EMPTY_CELL;
// // }
// // // Function to check if a player has won
// // function hasWon(board: Board, player: string): boolean {
// //   // Check rows (similar logic for columns and diagonals)
// //   for (let i = 0; i < board.length; i++) {
// //     if (board[i].every((cell) => cell === player)) {
// //       return true;
// //     }
// //   }
// //   // ... (implement checks for columns and diagonals as before)
// //   return false;
// // }
// // // Function to check if the board is full (no empty cells)
// // function isBoardFull(board: Board): boolean {
// //   for (let i = 0; i < board.length; i++) {
// //     for (let j = 0; j < board.length; j++) {
// //       if (isEmptyCell(board, i, j)) {
// //         return false;
// //       }
// //     }
// //   }
// //   return true;
// // }
// // // Minimax function with alpha-beta pruning
// // function minimax(board: Board, depth: number, isMaximizingPlayer: boolean, alpha: number, beta: number): number {
// //   // Base cases (same as before)
// //   if (depth === 0 || isBoardFull(board)) {
// //     // ... (evaluation logic)
// //     return score; // **Fix 1: Pass the score variable to the return statement**
// //   }
// //   if (isMaximizingPlayer) {
// //     let bestScore = -Infinity; // Initialize for maximizing player
// //     for (let i = 0; i < board.length; i++) {
// //       for (let j = 0; j < board.length; j++) {
// //         if (isEmptyCell(board, i, j)) {
// //           // ... (make temporary move, recursive call, undo move)
// //           bestScore = Math.max(bestScore, score); // **Fix 2: Use the calculated score from the recursive call**
// //           alpha = Math.max(alpha, bestScore);
// //           if (beta <= alpha) {
// //             break;
// //           }
// //         }
// //       }
// //     }
// //     return bestScore;
// //   } else {
// //     let bestScore = Infinity; // Initialize for minimizing player
// //     for (let i = 0; i < board.length; i++) {
// //       for (let j = 0; j < board.length; j++) {
// //         if (isEmptyCell(board, i, j)) {
// //           // Make a temporary move (place opponent's mark)
// //           board[i][j] = PLAYER_O;
// //           // Recursively call minimax for AI's move
// //           let score = minimax(board, depth - 1, true, alpha, beta); // Reset alpha-beta for each move
// //           // Undo the temporary move
// //           board[i][j] = EMPTY_CELL;
// //           // Update best score based on minimizing principle
// //           bestScore = Math.min(bestScore, score);
// //           beta = Math.min(beta, bestScore);
// //           // Prune branches if minimizing score is already less than alpha
// //           if (alpha >= beta) {
// //             break;
// //           }
// //         }
// //       }
// //     }
// //     return bestScore;
// //   }
// // }
// // function findBestMove(board: Board, depth: number): { row: number; col: number } {
// //     let bestRow = -1;
// //     let bestCol = -1;
// //     let bestScore = isMaximizingPlayer ? -Infinity : Infinity; // Initialize based on maximizing player
// //     for (let i = 0; i < board.length; i++) {
// //         for (let j = 0; j < board.length; j++) {
// //             if (isEmptyCell(board, i, j)) {
// //                 // Make a temporary move
// //                 board[i][j] = PLAYER_X;
// //                 // Call minimax to evaluate the move
// //                 let score = minimax(board, depth - 1, false, -Infinity, Infinity); // Reset alpha-beta for each move
// //                 // Undo the temporary move
// //             }
// //         }
// //     }
// // }
// import { find } from "lodash";
// const prompt = require("prompt-sync")();
// const WIN = 1000;
// const DRAW = 0;
// const LOSS = -1000;
// const AI_MARKER = "O";
// const PLAYER_MARKER = "X";
// const EMPTY_SPACE = "-";
// const START_DEPTH = 0;
// function print_game_state(state: number): void {
//     if (WIN === state) {
//         console.log("WIN");
//     } else if (DRAW === state) {
//         console.log("DRAW");
//     } else if (LOSS === state) {
//         console.log("LOSS");
//     }
// }
// const winning_states: Array<Array<[number, number]>> = [
//     [
//         [0, 0],
//         [0, 1],
//         [0, 2],
//     ],
//     [
//         [1, 0],
//         [1, 1],
//         [1, 2],
//     ],
//     [
//         [2, 0],
//         [2, 1],
//         [2, 2],
//     ],
//     [
//         [0, 0],
//         [1, 0],
//         [2, 0],
//     ],
//     [
//         [0, 1],
//         [1, 1],
//         [2, 1],
//     ],
//     [
//         [0, 2],
//         [1, 2],
//         [2, 2],
//     ],
//     [
//         [0, 0],
//         [1, 1],
//         [2, 2],
//     ],
//     [
//         [2, 0],
//         [1, 1],
//         [0, 2],
//     ],
// ];
// function print_board(board: Array<Array<string>>): void {
//     console.log();
//     console.log(board[0][0] + " | " + board[0][1] + " | " + board[0][2]);
//     console.log("----------");
//     console.log(board[1][0] + " | " + board[1][1] + " | " + board[1][2]);
//     console.log("----------");
//     console.log(board[2][0] + " | " + board[2][1] + " | " + board[2][2]);
//     console.log();
// }
// function get_legal_moves(board: Array<Array<string>>): Array<[number, number]> {
//     const legal_moves: Array<[number, number]> = [];
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (board[i][j] !== AI_MARKER && board[i][j] !== PLAYER_MARKER) {
//                 legal_moves.push([i, j]);
//             }
//         }
//     }
//     return legal_moves;
// }
// function position_occupied(board: Array<Array<string>>, pos: [number, number]): boolean {
//     const legal_moves = get_legal_moves(board);
//     for (let i = 0; i < legal_moves.length; i++) {
//         if (pos[0] === legal_moves[i][0] && pos[1] === legal_moves[i][1]) {
//             return false;
//         }
//     }
//     return true;
// }
// function get_occupied_positions(board: Array<Array<string>>, marker: string): Array<[number, number]> {
//     const occupied_positions: Array<[number, number]> = [];
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (marker === board[i][j]) {
//                 occupied_positions.push([i, j]);
//             }
//         }
//     }
//     return occupied_positions;
// }
// function board_is_full(board: Array<Array<string>>): boolean {
//     const legal_moves = get_legal_moves(board);
//     if (0 === legal_moves.length) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function game_is_won(occupied_positions: Array<[number, number]>): boolean {
//     let game_won: boolean;
//     for (let i = 0; i < winning_states.length; i++) {
//         game_won = true;
//         const curr_win_state = winning_states[i];
//         for (let j = 0; j < 3; j++) {
//             if (!find(occupied_positions, curr_win_state[j])) {
//                 game_won = false;
//                 break;
//             }
//         }
//         if (game_won) {
//             break;
//         }
//     }
//     return game_won;
// }
// function get_opponent_marker(marker: string): string {
//     let opponent_marker: string;
//     if (marker === PLAYER_MARKER) {
//         opponent_marker = AI_MARKER;
//     } else {
//         opponent_marker = PLAYER_MARKER;
//     }
//     return opponent_marker;
// }
// function get_board_state(board: Array<Array<string>>, marker: string): number {
//     const opponent_marker = get_opponent_marker(marker);
//     let occupied_positions = get_occupied_positions(board, marker);
//     const is_won = game_is_won(occupied_positions);
//     if (is_won) {
//         return WIN;
//     }
//     occupied_positions = get_occupied_positions(board, opponent_marker);
//     const is_lost = game_is_won(occupied_positions);
//     if (is_lost) {
//         return LOSS;
//     }
//     const is_full = board_is_full(board);
//     if (is_full) {
//         return DRAW;
//     }
//     return DRAW;
// }
// function minimax_optimization(
//     board: Array<Array<string>>,
//     marker: string,
//     depth: number,
//     alpha: number,
//     beta: number
// ): [number, [number, number]] {
//     let best_move: [number, number] = [-1, -1];
//     let best_score = marker === AI_MARKER ? LOSS : WIN;
//     if (board_is_full(board) || DRAW !== get_board_state(board, AI_MARKER)) {
//         best_score = get_board_state(board, AI_MARKER);
//         return [best_score, best_move];
//     }
//     const legal_moves = get_legal_moves(board);
//     for (let i = 0; i < legal_moves.length; i++) {
//         const curr_move = legal_moves[i];
//         board[curr_move[0]][curr_move[1]] = marker;
//         if (marker === AI_MARKER) {
//             const score = minimax_optimization(board, PLAYER_MARKER, depth + 1, alpha, beta)[0];
//             if (best_score < score) {
//                 best_score = score - depth * 10;
//                 best_move = curr_move;
//                 alpha = Math.max(alpha, best_score);
//                 board[curr_move[0]][curr_move[1]] = EMPTY_SPACE;
//                 if (beta <= alpha) {
//                     break;
//                 }
//             }
//         } else {
//             const score = minimax_optimization(board, AI_MARKER, depth + 1, alpha, beta)[0];
//             if (best_score > score) {
//                 best_score = score + depth * 10;
//                 best_move = curr_move;
//                 beta = Math.min(beta, best_score);
//                 board[curr_move[0]][curr_move[1]] = EMPTY_SPACE;
//                 if (beta <= alpha) {
//                     break;
//                 }
//             }
//         }
//         board[curr_move[0]][curr_move[1]] = EMPTY_SPACE;
//     }
//     return [best_score, best_move];
// }
// function game_is_done(board: Array<Array<string>>): boolean {
//     if (board_is_full(board)) {
//         return true;
//     }
//     if (DRAW !== get_board_state(board, AI_MARKER)) {
//         return true;
//     }
//     return false;
// }
// const board: Array<Array<string>> = [
//     [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
//     [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
//     [EMPTY_SPACE, EMPTY_SPACE, EMPTY_SPACE],
// ];
// console.log("********************************\n\n\tTic Tac Toe AI\n\n********************************");
// console.log();
// console.log("Player = X\t AI Computer = O");
// console.log();
// print_board(board);
// while (!game_is_done(board)) {
//     let row, col;
//     console.log("Row play: ");
//     row = parseInt(prompt());
//     console.log("Col play: ");
//     col = parseInt(prompt());
//     console.log();
//     if (position_occupied(board, [row, col])) {
//         console.log("The position (" + row + ", " + col + ") is occupied. Try another one...");
//         continue;
//     } else {
//         board[row][col] = PLAYER_MARKER;
//     }
//     const ai_move = minimax_optimization(board, AI_MARKER, START_DEPTH, LOSS, WIN);
//     board[ai_move[1][0]][ai_move[1][1]] = AI_MARKER;
//     print_board(board);
// }
// console.log("********** GAME OVER **********");
// console.log();
// const player_state = get_board_state(board, PLAYER_MARKER);
// console.log("PLAYER ");
// print_game_state(player_state);
var EMPTY = "-";
var PLAYER_X = "X";
var PLAYER_O = "O";
var board = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
function printBoard(board) {
    console.log("---------");
    for (var i = 0; i < 3; i++) {
        console.log("|", board[i * 3], "|", board[i * 3 + 1], "|", board[i * 3 + 2], "|");
        console.log("---------");
    }
}
function checkWinner(board) {
    var winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (var _i = 0, winningCombinations_1 = winningCombinations; _i < winningCombinations_1.length; _i++) {
        var combination = winningCombinations_1[_i];
        if (board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]] &&
            board[combination[0]] !== EMPTY) {
            return board[combination[0]];
        }
    }
    if (!board.includes(EMPTY)) {
        return "tie";
    }
    return null;
}
function evaluate(board) {
    var winner = checkWinner(board);
    if (winner === PLAYER_X) {
        return 1;
    }
    else if (winner === PLAYER_O) {
        return -1;
    }
    else {
        return 0;
    }
}
function minimax(board, depth, alpha, beta, maximizingPlayer) {
    if (checkWinner(board) !== null || depth === 0) {
        return evaluate(board);
    }
    if (maximizingPlayer) {
        var maxEval = -Infinity;
        for (var i = 0; i < 9; i++) {
            if (board[i] === EMPTY) {
                board[i] = PLAYER_X;
                var evalScore = minimax(board, depth - 1, alpha, beta, false);
                board[i] = EMPTY;
                maxEval = Math.max(maxEval, evalScore);
                alpha = Math.max(alpha, evalScore);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        return maxEval;
    }
    else {
        var minEval = Infinity;
        for (var i = 0; i < 9; i++) {
            if (board[i] === EMPTY) {
                board[i] = PLAYER_O;
                var evalScore = minimax(board, depth - 1, alpha, beta, true);
                board[i] = EMPTY;
                minEval = Math.min(minEval, evalScore);
                beta = Math.min(beta, evalScore);
                if (beta <= alpha) {
                    break;
                }
            }
        }
        return minEval;
    }
}
function findBestMove(board) {
    var bestScore = -Infinity;
    var bestMove = null;
    for (var i = 0; i < 9; i++) {
        if (board[i] === EMPTY) {
            board[i] = PLAYER_X;
            var moveScore = minimax(board, 9, -Infinity, Infinity, false);
            board[i] = EMPTY;
            if (moveScore > bestScore) {
                bestScore = moveScore;
                bestMove = i;
            }
        }
    }
    return bestMove;
}
// The while loop and input handling are not directly translatable to TypeScript
// for use in a browser or Node.js environment without additional code for input handling.
