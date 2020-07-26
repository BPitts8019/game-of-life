import React, { useState } from "react";
import { StyledCell } from "./StyledCell";

export default () => {
   const [isChecked, setIsChecked] = useState(true);
   const handleClick = (event) => {
      setIsChecked(!isChecked);
   };

   return (
      <StyledCell
         className={isChecked ? "alive" : ""}
         onClick={handleClick}
      ></StyledCell>
   );
};
