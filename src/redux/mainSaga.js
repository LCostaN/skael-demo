import { all } from "redux-saga/effects";
import BookSaga from "./Books/sagas";

export default function* rootSaga() {
  yield all([BookSaga]);
}
