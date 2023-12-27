import { Theme } from "@emotion/react";
import { colors } from "./color";

const radius = {
  radius_xl: "16px",
  radius_lg: "8px",
  radius_md: "6px",
  radius_sm: "4px",
};

const font = {
  font_normal: 400,
  font_bold: 700,
  font_black: 900,
};

declare module "@emotion/react" {
  export interface Theme {
    colors: typeof colors;
    radius: typeof radius;
    font: typeof font;
  }
}

const theme: Theme = {
  colors,
  radius,
  font,
};

export default theme;
