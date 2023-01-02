import React, {useEffect, useState} from 'react';

// できる限り、クラスではなく関数を利用する
// 値は、propsで受け取る
function Square(props) {
    const idx = props.index;
    return (
        <button className="square" onClick={() => props.onClick(idx)}>
            {props.squares[idx]}
        </button>
    );
}

function Board(props) {
    let list = [[], [], []];
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            list[i].push(
                <Square
                    index={j + i*3}
                    squares={props.squares}
                    onClick={props.onClick}/>
            )
        }
    }
        
    return (
        <div>
            <div className="board-row">{list[0]}</div>
            <div className="board-row">{list[1]}</div>
            <div className="board-row">{list[2]}</div>
        </div>
    );
}

export function Game() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);

    const winner = calculateWinner(squares);

    useEffect(() => console.log("useEffectが実行されました。"))

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + xIsNext ? 'X' : 'O';
    }

    return (
        <div className="game">
            <div className="game-board">
            <Board 
                squares={squares}
                onClick={(i) => {
                        const tmp_squares = squares.slice();
                        if (calculateWinner(tmp_squares) || tmp_squares[i]) {
                            return;
                        }
                        tmp_squares[i] = xIsNext ? 'x' : 'o';
                        setSquares(tmp_squares);
                        setxIsNext(!xIsNext);
                    }
                }
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
    );

}


// ========================================


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}