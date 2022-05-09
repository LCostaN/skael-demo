import { request } from "../utils/http";
import { BOOKS_URL } from "../utils/endpoints";
import { appConfig } from "../utils/config";

export function getBooks(page) {
  // return request.get(BOOKS_URL + (page ? `?page=${page}` : ""));
  // using fetch to solve the cors problem
  return fetch(
    `${appConfig.booksEndPoint}/${BOOKS_URL}` + (page ? `?page=${page}` : "")
  ).then((e) => e.json());
}
