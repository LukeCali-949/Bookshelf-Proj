import React, { useState, useEffect } from "react";
import bookshelfBG from "./img/Bookshelves-Empty.svg";

import FormModal from "./FormInput/FormModal";

import RectangleList from "./RectangleList/RectangleList";
import BookInfoModal from "./BookInfoModal/BookInfoModal";
import AddBookSection from "./AddBookSection/AddBookSection";

// WHERE YOU LEFT OFF: YOU NEED TO PASS UP DATA FROM THE INDIVIDUAL BOOK (RECTANGLE) TO THIS APP COMPONENT
// TO THEN BE PASSED DOWN TO BOOK INFO MODAL SO THAT IT CAN KNOW WHICH DATA TO DISPLAY, LOOK AT THE UDEMY COURSE TO REMEMBER HOW

function App() {
  const [formModalisVisible, setFormModalisVisible] = useState(false);
  const [bookInfoModalisVisible, setBookInfoModalisVisible] = useState(false);
  const [clickedBookIndex, setClickBookIndex] = useState(0);

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    const bookData = window.localStorage.getItem("MY_BOOK_LIST");
    if (bookData != null) setBookList(JSON.parse(bookData));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("MY_BOOK_LIST", JSON.stringify(bookList));
  }, [bookList]);

  const onAddBook = (bookName, imgURL, comments, linkToBuy, randomColor) => {
    setBookList((prevBookList) => {
      return [
        ...prevBookList,
        {
          bookName: bookName,
          imgURL: imgURL,
          comments: comments,
          linkToBuy: linkToBuy,
          randomColor: randomColor,
          id: bookName + Math.random().toString(),
          key: bookName + Math.random().toString(),
        },
      ];
    });
  };

  // state setter functions
  const exitHandler = () => {
    setFormModalisVisible(false);
    setBookInfoModalisVisible(false);
  };

  const formButtonHandler = () => {
    setFormModalisVisible(true);
  };

  const bookInfoModalHandler = (index) => {
    setBookInfoModalisVisible(true);
    setClickBookIndex(index);
    // setClickBookIndex(bookList)
  };

  const removeBookHandler = (index) => {
    setBookList((prevBookList) => {
      return prevBookList.filter((elem, elemIndex) => elemIndex !== index);
    });
  };
  return (
    <>
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-max ">
        <AddBookSection onClick={formButtonHandler} />
        <RectangleList bookList={bookList} clickBook={bookInfoModalHandler} />
        {bookInfoModalisVisible && (
          <BookInfoModal
            onExit={exitHandler}
            bookList={bookList}
            clickedBookIndex={clickedBookIndex}
            removeBookHandler={removeBookHandler}
          />
        )}
        {formModalisVisible && (
          <FormModal onExit={exitHandler} onAddBook={onAddBook} />
        )}
        <img
          src={bookshelfBG}
          className=" ml-28 min-w-img-size pt-10"
          alt="empty-bookshelf "
        />
        {/* <Rectangle /> */}
      </div>
    </>
  );
}

export default App;
