import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import GlobalStyle from "./features/style-utils/GlobalStyle";
import { Provider } from "react-redux";

ReactDOM.render(
   <React.StrictMode>
      <GlobalStyle />
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
