import createReducer from "../createReducer";
import { INITIAL_STATE } from "./context";
import { NEXT_GENERATION } from "./actions";
/*** Add Reducers Here ***/

const updateGame = (state, { payload }) => {
   return {
      ...state,
      display: payload.display,
      currentGeneration: payload.currentGeneration,
   };
};

export default createReducer(INITIAL_STATE, {
   /** Handlers ***/
   [NEXT_GENERATION]: updateGame,
});
