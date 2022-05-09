import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { appBookListRequest } from "../redux/Books/actions";
import Pagination from "../widgets/pagination";
import { SortableList } from "@thaddeusjiang/react-sortable-list";
import { actionSetBooks } from "../redux/Books/slices";

export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const isLoading = useSelector((state) => state.book.isLoading);
  const nextUrl = useSelector((state) => state.book.nextUrl);

  useEffect(() => {
    dispatch(appBookListRequest());
  }, []);

  const removeItem = (item) => {
    dispatch({
      type: actionSetBooks.type,
      payload: books.filter((value) => value.id !== item.id),
    });
  };

  const downloadBook = (item) => {
    const newWindow = window.open(
      item.formats["text/html"],
      "_blank",
      "noopener,noreferrer"
    );
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="container d-flex flex-column pb-5 vh-100">
      <h1 className="my-4 pt-5">Books</h1>
      <div className="flex-row-reverse d-flex">
        <Pagination />
      </div>
      <div className="d-flex flex-column flex-fill">
        {isLoading ? (
          <div className="spinner-border text-primary m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <SortableList
            items={books}
            setItems={(items) =>
              dispatch({ type: actionSetBooks.type, payload: items(books) })
            }
            itemRender={({ item }) => (
              <div className="card mt-3 p-3" key={item.id}>
                <div className="d-flex flex-row">
                  <img
                    src={item.formats["image/jpeg"]}
                    alt="book-avatar"
                    className="book-img bg-light rounded-3"
                  />
                  <div className="d-flex flex-column ms-3 flex-fill">
                    <h5 className="fw-normal book-title mb-0">
                      Title: <b>{item.title}</b>
                    </h5>
                    <div className="small mt-auto">
                      authors:
                      {item.authors.map((value) => (
                        <label key={value.name} className="me-2 ms-1">
                          <b key={value.name}>{value.name}</b>(
                          {value.birth_year} ~ {value.death_year})
                        </label>
                      ))}
                    </div>
                    <div className="mt-1 small">
                      Downloads: <b>{item.download_count}</b>
                    </div>
                    <div className="mt-1 small">
                      Languages:
                      {item.languages.map((value, index) => (
                        <b key={index} className="ms-1 text-capitalize">
                          {index !== 0 ? ", " : ""}
                          {value}
                        </b>
                      ))}
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onMouseDown={() => downloadBook(item)}
                    >
                      Open
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm mt-2"
                      onMouseDown={() => removeItem(item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            )}
          />
        )}
      </div>
      <div className="d-flex flex-row-reverse my-4">
        <Pagination />
      </div>
    </div>
  );
}
