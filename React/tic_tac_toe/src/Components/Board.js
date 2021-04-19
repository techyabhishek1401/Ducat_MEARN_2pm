import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Square from './Square'
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(false);

    const setValue = (id) => {
        let squares_copy = [...squares];
        squares_copy[id] = isXNext ? 'X' : '0';
        setIsXNext(!isXNext)
        setSquares(squares_copy);
        findWinner();
    }
    const findWinner = () => {
        let winner;
        let square_arr = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]];
        for (let i = 0; i < square_arr.length; i++) {
            let [a, b, c] = square_arr[i];

            if (squares[a] && squares[b] && squares[c]) {
                console.log("tp:", squares[a])
                if (squares[a] == squares[b] && squares[b] == squares[c] && squares[a] == squares[c]) {
                    winner = squares[a]
                    console.log("winner:", winner)
                    // alert(`${winner} is a winner`)
                } else {
                    console.log("else inside")
                }
            }
        }
    }
    return (
        <div className="board">
            <Row>
                <Col><Square num={squares[0]} id="0" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[1]} id="1" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[2]} id="2" onBtnClicked={setValue} /></Col>

            </Row>
            <Row>
                <Col><Square num={squares[3]} id="3" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[4]} id="4" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[5]} id="5" onBtnClicked={setValue} /></Col>

            </Row>   <Row>
                <Col><Square num={squares[6]} id="6" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[7]} id="7" onBtnClicked={setValue} /></Col>
                <Col><Square num={squares[8]} id="8" onBtnClicked={setValue} /></Col>

            </Row>

        </div>
    )
}
