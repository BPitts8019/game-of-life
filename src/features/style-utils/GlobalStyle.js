import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import {
   headerFont,
   bodyFont,
   colors,
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
      background-color: ${colors.bodyColor};
   }

   h1, h2, h3, h4, h5 {
      font-family: ${headerFont};
      /* color: ${colors.headerColor}; */
      font-weight: bold;
   }

   h1 {
      font-size: 3.0rem;
   }

   h2 {
      font-size: 2.25rem;
   }

   h3 {
      font-size: 1.755rem;
   }

   h4 {
      font-size: 1.5rem;
   }

   h5 {
      font-size: 1.245rem;
   }

   p, h6 {
      font-family: ${bodyFont};
   }

   h6 {
      font-size: 1rem;
   }

   p {
      font-size: 1.6rem;
   }

   .app {
      /* background-color: ${colors.attentionColor};
      color: ${colors.darkText}; */
      margin: 0 auto;
      min-width: ${MIN_WIDTH};
      max-width: ${MAX_WIDTH};
      padding: 2rem;

      .app-title {
         width: 18.5rem;
         padding: 1.5rem 0;

         p {
            text-align: right;
         }
      }
   }
`;
