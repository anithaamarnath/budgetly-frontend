import React from "react";
import ReactDOM from "react-dom/client"; // React 18 API
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle, theme } from "./lib/theme";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root")!); // Use the new API

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
