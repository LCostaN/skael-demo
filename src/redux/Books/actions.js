import {
  GET_BOOK_LIST,
  GET_NEXT_BOOK_LIST,
  GET_PREVIOUS_BOOK_LIST,
} from "./constants";

export const appBookListRequest = (page) => ({
  type: GET_BOOK_LIST,
  payload: page,
});
