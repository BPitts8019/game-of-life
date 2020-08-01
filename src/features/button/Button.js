import React, { useContext } from "react";
import GameContext from "../../context/game/context";

const Button = ({ label, fn, delay, enableWhileRuning }) => {
   const {
      gameData: { display, currentGeneration, isRunning },
      gameDispatch,
   } = useContext(GameContext);
   const clickHandler = (event) => {
      fn({ display, currentGeneration }, gameDispatch, delay);
   };

   return (
      <button onClick={clickHandler} disabled={!enableWhileRuning && isRunning}>
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
