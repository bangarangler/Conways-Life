import React, {useState, useEffect} from 'react';
import './App.scss';
import './SCSS/index.module.scss';
import Board from './components/Board/Board.js';

function App() {
  // STATE**********
  const [board, setBoard] = useState([]);
  const [changeState, setChangeState] = useState(false);


  let timerId;
  const startGame = () => {
    timerId = window.setInterval(gameOfLife, 500)
  }

  const stopGame = (e) => {
    e.preventDefault()
    window.clearInterval(timerId)
  }

  const gameOfLife = () => {
    console.log("loop")
    for (let row = 0; row < board.length;  row++) {
      for (let column = 0; column < board[row].length; column++) {
        let count = 0;
        console.log("Row: ", row, "Column: ", column)
      }
    }
  }

  // MOUNT / EFFECT *************
  useEffect(() => {
    let testArr = [];
    // rows
    for (let i = 0; i < 16; i++) {
      // hold open the space to insert the colums
      testArr[i] = [];
      // columns
      for (let j = 0; j < 16; j++) {
        testArr[i][j] = 0;
      }
    }
    console.log(testArr);
    setBoard(testArr);
  }, []);

  return (
    <div className="App">
    <div className="boardContainer">
      <Board
        board={board}
        setBoard={setBoard}
        changeState={changeState}
        setChangeState={setChangeState}
      />
    </div>
    <div className="btnContainer">
    <button onClick={() => startGame()}>Go</button>
    <button onClick={(e) => stopGame(e)}>Halt</button>
    </div>
    </div>
  );
}

export default App;
