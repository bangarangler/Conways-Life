import React, { useState, useEffect } from 'react';
import './App.scss';
import './SCSS/index.module.scss';
import Board from './components/Board/Board.js'

function App() {
  // STATE**********
  const [board, setBoard] = useState([]);

  // MOUNT / EFFECT *************
  useEffect(() => {
    let testArr = []
    // rows
    for (let i = 0; i < 16; i++) {
      // hold open the space to insert the colums
      testArr[i] = []
      // columns
      for (let j = 0; j < 16; j++) {
        testArr[i][j] = 0;
      }
    }
    console.log(testArr)
    setBoard(testArr)
  }, [])
  return (
    <div className="App">
    <Board board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
