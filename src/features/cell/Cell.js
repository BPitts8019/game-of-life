import React, { useState, useEffect } from "react";
import StyledCell from "./StyledCell";

const Cell = ({ value }) => {
   useEffect(() => {
      setIsChecked(!!value);
   }, [value]);

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

export default Cell;
