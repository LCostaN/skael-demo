import { all, call, takeLatest, put } from "redux-saga/effects";
import { GET_BOOK_LIST } from "./constants";
import { getBooks } from "../../services/http_services";
import { actionBooks, actionLoading, actionReady } from "./slices";

function* handleGetBookList(action) {
  try {
    yield put({ type: actionLoading.type });
    const { payload } = action;
    const response = yield call(getBooks, payload);
    yield put({
      type: actionBooks.type,
      payload: { ...response, page: payload },
    });
  } catch (e) {
    console.log(e);
  } finally {
    yield put({ type: actionReady.type });
  }
}

export default all([takeLatest(GET_BOOK_LIST, handleGetBookList)]);
