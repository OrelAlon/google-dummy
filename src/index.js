import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ResultContextProvider } from "./components/contexts/ResultContextProvider";
ReactDOM.render(
  <ResultContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </ResultContextProvider>,
  document.getElementById("root")
);
