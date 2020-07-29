import React, { useContext } from "react";
import StyledContainer from "./StyledContainer";
import Cell from "../cell/Cell";
import GameContext from "../../context/game/context";

const CellContainer = () => {
   const { gameData } = useContext(GameContext);

   return (
      <StyledContainer>
         {gameData.display.map((row, row_idx) =>
            row.map((cellValue, col_idx) => (
               <Cell key={`cell-${row_idx}_${col_idx}`} value={cellValue} />
            ))
         )}
      </StyledContainer>
   );
};

export default CellContainer;
