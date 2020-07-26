let simLoop; //the handle to the sim-loop
let buffer = []; //map being worked on in current generation
let display = []; //current map - displayed on the screen
let currGeneration = 1; //generation represented by display
let maxGenerations = 0;

/**
 * One call of this function represents one generation
 */
const nextGeneration = () => {
   console.log(`Generation: ${currGeneration}`);

   //do some stuff
   for (let i = 0; i < 100; i++) {
      buffer.push((display[i] || i) * 2);
   }

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
