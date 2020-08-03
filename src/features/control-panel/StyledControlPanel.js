import styled from "styled-components";

export default styled.div`
   display: flex;
   justify-content: space-between;

   width: 76%;
   .main-controls {
      display: flex;
      flex-flow: row, nowrap;
      justify-content: space-between;
      /* background-color: cyan; */

      width: 25rem;
   }

   .presets {
      display: flex;
      flex-flow: row, nowrap;
      justify-content: space-between;
      /* background-color: yellow; */

      width: 32rem;
   }
`;
