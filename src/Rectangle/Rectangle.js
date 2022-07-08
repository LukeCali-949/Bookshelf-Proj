import React from "react";

const Rectangle = (props) => {
  const bookName =
    props.bookName.length < 22
      ? props.bookName
      : props.bookName.slice(0, 17) + "...";

  return (
    <>
      <div
        className="bg-[#fe3035] border-dotted min-w-rectangle-width h-[12.5rem] shadow-xl shadow-red-500/50 hover:bg-violet-400 hover:cursor-pointer rounded-md"
        onClick={() => props.clickBook(props.index)}
        key={props.key}
      >
        <div
          className="rotate-180 mb-1 text-black font-bold ml-2.5 mt-3"
          style={{ writingMode: "vertical-rl" }}
          key={props.key}
        >
          {bookName}
        </div>
      </div>
    </>
  );
};

export default Rectangle;
