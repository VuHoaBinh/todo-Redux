import { configureStore } from "@reduxjs/toolkit";
import reducerEmployee from "./employee";
import reducerTask from "./task";
import log from "../middleware/log";
import logger from "redux-logger";
import error from "../middleware/error";
const store = configureStore({
  reducer: {
    task: reducerTask,
    employee: reducerEmployee,
  },

  // logger is history all state in redux.
  middleware: (GetDefaultMiddleware) => [
    ...GetDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
