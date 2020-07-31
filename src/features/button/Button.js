import React, { useContext } from "react";
import GameContext from "../../context/game/context";

const Button = ({ label, fn, delay, enableWhileRuning }) => {
   const { gameData, gameDispatch } = useContext(GameContext);
   const clickHandler = (event) => {
      fn(
         {
            display: gameData.display,
            generation: gameData.currentGeneration,
         },
         gameDispatch,
         delay
      );
   };

   return (
      <button
         onClick={clickHandler}
         disabled={!enableWhileRuning && gameData.isRunning}
      >
         {label}
      </button>
   );
};

export default Button;

/**
 * <button
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
 */
