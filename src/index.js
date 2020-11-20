import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import store from "./redux/store";

import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';

const jsx = (
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor = {persistor} >
         <React.StrictMode>
           <App />
        </React.StrictMode>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("root"));
