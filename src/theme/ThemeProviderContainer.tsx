import { ThemeProvider } from "@emotion/react";
import React from "react";
import theme from "./theme";

type Props = {
  children: React.ReactNode;
};

export default function ThemeProviderContainer({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
