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
      /* text-decoration: underline; */
      margin-bottom: 0.8rem;
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

      .container {
         display: flex;
         flex-flow: row nowrap;

         width: 100%;

         .game-board {
            margin-right: 3rem;
         }

         .extra-info {
            width: 200px;
            text-align: justify;

            h3 {
               text-align: center;
            }

            hr {
               background-image: linear-gradient(to right, #00000000, #594236bf, #00000000);
               border: 0;
               height: 2px;
               margin: 1.7rem 0;
               width: 100%;
            }

            ol {
               li {
                  font-family: ${bodyFont};
                  font-size: 1.4rem;
                  margin: 1.2rem 0;
               }
            }
         }
      }
      
      .console {
         display: flex;
         flex-flow: row nowrap;
         justify-content: space-between;
         align-items: flex-end;

         width: 80rem;
      }
   }
`;
