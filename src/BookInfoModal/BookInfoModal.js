import React from "react";
import Button from "../Button/Button";

const BookInfoModal = (props) => {
  const PLACEHOLDER = "NOTHING";

  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      className="bg-black/75 overflow-y-auto overflow-x-hidden fixed left-10 right-10 top-10 z-50 w-full md:inset-0 h-modal md:h-full "
    >
      <div class="relative p-4 w-full max-w-7xl h-full md:h-auto mx-auto my-20">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
            onClick={props.onExit}
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="flex">
            <div>
              <img
                src={props.bookList[props.clickedBookIndex].imgURL}
                alt={props.bookList.imgURL}
                className="ml-36 w-96 h-auto py-12"
              />
            </div>
            <div className="ml-12 mt-12 font-sans w-96">
              <div className="font-bold text-4xl">
                <h1>{props.bookList[props.clickedBookIndex].bookName}</h1>
              </div>
              <div>
                ______________________________________________________________________
              </div>

              <div className="mt-5 text-2xl font-semibold">
                Link to Purchase:
              </div>
              <div className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 mt-3">
                <a
                  href={props.bookList[props.clickedBookIndex].linkToBuy}
                  target="_blank"
                >
                  {props.bookList[props.clickedBookIndex].bookName}
                </a>
              </div>
              <div className="mt-12 text-2xl font-semibold">Comments:</div>
              <div className="mt-3">
                {props.bookList[props.clickedBookIndex].comments}
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-5"
                type="button"
                onClick={() => {
                  props.onExit();
                  props.removeBookHandler(props.clickedBookIndex);
                }}
              >
                Delete Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookInfoModal;
