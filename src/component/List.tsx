// ICONS
import { AiFillEdit } from "react-icons/Ai";
import { MdDeleteForever } from "react-icons/Md";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const List = ({
  todoItem,
  handleEditTodo,
  handleDeleteTodo,
  handleCompleteTodo,
  isCompleted,
}: any) => {
  return (
    <div
      className={`${
        isCompleted === true ? "line-through opacity-[0.5] " : ""
      }my-1 bg-white h-[60px] w-full rounded-md flex justify-between items-center px-3 Todo-List`}
    >
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          onChange={(e: any) => handleCompleteTodo(e, todoItem)}
        />
        <p
          className={`text-gray-600 w-full text-lg font-sans font-bold mb-0 ${
            isCompleted === true ? "line-through" : ""
          }`}
        >
          {todoItem.todo}
        </p>
      </div>

      <div className="flex gap-2">
        <p className={`mb-0 ${isCompleted ? "line-through" : ""}`}>
          {todoItem.time}
        </p>
        <AiFillEdit
          className="text-2xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleEditTodo(todoItem)}
        />
        <MdDeleteForever
          className="text-2xl font-bold text-red-600 cursor-pointer"
          onClick={() => handleDeleteTodo(todoItem)}
        />
      </div>
    </div>
  );
};

export default List;
