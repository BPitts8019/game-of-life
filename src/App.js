import React from "react";
import GameBoard from "./features/game-board/GameBoard";
import Cell from "./features/cell/Cell";

function App() {
   return (
      <div className="app">
         <div className="app-title">
            <h1>The Game of Life</h1>
            <p>by John Conway</p>
         </div>
         <GameBoard />
      </div>
   );
}

export default App;
