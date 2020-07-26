import React from "react";
import { start, stop, reset } from "../../app/simulation";

export default () => {
   return (
      <>
         <button
            onClick={() => {
               start(500, 5);
            }}
         >
            Start
         </button>
         <button onClick={stop}>Stop</button>
         <button onClick={reset}>Reset</button>
      </>
   );
};
