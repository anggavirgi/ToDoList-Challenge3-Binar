import React, { useState } from "react";
import data from "../utils/data.json";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  const [dataList, setDataList] = useState(data);

  // FOR FILTERING
  const [dataFilter, setDataFilter] = useState(dataList);
  const [buttonClick, setButtonClick] = useState(false);

  const [search, setSearch] = useState();

  // CEK ID TERAKHIR
  const lastId = dataList.length > 0 ? dataList[dataList.length - 1].id : null;

  // ADD TODO
  const [newTodo, setNewTodo] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();

    if (!newTodo) {
      return;
    }

    let resultId = lastId + 1;
    const newItem = { id: resultId, task: newTodo, complete: false };

    setDataList([...dataList, newItem]);

    setNewTodo("");
  };

  //EDIT TODO
  const handleEditItem = (item) => {
    setDataList((dataList) =>
      dataList.map((value) =>
        value.id === item.id ? { ...value, task: item.task } : value
      )
    );
  };

  //DELETE TODO
  const handleDeleteItem = (id) => {
    setDataList((dataList) => dataList.filter((value) => value.id !== id));
  };

  // CHECK FUNCTION
  const handleCheck = (id) => {
    setDataList((dataList) =>
      dataList.map((value) =>
        value.id === id ? { ...value, complete: !value.complete } : value
      )
    );
  };

  // SEARCH TODO
  const handleSearch = (e) => {
    e.preventDefault();

    setButtonClick(true);
    setDataFilter(dataList.filter((value) => value.task.toLowerCase().includes(search.toLowerCase())));
  };

  // BUTTON FILTERING
  const showAll = () => {
    setButtonClick(false);
    setDataFilter(dataList);
  };

  const showDone = () => {
    setButtonClick(true);
    setDataFilter(dataList.filter((value) => value.complete === true));
  };

  const showTodo = () => {
    setButtonClick(true);
    setDataFilter(dataList.filter((value) => value.complete === false));
  };

  // BUTTON DELETE
  const deleteDone = () => {
    setDataList((dataList) =>
      dataList.filter((value) => value.complete !== true)
    );
  };

  const deleteAll = () => {
    setDataList((dataList) => []);
  };

  return (
    <div>
      <Navbar />
      <div className="w-3/5 2xl:w-1/2 mt-8 mx-auto border shadow-xl px-10 py-5 mb-16">
        <div className="my-2 font-bold text-center text-lg mb-4">
          ToDo List App - Angga
        </div>
        <form className="w-3/5 mx-auto" onSubmit={handleAddItem}>
          <div className="flex justify-center items-center relative mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="w-5 h-5 absolute stroke-purple-500 left-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <input
              type="text"
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              className="w-full py-2 px-8 text-center text-purple-600 border-b-2 border-purple-300 rounded placeholder-purple-400 outline-none shadow"
              placeholder="Enter new task"
            />
          </div>
          <button className="w-full text-center py-2 text-white rounded shadow bg-[#F79700] hover:bg-[#ED8200]">
            Save
          </button>
        </form>

        <hr className="my-7" />

        <div className="flex justify-between gap-10 mb-10">
          <form
            className="flex items-center relative w-1/4"
            onSubmit={handleSearch}
          >
            <input
              type="text"
              className="w-full py-2 ps-2 pe-8 text-sm text-purple-600 border-b-2 border-purple-300 rounded placeholder-purple-400 outline-none shadow"
              placeholder="find your ToDo"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="absolute right-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                className="w-4 h-4 stroke-purple-500 hover:stroke-purple-700 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
          <div className="w-3/5 flex items-center gap-8 text-sm">
            <div className="font-semibold text-base text-[#16A3B5]">Filter</div>
            <Button
              name="All"
              onClick={showAll}
              bgColor="bg-[#16A3B5]"
              bgHover="hover:bg-[#2f8d9c]"
              action={showAll}
            />
            <Button
              name="Done"
              onClick={showDone}
              bgColor="bg-[#16A3B5]"
              bgHover="hover:bg-[#2f8d9c]"
              action={showDone}
            />
            <Button
              name="ToDo"
              onClick={showTodo}
              bgColor="bg-[#16A3B5]"
              bgHover="hover:bg-[#2f8d9c]"
              action={showTodo}
            />
          </div>
        </div>

        <div>
          {buttonClick
            ? dataFilter.map((value, index) => (
                <Card
                  key={index}
                  id={value.id}
                  title={value.task}
                  status={value.complete}
                  deleteItem={handleDeleteItem}
                  editItem={handleEditItem}
                  checkItem={handleCheck}
                />
              ))
            : dataList.map((value, index) => (
                <Card
                  key={index}
                  id={value.id}
                  title={value.task}
                  status={value.complete}
                  deleteItem={handleDeleteItem}
                  editItem={handleEditItem}
                  checkItem={handleCheck}
                />
              ))}
        </div>

        <div className="flex gap-6 mt-4">
          <Button
            name="Delete done tasks"
            onClick={deleteDone}
            bgColor="bg-red-500"
            bgHover="hover:bg-red-600"
            action={deleteDone}
          />
          <Button
            name="Delete all tasks"
            onClick={deleteAll}
            bgColor="bg-red-500"
            bgHover="hover:bg-red-600"
            action={deleteAll}
          />
        </div>
      </div>
    </div>
  );
};
