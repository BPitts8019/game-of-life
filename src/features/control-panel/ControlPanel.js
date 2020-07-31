import React from "react";
import StyledControlPanel from "./StyledControlPanel";
import Button from "../button/Button";
import { start, stop, reset, next } from "../../app/simulation";

const ControlPanel = () => {
   return (
      <StyledControlPanel>
         <Button label={"Start"} fn={start} delay={50} />
         <Button label={"Stop"} fn={stop} />
         <Button label={"Reset"} fn={reset} />
         <Button label={"Next"} fn={next} />
      </StyledControlPanel>
   );
};

export default ControlPanel;
