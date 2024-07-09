import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./Gloab";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { AuthProvider } from "./context/Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RecipeProvider } from "./context/Recipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RecipeProvider>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </RecipeProvider>
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);
