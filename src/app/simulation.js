let simLoop; //the handle to the sim-loop
let buffer = []; //map being worked on in current generation
let display = []; //current map - displayed on the screen
let currGeneration = 1; //generation represented by display
let maxGeneration = 0;

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
   if (maxGeneration != 0 && currGeneration > maxGeneration) {
      clearInterval(simLoop);
   }
};

/**
 * Starts/resumes the simulation given some options
 * @param {object} options
 */
export const start = ({ delay = 200, maxGen = maxGeneration }) => {
   if (delay < 100) {
      delay = 100;
   }

   if (delay > 1000) {
      delay = 1000;
   }

   if (maxGen < 0) {
      maxGen = 0;
   }

   console.log(`delay: ${delay}`);
   console.log(`maxGen: ${maxGen}`);
   if (currGeneration > maxGen) {
      reset();
   }
   maxGeneration = maxGen;
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
