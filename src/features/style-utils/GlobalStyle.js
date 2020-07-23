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

   h1, h2, h3, h4, h5 {
      font-family: ${headerFont};
      color: ${colors.headerColor};
      font-weight: bold;
   }

   .App {
      background-color: ${colors.attentionColor};
      color: ${colors.lightText};
      margin: 0 auto;
      min-width: ${MIN_WIDTH};
      max-width: ${MAX_WIDTH};
   }
`;
