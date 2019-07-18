import React from 'react';
import styles from './Info.module.scss'
import { Link } from 'react-router-dom'

const Info = () => {
  return (
    <section className={styles.InfoContainer}>
      <h1>About Conway's Game of Life</h1>
    <p>The Game of Life is a zero player game that was created by mathematician John Conway created in 1970.  If Given an initial state, a two-dimensional cellular grid of finite automata changes over time in a series of generations. The indivudual cell survives, dies, or reproduces based on how many adjacent neighbors it has.</p>
    <p>This game led to the creation of a new field of mathematics called cellular automata. Even today it continues to be a famous instructive program for computer science students!</p>
    <p>Game of Life represents a "Turing-complete" or "Universal" machine. It's been proven possible to create any other computer using only the rules in Conway's game.</p>
    <Link to="/">Home</Link>
    </section>
  );
};

export default Info;
