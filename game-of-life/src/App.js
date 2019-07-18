import React, {useState, useEffect, useRef} from 'react';
import './App.scss';
import './SCSS/index.module.scss';
import Board from './components/Board/Board.js';
import {useInterval} from './hooks/useInterval.js';
import Rules from './components/Rules/Rules.js'
import Info from './components/Info/Info.js'
import { Route, Link, Switch } from 'react-router-dom'

let running = false;

function App() {
  // ***** HOOKS *****
  const [tiny, setTiny] = useState(5);
  const [med, setMed] = useState(15);
  const [big, setBig] = useState(30);
  const [board, setBoard] = useState([]);
  const [changeState, setChangeState] = useState(false);
  const [generation, setGeneration] = useState(-1);
  const [interval, setInterval] = useState(null);
  const [speed, setSpeed] = useState(100);
  const [boardSize, setBoardSize] = useState(med);
  const [sizeInput, setSizeInput] = useState('');

  const refGen = useRef();
  refGen.current = generation;

  const refBoard = useRef();
  refBoard.current = board;

  // ***** MAKE EMPTY BOARD *****
  useEffect(() => {
    let arr = blankBoard();
    setBoard(arr);
  }, []);

  useEffect(() => {
    let arr = changeBoardSize();
    setBoard(arr);
  }, [boardSize]);

  const changeBoardSize = () => {
    let testArr = [];
    // ROWS
    for (let i = 0; i < boardSize; i++) {
      testArr[i] = [];
      // COLUMNS
      for (let j = 0; j < boardSize; j++) {
        // CELLS
        testArr[i][j] = 0;
      }
    }
    return testArr;
  };

  const clear = () => {
    let tempArr = changeBoardSize();
    setBoard(tempArr);
    setGeneration(0);
    setInterval(null);
  };

  const blankBoard = (rows, columns) => {
    let testArr = [];
    // ROWS
    for (let i = 0; i < boardSize; i++) {
      testArr[i] = [];
      // COLUMNS
      for (let j = 0; j < boardSize; j++) {
        testArr[i][j] = 0;
      }
    }
    return testArr;
  };

  // ***** CONWAY'S GAME OF LIFE RULES ALGORITHM *****

  const playBtn = () => {
    setInterval(speed);
  };

  const pauseBtn = () => {
    setInterval(null);
  };

  useInterval(() => {
    gameOfLife();
  }, interval);

  const checkGen = () => {
    setGeneration(refGen.current + 1);
  };

  useEffect(() => {
    checkGen();
  }, [refGen]);

  // ***** ALGORITHM FOR GAME *****
  const gameOfLife = () => {
    let tempArr = blankBoard();
    checkGen();
    console.log('RUN......');

    if (!running) {
      for (let row = 0; row < board.length; row++) {
        // COLUMN
        for (let column = 0; column < board[row].length; column++) {
          let count = numberNeighbors(row, column);

          // CELL LOGIC
          if (count < 2) {
            tempArr[row][column] = 0;
          } else if (count === 2) {
            tempArr[row][column] = board[row][column];
          } else if (count === 3) {
            tempArr[row][column] = 1;
          } else {
            tempArr[row][column] = 0;
          }
        }
      }
      setBoard(tempArr);
      console.log(running);
      if (running) {
        return null;
      }
    }
  };

  const numberNeighbors = (row, column) => {
    let count = 0;
    // TOP LEFT
    if (row !== 0 && column !== 0) {
      count += board[row - 1][column - 1];
    }
    // TOP
    if (row !== 0) {
      count += board[row - 1][column];
    }
    // TOP RIGHT
    if (row !== 0 && column !== board.length) {
      count += board[row - 1][column + 1];
    }
    // LEFT
    if (column !== 0) {
      count += board[row][column - 1];
    }
    // RIGHT
    if (column !== board.length) {
      count += board[row][column + 1];
    }
    // BOTTOM LEFT
    if (row !== board.length - 1 && column !== 0) {
      count += board[row + 1][column - 1];
    }
    // BOTTOM
    if (row !== board.length - 1) {
      count += board[row + 1][column];
    }
    // BOTTOM RIGHT
    if (row !== board.length - 1 && column !== board.length) {
      count += board[row + 1][column + 1];
    }
    return count;
  };

  const handleBoardSize = e => {
    e.preventDefault();
    let message = '';
    if (Number(e.target.value) > 30) {
      console.log('higher than 30');
      setSizeInput(message);
    } else if (Number(e.target.value) < 0) {
      console.log('can not be negative');
    } else {
      setBoardSize(Number(e.target.value));
    }
  };

  const handleSpeedChange = e => {
    e.preventDefault();
    setSpeed(e.target.value);
  };

  const middleLine = () => {
    let tempArr = blankBoard();
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[i][parseInt(tempArr.length / 2)] = 1;
    }
    setBoard(tempArr);
  };

  const splitLine = () => {
    let tempArr = blankBoard();
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[parseInt(tempArr.length / 2)][i] = 1;
    }
    setBoard(tempArr);
  };

  const cross = () => {
    let tempArr = blankBoard();
    for (let i = 0; i < tempArr.length; i++) {
      tempArr[parseInt(tempArr.length / 2)][i] = 1;
      tempArr[i][parseInt(tempArr.length / 2)] = 1;
    }
    setBoard(tempArr);
  };

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
    <div className="flex">
    <Link to="/rules">Rules</Link>
      <div className="btnContainer">
        <button onClick={playBtn}>Go</button>
        <button onClick={pauseBtn}>Halt</button>
      </div>
    <Link to="/info" replace>About</Link>
    </div>
      <h3 className="generationText">Generations : {generation}</h3>
      <input type="number" value={speed} onChange={handleSpeedChange} />
      <div className="controls">
        <button onClick={clear}>Clear</button>
        <button onClick={() => setBoardSize(tiny)}>Small</button>
        <button onClick={() => setBoardSize(med)}>Medium</button>
        <button onClick={() => setBoardSize(big)}>Big</button>
        <button onClick={middleLine}>Center</button>
        <button onClick={splitLine}>Split</button>
        <button onClick={cross}>Cross</button>
      </div>
    <Switch>
    <Route path="/rules" component={Rules} />
    <Route path="/info" component={Info} />
    </Switch>
    </div>
  );
}

export default App;
