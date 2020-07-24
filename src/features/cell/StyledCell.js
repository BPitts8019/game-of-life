import styled from "styled-components";
// import {colors} from "../style-utils/variables";

const alive = "#00cc00";
const dead = "#cc0000";

export const StyledCell = styled.div`
   width: 1rem;
   height: 1rem;
   border: 2px solid grey;
   margin: 0.3rem;
   text-align: center;
   background-color: ${dead};

   &.alive {
      background-color: ${alive};
   }
`;
