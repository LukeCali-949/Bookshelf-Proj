import React, { useState } from "react";

const FormModal = (props) => {
  const [bookName, setBookName] = useState("");
  const [imgURL, setimgURL] = useState("");
  const [comments, setComments] = useState("");
  const [linkToBuy, setLinkToBuy] = useState("");

  const genRanHex = () =>
    [...Array(6)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");

  const addBookHandler = (event) => {
    event.preventDefault();
    let randomColor = genRanHex();
    console.log(randomColor);

    props.onAddBook(bookName, imgURL, comments, linkToBuy, randomColor);
    setBookName("");
    setimgURL("");
    setComments("");
    setLinkToBuy("");
  };

  const bookNameChangeHandler = (event) => {
    setBookName(event.target.value);
  };

  const imgURLChangeHandler = (event) => {
    setimgURL(event.target.value);
  };

  const commnetChangeHandler = (event) => {
    setComments(event.target.value);
  };

  const linkToBuyChangeHandler = (event) => {
    setLinkToBuy(event.target.value);
  };

  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      className="bg-black/75 overflow-y-auto overflow-x-hidden fixed left-10 right-10 top-10 z-50 w-full md:inset-0 h-modal md:h-full "
    >
      <div class="relative p-4 w-full max-w-md h-full md:h-auto mx-auto my-20">
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
          <div class="py-6 px-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
              Please Input Your Book Information
            </h3>
            <form class="space-y-6" action="#" onSubmit={addBookHandler}>
              <div>
                <label
                  for="nameOfBook"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Name of Book
                </label>
                <input
                  type="nameOfBook"
                  name="nameOfBook"
                  id="nameOfBook"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder={`${'"Divine Comedy"'}`}
                  required
                  value={bookName}
                  onChange={bookNameChangeHandler}
                />
              </div>
              <div>
                <label
                  for="linkToBuy"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Link to Purchase Book
                </label>
                <input
                  type="linkToBuy"
                  name="linkToBuy"
                  id="linkToBuy"
                  placeholder="link must include http/s"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={linkToBuy}
                  onChange={linkToBuyChangeHandler}
                />
              </div>
              <div>
                <label
                  for="imgURL"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image URL
                </label>
                <input
                  type="imgURL"
                  name="imgURL"
                  id="imgURL"
                  placeholder="input image link"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={imgURL}
                  onChange={imgURLChangeHandler}
                />
              </div>

              <div>
                <label
                  for="comments"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Comments
                </label>
                <input
                  type="comments"
                  name="comments"
                  id="comments"
                  placeholder="wow this book is so cool"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                  value={comments}
                  onChange={commnetChangeHandler}
                />
              </div>

              <button
                type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
