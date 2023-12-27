import { Global, Interpolation, Theme } from "@emotion/react";

const style: Interpolation<Theme> = {
  ".h1": {
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: "bold",
  },
  ".h2": {
    fontSize: "24px",
    lineHeight: "28px",
    fontWeight: "bold",
  },
  ".h3": {
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  ".h4": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  ".h5": {
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: "bold",
  },
  ".h6": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: "bold",
  },
  ".body1": {
    fontSize: "16px",
    lineHeight: "24px",
  },
  ".body2": {
    fontSize: "14px",
    lineHeight: "20px",
  },
  ".body3": {
    fontSize: "12px",
    lineHeight: "16px",
  },
  ".label1": {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  ".label2": {
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "bold",
  },
  ".label3": {
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "bold",
  },
  "text-xs": {
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
  "text-sm": {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  "text-base": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  "text-lg": {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
  },
  "text-xl": {
    fontSize: "1.25rem",
    lineHeight: "1.75rem",
  },
  "text-2xl": {
    fontSize: "1.5rem",
    lineHeight: "2rem",
  },
  "text-3xl": {
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
};

export default function GlobalStyle() {
  return <Global styles={style} />;
}
