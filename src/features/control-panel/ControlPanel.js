import React, { useContext } from "react";
import StyledControlPanel from "./StyledControlPanel";
import { start, stop, reset, next } from "../../app/simulation";
import GameContext from "../../context/game/context";

const ControlPanel = () => {
   const { gameData, gameDispatch } = useContext(GameContext);

   return (
      <StyledControlPanel>
         <button
            onClick={() => {
               start(
                  {
                     display: gameData.display,
                     generation: gameData.currentGeneration,
                  },
                  gameDispatch,
                  200
               );
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
               next(
                  {
                     display: gameData.display,
                     generation: gameData.currentGeneration,
                  },
                  gameDispatch
               );
            }}
         >
            Next
         </button>
      </StyledControlPanel>
   );
};

export default ControlPanel;
