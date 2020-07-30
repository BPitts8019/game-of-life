import styled from "styled-components";
// import {colors} from "../style-utils/variables";

const alive = "#eaea00";
const dead = "#353535";

export default styled.div`
   width: 2rem;
   height: 2rem;
   border: 1px solid darkkhaki;
   /* margin: 0.1rem; */
   background-color: ${dead};

   &.alive {
      background-color: ${alive};
   }
`;
