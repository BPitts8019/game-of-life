import React, { useContext } from "react";
import { start, stop, reset, next } from "../../app/simulation";
import GameContext from "../../context/game/context";

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
         <h1>Generation: {gameData.currentGeneration}</h1>
      </>
   );
};

export default GameBoard;
