import React from "react";
import Game from "./features/game-board/Game";
import Cell from "./features/cell/Cell";

function App() {
   return (
      <div className="App">
         <h1>The Game of Life</h1>
         <h3>by John Conway</h3>
         <div className="game-board">
            <Cell />
            <Cell />
         </div>
         <Game />
      </div>
   );
}

export default App;
