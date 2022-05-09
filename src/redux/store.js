import BookReducer from "./Books/slices";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./mainSaga";
import { configureStore, MiddlewareArray } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const store = configureStore({
  reducer: {
    book: BookReducer,
  },
  middleware: new MiddlewareArray().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
