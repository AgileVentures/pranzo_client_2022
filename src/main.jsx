import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";

import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import theme from "./theme";
import "./i18n";

if (window.Cypress) {
  window.store = store;
} else {
  window.store = store;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
