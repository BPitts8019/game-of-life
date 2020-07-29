export const INIT_GAME = "INIT_GAME";
export const NEXT_GENERATION = "NEXT_GENERATION";
export const UPDATE_DISPLAY = "UPDATE_DISPLAY";

//== Action Creators ==//
export const initialize = () => {
   const display = Array(25).fill(Array(25).fill(0));
   return { type: INIT_GAME, payload: { display, currentGeneration: 0 } };
};

export const updateGeneration = (display, currentGeneration) => {
   return { type: NEXT_GENERATION, payload: { display, currentGeneration } };
};

export const updateDiplayAt = (row, column, newValue) => {
   return { type: UPDATE_DISPLAY, payload: { row, column, newValue } };
};
