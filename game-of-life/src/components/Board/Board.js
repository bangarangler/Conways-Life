import React, {useState, useEffect} from 'react';

import styles from './Board.module.scss';

const Board = ({ board, setBoard }) => {
  return (
    <section className={styles.gridContainer}>
    {
      board.map(row => {
        return (
          <div className={styles.row}>
          {row.map(column => {
            return (
              <div className={column === 1 ? `${styles.column} ${styles.alive}` : `${styles.column}`} />
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
