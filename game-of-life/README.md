# Game of Life

Turing Completeness : term used in computability theory to describe abstract machines, usually called automata. Such an automation is Turing complete, if it can be used to emulate a Turing machine. It is also called computationally universal. Most modern programming languages are Turing-complete.

*A system of data-manipulation rules (such as a computer's instruction set, a programming language, or a cellular automation) is said to be Turing complete or computationally universal. Can be used to simulate any Turing machine. Meaning system is able to recognize or decide other data-manipulation rule sets.*

Turing Machine : mathematical model of computation that defines an abstract machine, which manipulates symbols on a strip of tape according to a table of rules. machine operates on an infinite memory tape divided into discrete "cells". The machine positions its "head" over a cell and "reads" or "scans" the symbol there. Then, as per the symbol and its present place in a "finite table" of user-specified instructions, the machine writes a symbol (digit or a letter from a finite alphabet) in the cell, then either moves the tape one cell left or right, then either proceeds to a subsequent instruction or halts the computation.

---

Conway's "Game of Life" : 

- a zero player game
- The universe of the game of life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, (or populated and unpopulated, respectively).
- Every cell interacts with its eight neighbors, which are the cells that are horizontally, vertically, or diagonally adjacent.
- At each step in time the following transitions occur
    - any live cell with fewer than two live neighbors dies, as if by underpopulation.
    - any live cell with two or three live neighbors lives on to the next generation.
    - any live cell with more than three live neighbors dies, as if by overpopulation
    - any dead cell with three live neighbors becomes a live cell, as if by reproduction.

The initial pattern constitutes the seed of the system. First generation is created by applying the above rules simultaneously to every cell in the seed; births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick. Each generation is a pure function of the preceding one. The rules continue to be applied repeatedly to create further generations.

---

[Rubric](https://www.notion.so/3790b361cbc648a886f2e3104d1ce413)

[Figma WireFraming](https://www.notion.so/8950d08b102e45748498c7346d77de07)

## Objectives

- Create a unique, high-quality project that can be added to a professional portfolio
- describe the rules of Conway's "Game of Life"
- Explain what cellular automata are and describe how they are useful in real life
- Student should be able to correctly analyze the "Turing Completeness" of Conway's "Game of Life"
- implement a visualization of Conway's "Game of Life" using technologies related to their specific track
- "Double buffering" to implement animations

[Todo GOL - Jon Palacio](https://www.notion.so/1208efaae3a84477933ec971dbd83bcc)