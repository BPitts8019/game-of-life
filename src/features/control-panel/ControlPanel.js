import React from "react";
import StyledControlPanel from "./StyledControlPanel";
import Button from "../button/Button";
import { start, stop, reset, next } from "../../app/simulation";
import { PULSARS, GLIDER_GUN, PUFFER_TRAIN } from "../../app/presets";
import { selectPreset } from "../../context/game/actions";

const ControlPanel = () => {
   const presetClick = (_, dispatch, { preset }) => {
      dispatch(selectPreset(preset));
   };

   const randomPreset = ({ display }, dispatch) => {
      const randomBuffer = display.map((row) =>
         row.map((column) => Math.round(Math.random()))
      );
      dispatch(selectPreset(randomBuffer));
   };

   return (
      <StyledControlPanel>
         <div className="main-controls">
            <Button label={"Start"} fn={start} />
            <Button
               label={"Stop"}
               fn={stop}
               options={{ enableWhileRuning: true }}
            />
            <Button label={"Reset"} fn={reset} />
            <Button label={"Next"} fn={next} />
         </div>
         <div className="presets">
            <Button
               label={"Pulsars"}
               fn={presetClick}
               options={{ preset: PULSARS }}
            />
            <Button
               label={"Glider Gun"}
               fn={presetClick}
               options={{ preset: GLIDER_GUN }}
            />
            <Button
               label={"Puffer Train"}
               fn={presetClick}
               options={{ preset: PUFFER_TRAIN }}
            />
            <Button label={"Random"} fn={randomPreset} />
         </div>
      </StyledControlPanel>
   );
};

export default ControlPanel;
