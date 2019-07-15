import React from 'react';
import styles from './App.module.scss';
import Board from './components/Board.js'

function App() {
  return (
    <div className={styles.App}>
    <Board />
    </div>
  );
}

export default App;
