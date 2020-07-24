import React from "react";
import Game from "./features/game-board/Game";

function App() {
   return (
      <div className="App">
         <h1>The Game of Life</h1>
         <h3>by John Conway</h3>
         <Game />
      </div>
   );
}

export default App;
