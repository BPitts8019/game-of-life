import React from "react";
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
      </div>
   );
}

export default App;
