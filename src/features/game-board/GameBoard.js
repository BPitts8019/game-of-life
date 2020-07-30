import React, { useContext, useEffect } from "react";
import CellContainer from "../cell-container/CellContainer";
import { start, stop, reset, next } from "../../app/simulation";
import GameContext from "../../context/game/context";
import { initialize } from "../../context/game/actions";

const GameBoard = () => {
   const { gameData, gameDispatch } = useContext(GameContext);

   useEffect(() => {
      gameDispatch(initialize());
   }, []);

   return (
      <div className="game-board">
         <CellContainer />
         <button
            onClick={() => {
               start(gameDispatch, 200);
            }}
         >
            Start
         </button>
         <button onClick={stop}>Stop</button>
         <button
            onClick={() => {
               reset(gameData.display, gameDispatch);
            }}
         >
            Reset
         </button>
         <button
            onClick={() => {
               next(gameData.display, gameDispatch);
            }}
         >
            Next
         </button>
         <h1>Generation: {gameData.currentGeneration}</h1>
         <div className={"display"}></div>
      </div>
   );
};

export default GameBoard;
