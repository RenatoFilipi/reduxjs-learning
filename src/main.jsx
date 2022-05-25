import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./pages/App";
import Counter from "./pages/Counter";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
