import React from 'react';
import "./GameBoard.scss";
const Board = () => {
    // check clipboard for position data
    //  button to do this manually
    // flip board button
    // 1-8 amd a-h

    const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const verticalAxis =   ["1", "2", "3", "4", "5", "6", "7", "8"];

    
    let board = [];
    let squarecolor = true;

    // initialize board
    horizontalAxis.forEach(i => {
        verticalAxis.forEach(j => {
            let boardSquare = {
                color: "white", //refactor to 0 or 1?
                location: "", // ex: a6, b8
            };
            boardSquare.location = i + j;
            if (squarecolor) {
                boardSquare.color = "white";
                squarecolor = !squarecolor;
            } else {
                boardSquare.color = "black";
                squarecolor = !squarecolor;
            }
            board.push(boardSquare);
        });
        // swap start color for each row
        squarecolor = !squarecolor;
    });

    console.warn(board);

    return (
        <div className="game-board">
            {board.map(square => (
                <div className={square.color}> {square.location} </div>
            ))}
        </div>
    );
}

export default Board;