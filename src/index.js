import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import GameContext from "./context/game/context";
import GlobalStyle from "./features/style-utils/GlobalStyle";

ReactDOM.render(
   <React.StrictMode>
      <GameContext.Provider>
         <GlobalStyle />
         <App />
      </GameContext.Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
