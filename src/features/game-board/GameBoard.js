import React, { useContext, useEffect } from "react";
import CellDisplay from "../cell-container/CellContainer";
import ControlPanel from "../control-panel/ControlPanel";
import GameContext from "../../context/game/context";

import { initialize } from "../../context/game/actions";

const HEIGHT = 30;
const WIDTH = 40;

const GameBoard = () => {
   const { gameData, gameDispatch } = useContext(GameContext);

   useEffect(() => {
      gameDispatch(initialize(HEIGHT, WIDTH));
   }, []);

   return (
      <div className="game-board">
         <CellDisplay />
         <div className="console">
            <ControlPanel />
            <h1>Generation: {gameData.currentGeneration}</h1>
         </div>
         <div className={"display"}></div>
      </div>
   );
};

export default GameBoard;
