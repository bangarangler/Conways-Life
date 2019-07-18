import React from 'react';
import styles from './Rules.module.scss'
import { Link } from 'react-router-dom'

const Rules = () => {
  return (
    <section className={styles.RulesContainer}>
      <h1>Rules of Conway's Game of Life</h1>
      <ul>
        <li>Zero Player Game</li>
        <li>
          The universe of the game of life is an infinite, two-dimensional
          orthogonal grid of square cells, each of which is in one of two
          possible states, alive or dead, (or populated and unpopulated,
          respectively).
        </li>
        <li>
          Every cell interacts with its eight neighbors, which are the cells
          that are horizontally, vertically, or diagonally adjacent
        </li>
        <li>
          any live cell with fewer than two live neighbors dies, as if by
          underpopulation.
        </li>
        <li>
          any live cell with two or three live neighbors lives on to the next
          generation
        </li>
        <li>
          any live cell with more than three live neighbors dies, as if by
          overpopulatio
        </li>
        <li>
          any dead cell with three live neighbors becomes a live cell, as if by
          reproduction.
        </li>
      </ul>
    <Link to='/'>Home</Link>
    </section>
  );
};

export default Rules;
