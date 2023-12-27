import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeProviderContainer from "./theme/ThemeProviderContainer.tsx";
import GlobalStyle from "./GlobalStyle.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProviderContainer>
      <GlobalStyle />
      <App />
    </ThemeProviderContainer>
  </React.StrictMode>
);
