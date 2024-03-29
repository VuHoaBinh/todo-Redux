import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/App";
import "./styles/global.scss";
import reportWebVitals from "./reportWebVitals";
// redux
import { Provider } from "react-redux";
// import { legacy_createStore as createStore } from "redux";
// import rootReducer from "./redux/reducers";
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from "../src/redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const store = createStore(rootReducer);
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
