export const INIT_GAME = "INIT_GAME";
export const START_GAME = "START_GAME";
export const STOP_GAME = "STOP_GAME";
export const NEXT_GENERATION = "NEXT_GENERATION";
export const UPDATE_DISPLAY = "UPDATE_DISPLAY";
export const UPDATE_DELAY = "UPDATE_DELAY";
export const SELECT_PRESET = "SELECT_PRESET";

//== Action Creators ==//
export const initialize = (height, width) => {
   const buffer = Array(height).fill(Array(width).fill(0));
   return { type: INIT_GAME, payload: { buffer, currentGeneration: 0 } };
};

export const toggleGame = (isStartGame) => {
   return { type: isStartGame ? START_GAME : STOP_GAME };
};

export const updateGeneration = (buffer, currentGeneration) => {
   return { type: NEXT_GENERATION, payload: { buffer, currentGeneration } };
};

export const updateDiplayAt = (row, column, newValue) => {
   return { type: UPDATE_DISPLAY, payload: { row, column, newValue } };
};

export const updateDelay = (newDelay) => {
   return { type: UPDATE_DELAY, payload: { newDelay } };
};

export const selectPreset = (selection) => {
   return {
      type: SELECT_PRESET,
      payload: { buffer: selection, currentGeneration: 0 },
   };
};
