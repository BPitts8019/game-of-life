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
         <div className="container">
            <GameBoard />
            <div className="extra-info">
               <h3>Game Rules</h3>
               <hr />
               <ol>
                  <li>Each cell has two states: Alive and Dead</li>
                  <li>
                     Any live cell with fewer than two live neighbors dies, as
                     if by underpopulation.
                  </li>
                  <li>
                     Any live cell with more than three live neighbors dies, as
                     if by overpopulation.
                  </li>
                  <li>
                     Any live cell with two or three living neighbors lives on
                     to the next generation.
                  </li>
                  <li>
                     Any dead cell with exactly three live neighbors becomes a
                     live cell, as if by reproduction.
                  </li>
               </ol>
            </div>
         </div>
      </div>
   );
}

export default App;
