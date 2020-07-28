import { createContext } from "react";

const INITIAL_STATE = {
   display: [],
   isSimRunning: false,
   currentGeneration: 0,
};

const NO_PROVIDER = {
   data: {
      ...INITIAL_STATE,
      error: new Error("You probably forgot to use a context <Provider>."),
   },
   dispatch: (action) => {
      throw new Error(
         `There was a problem dispatching ${action.type}. You probably forgot to use a context <Provider>..`
      );
   },
};

const GameContext = createContext(NO_PROVIDER);
GameContext.displayName = "GameOfLife";

export default GameContext;
