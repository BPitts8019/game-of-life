import React from "react";
import { start, stop, reset, next } from "../../app/simulation";

export default () => {
   return (
      <>
         <button
            onClick={() => {
               start(200);
            }}
         >
            Start
         </button>
         <button onClick={stop}>Stop</button>
         <button onClick={reset}>Reset</button>
         <button onClick={next}>Next</button>
      </>
   );
};
