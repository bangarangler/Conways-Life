import React, {useState, useEffect} from 'react';

import styles from './Board.module.scss';

const Board = ({ board, setBoard, changeState, setChangeState }) => {

  //useEffect(() => {
  //}, [newBoard])
  const alterCell = (e) => {
    e.preventDefault();
    const row =  e.target.dataset.row
    const column = e.target.dataset.col
    let newBoard = board;
    newBoard[row][column] == 0 ? newBoard[row][column] = 1 : newBoard[row][column] = 0
    console.log("CELL :", newBoard[row][column])
    console.log("newBoard: ", newBoard)
    setBoard(newBoard)
    if (changeState === false) {
      setChangeState(true)
    } else {
      setChangeState(false)
    }
  }

  return (
    <section className={styles.gridContainer}>
    {
      board.map(( row, rowIndex ) => {
        return (
          <div key={`${rowIndex}`} className={styles.row}>
          {row.map(( column, colIndex ) => {
            return (
              <div key={`${colIndex} ${rowIndex}}`} className={column === 1 ? `${styles.column} ${styles.alive}` : `${styles.column}`} data-col={`${colIndex}`} data-row={`${rowIndex}`} onClick={(e) => alterCell(e)} />
            )
          })}
          </div>
        )
      })
    }
    {/*<div className={styles.row}>
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
        <div className={styles.column} />
      </div>*/}
    </section>
  );
};

export default Board;
