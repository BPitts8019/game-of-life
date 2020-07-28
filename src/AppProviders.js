import React, { useReducer } from "react";
import App from "./App";
import GameContext from "./context/game/context";
import GameReducer from "./context/game/reducer";
import GlobalStyle from "./features/style-utils/GlobalStyle";

const AppProviders = () => {
   const [gameData, gameDispatch] = useReducer(GameReducer);

   return (
      <React.StrictMode>
         <GameContext.Provider value={{ gameData, gameDispatch }}>
            <GlobalStyle />
            <App />
         </GameContext.Provider>
      </React.StrictMode>
   );
};

export default AppProviders;
