import React from "react";
import StyledControlPanel from "./StyledControlPanel";
import Button from "../button/Button";
import { start, stop, reset, next } from "../../app/simulation";

const ControlPanel = () => {
   return (
      <StyledControlPanel>
         <div className="main-controls">
            <Button label={"Start"} fn={start} />
            <Button label={"Stop"} fn={stop} enableWhileRuning />
            <Button label={"Reset"} fn={reset} />
            <Button label={"Next"} fn={next} />
         </div>
         <div className="presets">
            <Button label={"Pulsars"} fn={() => {}} />
            <Button label={"Glider Gun"} fn={() => {}} />
            <Button label={"Puffer Train"} fn={() => {}} />
         </div>
      </StyledControlPanel>
   );
};

export default ControlPanel;
