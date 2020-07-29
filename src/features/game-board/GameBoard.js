import React, { useContext } from "react";
import { start, stop, reset, next } from "../../app/simulation";
import GameContext from "../../context/game/context";
import Cell from "../cell/Cell";

const GameBoard = () => {
   const { gameData, gameDispatch } = useContext(GameContext);

   return (
      <>
         <button
            onClick={() => {
               start(gameDispatch, 200);
            }}
         >
            Start
         </button>
         <button onClick={stop}>Stop</button>
         <button onClick={reset}>Reset</button>
         <button
            onClick={() => {
               next(gameDispatch);
            }}
         >
            Next
         </button>
         <br />
         <h1>Generation: {gameData.currentGeneration}</h1>
         <div className={"display"}>
            {gameData.display.map((row, row_idx) => {
               return row.map((cellValue, col_idx) => (
                  <Cell key={`cell-${row_idx}_${col_idx}`} value={cellValue} />
               ));
            })}
            ;
         </div>
      </>
   );
};

export default GameBoard;
