import { createContext } from "react";

export const INITIAL_STATE = {
   display: [],
   isRunning: false,
   currentGeneration: 0,
};

const NO_PROVIDER = {
   gameData: {
      ...INITIAL_STATE,
      error: new Error("You probably forgot to use a context <Provider>."),
   },
   gameDispatch: (action) => {
      throw new Error(
         `There was a problem dispatching ${action.type}. You probably forgot to use a context <Provider>..`
      );
   },
};

const GameContext = createContext(NO_PROVIDER);
GameContext.displayName = "GameOfLife";

export default GameContext;
