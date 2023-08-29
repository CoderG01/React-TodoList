// ICONS
import { AiFillEdit } from "react-icons/Ai";
import { MdDeleteForever } from "react-icons/Md";

const List = ({
  todoItem,
  handleEditTodo,
  handleDeleteTodo,
  handleCompleteTodo,
}: any) => {
  return (
    <div
      className={`${
        todoItem.completed ? "line-through opacity-[0.5]" : ""
      } my-1 bg-white min-h-[60px] w-full rounded-md flex justify-between items-center px-3 Todo-List h-auto py-4`}
    >
      <div className="flex gap-2 items-start">
        <input
          type="checkbox"
          onChange={(e: any) => handleCompleteTodo(e, todoItem)}
          className="mt-2"
        />
        <p
          className={`text-gray-600 w-full text-lg font-sans font-bold mb-0 pe-4 text-justify ${
            todoItem.completed  ? "line-through" : ""
          }`}
        >
          {todoItem.todo}
        </p>
      </div>

      <div className="flex gap-2 min-w-[130px]">
        <p className={`mb-0 ${todoItem.completed  ? "line-through" : ""}`}>
          {todoItem.time}
        </p>
        <AiFillEdit
          className="text-xl font-bold text-blue-600 cursor-pointer"
          onClick={() => handleEditTodo(todoItem)}
        />
        <MdDeleteForever
          className="text-xl font-bold text-red-600 cursor-pointer"
          onClick={() => handleDeleteTodo(todoItem)}
        />
      </div>
    </div>
  );
};

export default List;
