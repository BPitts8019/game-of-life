import createReducer from "../createReducer";
import { INITIAL_STATE } from "./context";
import {
   NEXT_GENERATION,
   UPDATE_DISPLAY,
   INIT_GAME,
   START_GAME,
   STOP_GAME,
   UPDATE_DELAY,
} from "./actions";

const updateGame = (state, { payload: { buffer, currentGeneration } }) => {
   const newDisplay = JSON.parse(JSON.stringify(buffer));

   return {
      ...state,
      display: newDisplay,
      currentGeneration,
   };
};

const updateDisplay = (state, { payload: { row, column, newValue } }) => {
   const newDisplay = JSON.parse(JSON.stringify(state.display));
   newDisplay[row][column] = newValue;

   return {
      ...state,
      display: newDisplay,
   };
};

const startGame = (state) => {
   return {
      ...state,
      isRunning: true,
   };
};

const stopGame = (state) => {
   return {
      ...state,
      isRunning: false,
   };
};

const updateGameDelay = (state, { newDelay }) => {
   return {
      ...state,
      gameDelay: newDelay,
   };
};

export default createReducer(INITIAL_STATE, {
   /** Handlers ***/
   [INIT_GAME]: updateGame,
   [START_GAME]: startGame,
   [STOP_GAME]: stopGame,
   [NEXT_GENERATION]: updateGame,
   [UPDATE_DISPLAY]: updateDisplay,
   [UPDATE_DELAY]: updateGameDelay,
});
