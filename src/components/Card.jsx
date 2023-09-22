import React, { useState } from "react";

export const Card = (props) => {
  const { id, title, status, deleteItem, editItem, checkItem } = props;

  const [newTitle, setNewTitle] = useState(title);
  const [onEdit, setOnEdit] = useState(false);

  // HANDLE EDIT
  const handleSubmitEdit = (e) => {
    e.preventDefault();

    const newItem = { id, task: newTitle };
    editItem(newItem);

    setOnEdit(!onEdit);
  };

  return (
    <div className="flex justify-between border py-3 px-6 text-sm rounded mb-3">
      {onEdit ? (
        <form onSubmit={handleSubmitEdit} className="flex items-center gap-3">
          <input
            type="text"
            className="w-full text-sm outline-none border-b"
            placeholder="find your ToDo"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            autoFocus
          />
          <button className="text-sm text-white bg-yellow-500 hover:bg-yellow-600 px-2 rounded">
            save
          </button>
        </form>
      ) : (
        <div
          className={`font-semibold ${
            status ? "line-through text-red-500" : ""
          } `}
        >
          {title}
        </div>
      )}
      <div className="flex items-center gap-6">
        <input
          type="checkbox"
          className="cursor-pointer checked:bg-red-600"
          checked={status}
          onChange={() => checkItem(id)}
        />
        <div className="cursor-pointer" onClick={() => setOnEdit(!onEdit)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-5 h-5 stroke-yellow-500 hover:stroke-yellow-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </div>
        <div className="cursor-pointer" onClick={() => deleteItem(id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-5 h-5 stroke-red-500 hover:stroke-red-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
