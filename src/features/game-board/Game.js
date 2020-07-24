import React from "react";
import { start, stop } from "../../app/simulation";

export default () => {
   return (
      <>
         <button
            onClick={() => {
               start({ delay: 500 });
            }}
         >
            Start Simulation
         </button>
         <button
            onClick={() => {
               stop();
            }}
         >
            Stop Simulation
         </button>
      </>
   );
};
