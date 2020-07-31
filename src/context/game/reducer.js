import createReducer from "../createReducer";
import { INITIAL_STATE } from "./context";
import { NEXT_GENERATION, UPDATE_DISPLAY, INIT_GAME } from "./actions";
/*** Add Reducers Here ***/

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

export default createReducer(INITIAL_STATE, {
   /** Handlers ***/
   [INIT_GAME]: updateGame,
   [NEXT_GENERATION]: updateGame,
   [UPDATE_DISPLAY]: updateDisplay,
});
