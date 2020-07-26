const MAX_ROWS = 3;
const MAX_COLUMNS = 3;
let simLoop; //the handle to the sim-loop
let buffer = initBuffer(); //map being worked on in current generation
let display = [
   [0, 1, 0],
   [0, 1, 0],
   [0, 1, 0],
]; //current map - displayed on the screen
let currGeneration = 1; //generation represented by display
let maxGenerations = 0;

const initBuffer = () => {
   let new_array = [];
   for (let i = 0; i < MAX_ROWS; i++) {
      new_array.push(Array(MAX_COLUMNS).fill(0));
   }

   return new_array;
};

const getNeighborValue = (row, column) => {
   if (row < MAX_ROWS && column < MAX_COLUMNS) {
      return display[row][column];
   }

   return 0;
};

const countNeighbors = () => {
   let rtn_num = 0;
   rtn_num += getNeighborValue(row_idx - 1, cell_idx - 1);
   rtn_num += getNeighborValue(row_idx - 1, cell_idx);
   rtn_num += getNeighborValue(row_idx - 1, cell_idx + 1);
   rtn_num += getNeighborValue(row_idx, cell_idx - 1);
   rtn_num += getNeighborValue(row_idx, cell_idx + 1);
   rtn_num += getNeighborValue(row_idx + 1, cell_idx - 1);
   rtn_num += getNeighborValue(row_idx + 1, cell_idx);
   rtn_num += getNeighborValue(row_idx + 1, cell_idx + 1);

   return rtn_num;
};

/**
 * One call of this function represents one generation
 */
const nextGeneration = () => {
   console.log(`Generation: ${currGeneration}`);

   //simulation calculations
   //use display as data, but save changes to the buffer
   //for each cell,
   //get number of neighbors
   //check alive -or- dead
   //update cell in buffer
   buffer.forEach((row, row_idx) => {
      row.forEach((cell, cell_idx) => {
         //apply game-of-life rules
         buffer[row_idx][cell_idx] = countNeighbors();
      });
   });

   //swap the display and the buffer
   display = buffer;
   buffer = [];
   console.log(JSON.stringify(display));
   currGeneration += 1;
   if (maxGenerations != 0 && currGeneration > maxGenerations) {
      clearInterval(simLoop);
   }
};

/**
 * Starts/resumes the simulation given some options
 * @param {object} options
 */
export const start = ({ delay = 200, maxGen = maxGenerations }) => {
   const MIN_DELAY = 100;
   const MAX_DELAY = 1000;

   if (delay < MIN_DELAY) {
      delay = MIN_DELAY;
   }

   if (delay > MAX_DELAY) {
      delay = MAX_DELAY;
   }

   if (maxGen < 0) {
      maxGen = 0;
   }

   console.log(`delay: ${delay}`);
   console.log(`maxGen: ${maxGen}`);
   if (currGeneration > maxGen) {
      reset();
   }
   maxGenerations = maxGen;
   simLoop = setInterval(nextGeneration, delay);
};

/**
 * Stops the simulation
 */
export const stop = () => {
   clearInterval(simLoop);
};

/**
 * Resets the current simulation
 */
export const reset = () => {
   buffer = [];
   display = [];
   currGeneration = 0;
};

/**
 * Renders the next generation in simulation
 * This will render the next generation  regardless
 * of maxGenerations
 */
export const next = () => {
   nextGeneration();
};
