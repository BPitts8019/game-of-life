import React, { useContext } from "react";
import StyledCell from "./StyledCell";
import GameContext from "../../context/game/context";
import { updateDiplayAt } from "../../context/game/actions";

const Cell = ({ row, column, value }) => {
   const {
      gameData: { isRunning },
      gameDispatch,
   } = useContext(GameContext);
   const handleClick = (event) => {
      if (!isRunning) {
         gameDispatch(updateDiplayAt(row, column, value === 1 ? 0 : 1));
      }
   };

   return (
      <StyledCell
         className={value === 1 ? "alive" : ""}
         onClick={handleClick}
      ></StyledCell>
   );
};

export default Cell;
