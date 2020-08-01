import { updateGeneration, toggleGame } from "../context/game/actions";
import { PULSARS, PUFFER_TRAIN, GLIDER_GUN } from "./presets";

const simLoops = []; //an array of interval handles to the sim-loop
let buffer = null; //map being worked on in current generation
let curDisplay; //a replica of the game display
let currGeneration; //generation represented by display

/**
 * Starts/resumes the simulation given some options
 * @param {object} gameData
 * @param {function} dispatch Used to update the frontend
 * @param {number} [delay=50] The number of miliseconds between generations
 */
export const start = (
   { display, currentGeneration },
   dispatch,
   { delay = 100 }
) => {
   const MIN_DELAY = 100;
   const MAX_DELAY = 1000;

   if (delay < MIN_DELAY) {
      delay = MIN_DELAY;
   }

   if (delay > MAX_DELAY) {
      delay = MAX_DELAY;
   }

   currGeneration = currentGeneration;
   curDisplay = display.map((row) => row.map((col) => col));
   if (!buffer) {
      buffer = curDisplay.map((row) => row.map((_) => 0));
   }

   dispatch(toggleGame(true));
   simLoops.push(setInterval(nextGeneration, delay, dispatch));
};

/**
 * Stops the simulation
 * @param {object} _ unused
 * @param {function} dispatch Used to update the frontend
 */
export const stop = (_, dispatch) => {
   dispatch(toggleGame(false));
   simLoops.forEach((handle) => clearInterval(handle));
};

/**
 *  Resets the current simulation
 * @param {Array} display The current generation of cells on the board
 * @param {function} dispatch Used to update the frontend
 */
export const reset = ({ display }, dispatch) => {
   curDisplay = display.map((row) => row.map((col) => col));
   buffer = display.map((row) => row.map((_) => 0));

   currGeneration = 0;
   dispatch(updateGeneration(buffer, currGeneration));
};

/**
 * Renders the next generation in simulation
 * @param {object} gameData
 * @param {function} dispatch Used to update the frontend
 */
export const next = ({ display, currentGeneration }, dispatch) => {
   if (!display || display.length <= 0) {
      console.error("Your grid isn't initialized!");
      return;
   }

   currGeneration = currentGeneration;
   curDisplay = display.map((row) => row.map((col) => col));
   if (!buffer) {
      buffer = display.map((row) => row.map((_) => 0));
   }

   nextGeneration(dispatch);
};

/**
 * Each call of this function represents one generation
 * @param {function} dispatch Used to update the frontend
 */
const nextGeneration = (dispatch) => {
   //simulation calculations
   //use display as data, but save changes to the buffer
   //for each cell,
   //    get number of neighbors
   //    apply game-of-life rules
   //    update cell in buffer
   buffer = curDisplay.map((row, row_idx) =>
      row.map((cell, col_idx) =>
         applyRules(cell, countNeighbors(row_idx, col_idx))
      )
   );
   currGeneration += 1;

   //update the display with the buffer
   dispatch(updateGeneration(buffer, currGeneration));
   curDisplay = buffer;

   console.log(`Generation: ${currGeneration}`);
   console.log(JSON.stringify(buffer));
};

/**
 * Applies the rules of Conway's Game of Life to the cell at row and
 * column in display.
 * @param {boolean} isAlive
 * @param {number} num_neighbors
 */
const applyRules = (isAlive, num_neighbors) => {
   if (isAlive) {
      if (num_neighbors < 2 || num_neighbors > 3) {
         // Any live cell with fewer than two live neighbours dies, as if by underpopulation.
         // Any live cell with more than three live neighbours dies, as if by overpopulation.
         return 0;
      }
      // Any live cell with two or three live neighbours lives on to the next generation.
   } else {
      // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
      if (num_neighbors === 3) {
         return 1;
      }
   }

   return isAlive;
};

/**
 * Counts the number of neighbors that are alive around the cell at
 * row and column in display.
 * @param {number} row
 * @param {number} column
 */
const countNeighbors = (row, column) => {
   let rtn_num = 0;
   rtn_num += getNeighborValue(row - 1, column - 1);
   rtn_num += getNeighborValue(row - 1, column);
   rtn_num += getNeighborValue(row - 1, column + 1);
   rtn_num += getNeighborValue(row, column - 1);
   rtn_num += getNeighborValue(row, column + 1);
   rtn_num += getNeighborValue(row + 1, column - 1);
   rtn_num += getNeighborValue(row + 1, column);
   rtn_num += getNeighborValue(row + 1, column + 1);

   return rtn_num;
};

/**
 * Get the current value of cell in the display at row and column:
 *    alive = 1
 *    dead = 0
 * If row or column are out of the bounds of the grid, assume the cell
 * is dead.
 * @param {number} row
 * @param {number} column
 */
const getNeighborValue = (row, column) => {
   if (row >= 0 && row < curDisplay.length) {
      if (column >= 0 && column < curDisplay[0].length) {
         return curDisplay[row][column];
      }
   }

   return 0;
};
