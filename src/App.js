import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css";

import AppContainer from "./components/AppContainer";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer />
    </ThemeProvider>
  );
}
