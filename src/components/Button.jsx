import React from "react";

export const Button = (props) => {
  const { name, bgColor, bgHover, action } = props;

  const handleButton = (e) => {
    e.preventDefault();

    if (name === "Done" || name === "Delete done tasks") {
      action({ complete: true });
    } else if (name === "ToDo") {
      action({ complete: false });
    } else if (name === "All" || name === "Delete all tasks") {
      action();
    }
  };

  return (
    <button
      onClick={handleButton}
      className={`w-full text-center py-2 text-white ${bgColor} ${bgHover} rounded shadow`}
    >
      {name}
    </button>
  );
};
