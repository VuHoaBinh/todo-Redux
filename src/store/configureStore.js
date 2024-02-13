import { legacy_createStore as createStore } from "redux";
// import { devToolsEnhancer } from "redux-devtools-extension";
// import { configureStore } from "@reduxjs/toolkit";
import reducer from "./task";
const store = createStore(reducer);
// const store = configureStore(reducer);
export default store;
