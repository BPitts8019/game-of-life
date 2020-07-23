import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import {
   bodyFont,
   colors,
   headerFont,
   MIN_WIDTH,
   MAX_WIDTH,
} from "./variables";

export default createGlobalStyle`
   ${reset}

   * {
      box-sizing: border-box;
   }

   html {
      font-size: 62.5%;
   }

   body {
      height: 100%;
      margin: 0;
   }

   h1, h2, h3, h4, h5, h6 {
      /* font-family: ${headerFont};
      color: ${colors.headerColor}; */
      font-weight: bold;
   }

   h1 {
      font-size: 2.0rem;
   }

   h2 {
      font-size: 1.5rem;
   }

   h3 {
      font-size: 1.17rem;
   }

   h4 {
      font-size: 1rem;
   }

   h5 {
      font-size: 0.83rem;
   }

   h6 {
      font-size: 0.67rem;
   }

   p {
      font-size: 1rem;
   }

   .App {
      /* background-color: ${colors.attentionColor};
      color: ${colors.darkText}; */
      margin: 0 auto;
      min-width: ${MIN_WIDTH};
      max-width: ${MAX_WIDTH};
   }
`;
