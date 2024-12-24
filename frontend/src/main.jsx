import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
let persistor = persistStore(store)

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading='null' persistor={persistor}>

      </PersistGate>
      <App />
    </Provider>
  </React.StrictMode>,
);
