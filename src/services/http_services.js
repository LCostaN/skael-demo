import { request } from "../utils/http";
import { BOOKS_URL } from "../utils/endpoints";

export function getBooks(page) {
  return request.get(BOOKS_URL + (page ? `?page=${page}` : ""));
}
