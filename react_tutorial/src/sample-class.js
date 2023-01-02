import React from 'react';

// できる限り、クラスではなく関数を利用する
// 値は、propsで受け取る
export function Square(props) {
    const idx = props.index;
    return (
        <button className="square" onClick={() => props.onClick(idx)}>
            {props.squares[idx]}
        </button>
    );
}

export function Board(props) {
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
  
export class Game extends React.Component {

    constructor(props) {
        super(props);
        // 状態管理する値は、stateに設定する
        this.state = {
          squares: Array(9).fill(null),
          xIsNext: true
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'x' : 'o';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + this.state.xIsNext ? 'X' : 'O';
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board 
                squares={this.state.squares}
                onClick={(i) => this.handleClick(i)}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
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