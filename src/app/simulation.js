let simLoop; //the handle to the sim-loop
let buffer = []; //map being worked on in current generation
let dispay = []; //current map - displayed on the screen
let currGeneration = 0; //generation represented by display
let maxGeneration = 0;

/**
 * One call of this function represents one generation
 */
const nextGeneration = () => {
   console.log(`Generation: ${currGeneration}`);
   currGeneration += 1;

   if (maxGeneration != 0 && currGeneration >= maxGeneration) {
      clearInterval(simLoop);
   }
};

/**
 * Starts the simulation given some options
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
   if (maxGen === 0 || currGeneration < maxGen) {
      maxGeneration = maxGen;
      simLoop = setInterval(nextGeneration, delay);
   }
};

export const stop = () => {
   clearInterval(simLoop);
};
