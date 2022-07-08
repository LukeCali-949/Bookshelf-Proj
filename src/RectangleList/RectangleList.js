import React from "react";
import Rectangle from "../Rectangle/Rectangle";

const RectangleList = (props) => {
  const firstRow = [];
  const secondRow = [];
  const thirdRow = [];
  const fourthRow = [];
  const fifthRow = [];

  props.bookList.forEach((bookInfo, index) => {
    if (index < 15) {
      firstRow.push(
        <Rectangle
          bookName={bookInfo.bookName}
          linkToBuy={bookInfo.linkToBuy}
          clickBook={props.clickBook}
          key={props.id}
          index={index}
          randomColor={bookInfo.randomColor}
        />
      );
    } else if (index < 30) {
      secondRow.push(
        <Rectangle
          bookName={bookInfo.bookName}
          linkToBuy={bookInfo.linkToBuy}
          clickBook={props.clickBook}
          key={props.id}
          index={index}
          randomColor={bookInfo.randomColor}
        />
      );
    } else if (index < 45) {
      thirdRow.push(
        <Rectangle
          bookName={bookInfo.bookName}
          linkToBuy={bookInfo.linkToBuy}
          clickBook={props.clickBook}
          key={props.id}
          index={index}
          randomColor={bookInfo.randomColor}
        />
      );
    } else if (index < 60) {
      fourthRow.push(
        <Rectangle
          bookName={bookInfo.bookName}
          linkToBuy={bookInfo.linkToBuy}
          clickBook={props.clickBook}
          key={props.id}
          index={index}
          randomColor={bookInfo.randomColor}
        />
      );
    } else if (index < 75) {
      fifthRow.push(
        <Rectangle
          bookName={bookInfo.bookName}
          linkToBuy={bookInfo.linkToBuy}
          clickBook={props.clickBook}
          key={props.id}
          index={index}
          randomColor={bookInfo.randomColor}
        />
      );
    } else {
      console.log("TOO MANY BOOKS");
      // DISPLAY AN ERROR MODAL HERE FUTURE LUKE
    }
  });

  return (
    <>
      <div className="flex  space-x-4 absolute m-auto left-[465px] right-0 top-[128px]">
        {firstRow}
      </div>
      <div className="flex  space-x-4 absolute m-auto left-[465px] right-0 top-[420px]">
        {secondRow}
      </div>
      <div className="flex  space-x-4 absolute m-auto left-[465px] right-0 top-[700px]">
        {thirdRow}
      </div>
      <div className="flex  space-x-4 absolute m-auto left-[465px] right-0 top-[980px]">
        {fourthRow}
      </div>
      <div className="flex  space-x-4 absolute m-auto left-[465px] right-0 top-[1270px]">
        {fifthRow}
      </div>
    </>
  );
};

export default RectangleList;
