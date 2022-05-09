import {
  GET_BOOK_LIST,
  GET_NEXT_BOOK_LIST,
  GET_PREVIOUS_BOOK_LIST,
} from "./constants";

export const appBookListRequest = (page) => ({
  type: GET_BOOK_LIST,
  payload: page,
});

export const appNextBookList = () => ({
  type: GET_NEXT_BOOK_LIST,
});

export const appPreviousBookList = () => ({
  type: GET_PREVIOUS_BOOK_LIST,
});
