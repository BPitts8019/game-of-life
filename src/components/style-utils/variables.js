//*** Constants ***/
export const MAX_WIDTH = "1040px";
export const MIN_WIDTH = "400px";

//*** Fonts ***//
export const headerFont = `'Almendra SC', serif`;
export const bodyFont = `'Almendra', serif`;

//*** Colors ***//
const palette = [
   "#000000", // black [0]
   "#ffffff", // white [1]
   "#eeeeee", // color [2]
   "#dddddd", // color [3]
   "#bbbbbb", // color [4]
   "#999999", // color [5]
];
const alpha = "ff";

//*** Named Colors ***//
const darkText = palette[0];
const lightText = palette[1];
const attentionColor = palette[1];
const attentionBorder = palette[1];
const subtleBorder = palette[0];
const bgColor = palette[5];
const darkBackground = palette[5];
const accent = palette[3];

// in global styles
const headerColor = attentionColor;
const bodyColor = bgColor;
// in global styles can change properties but not the name.
// const overlayBackground = [
//   accent + alpha,
//   attentionBorder + alpha,
//   attentionColor + alpha
// ];
const link = darkText;
const linkVisited = darkText;
const linkHover = subtleBorder;

export const colors = {
   attentionColor,
   attentionBorder,
   subtleBorder,
   bgColor,
   accent,
   darkText,
   lightText,
   darkBckgrnd: darkBackground,
   headerColor,
   bodyColor,
   link,
   linkVisited,
   linkHover,
};
