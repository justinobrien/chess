import React, {useState} from 'react';
import "./GameBoard.scss";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    // check clipboard for position data
    //  button to do this manually
    // flip board button
    // 1-8 amd a-h

    horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
    verticalAxis =   ["1", "2", "3", "4", "5", "6", "7", "8"];

    board = [];

    // initialize board
    initializeBoard = () => {
        let squarecolor = false;

        this.verticalAxis.reverse().forEach(i => {
            this.board.push({location: i, color: "clear"});
            this.horizontalAxis.forEach(j => {
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
                this.board.push(boardSquare);
            });
            // swap start color for each row
            squarecolor = !squarecolor;
        });
    }

    // console.warn(board);

    render() {
        return (
            <div className="game-board">
                {this.board.map(square => (
                    <div className={square.color}> {square.location} </div>
                ))}
                {/* empty div for grid layout */}
                <div></div>
                {this.horizontalAxis.map( label =>
                    <div className="clear"> {label} </div>
                )}
            </div>
        );
    }
}

export default Board;