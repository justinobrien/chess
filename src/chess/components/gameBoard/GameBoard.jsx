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
    let squarecolor = false;

    // initialize board
    verticalAxis.reverse().forEach(i => {
        board.push({location: i, color: "clear"});
        horizontalAxis.forEach(j => {
            let boardSquare = {
                color: "white",
                location: "", // ex: a6, b8
                piece: ""
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
            {/* empty div for grid layout */}
            <div></div>
            {horizontalAxis.map( label =>
                <div className="clear"> {label} </div>
            )}
        </div>
    );
}

export default Board;