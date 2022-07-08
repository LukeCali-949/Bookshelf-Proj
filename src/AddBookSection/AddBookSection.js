import React from "react";
import Button from "../Button/Button";

const AddBookHandler = (props) => {
  return (
    <>
      <div class="absolute bg-white rounded-lg shadow dark:bg-gray-700 mx-auto place-content-center align-middle py-2 inline-block top-[170px] left-[120px]">
        {/* <h1 className="mt-2 mr-5">
          {"=============================================>"}
        </h1> */}
        <Button onClick={props.onClick} />
        {/* <h1 className="mt-2">
          {"<============================================="}
        </h1> */}
      </div>
    </>
  );
};

export default AddBookHandler;
