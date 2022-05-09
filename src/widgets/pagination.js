import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { appBookListRequest } from "../redux/Books/actions";

export default function Pagination() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.book.page);
  const count = useSelector((state) => state.book.count);
  const books = useSelector((state) => state.book.books);
  const totalPages = Math.ceil(count / books.length);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        <li className={"page-item" + (page < 2 ? " disabled" : "")}>
          <a
            className="page-link"
            onClick={() => dispatch(appBookListRequest(page - 1))}
          >
            Previous
          </a>
        </li>
        {page > 2 && (
          <li className="page-item">
            <a className="page-link" href="#">
              {page - 2}
            </a>
          </li>
        )}
        {page > 1 && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch(appBookListRequest(page - 2))}
            >
              {page - 1}
            </a>
          </li>
        )}
        <li className="page-item active">
          <a className="page-link">{page}</a>
        </li>
        {totalPages > page && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch(appBookListRequest(page + 1))}
            >
              {page + 1}
            </a>
          </li>
        )}
        {totalPages > page + 1 && (
          <li className="page-item">
            <a
              className="page-link"
              onClick={() => dispatch(appBookListRequest(page + 2))}
            >
              {page + 2}
            </a>
          </li>
        )}
        <li className={"page-item" + (totalPages > page ? "" : " disabled")}>
          <a
            className="page-link"
            onClick={() => dispatch(appBookListRequest(page + 1))}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
