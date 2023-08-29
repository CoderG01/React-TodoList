import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
// ICONS
import { BiPlus } from "react-icons/Bi";
import List from "./component/List";
// THIRD PARTY LIBRARY
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import UpdateTodoModal from "./component/UpdateTodoModal";

function App() {
  const [todo, setTodo] = useState<string | undefined>("");
  const [editTodo, setEditTodo] = useState<string | undefined>("");
  const [modalShow, setModalShow] = React.useState(false);
  const [todoList, setTodoList] = useState<any>([]);
  const [editTodoId, setEditTodoId] = useState<any>("");


  // UNIQUE ID GENERATOR
  const uniqueId = () => {
    let uniqueId: string = "";
    let string = "abcdefghijklmnopqurstuvwxyz1234567890!@#$%^&*()_+";
    for (let i = 0; i < string.length; i++) {
      const randomNumber = Math.floor(Math.random() * string.length);
      uniqueId += string.charAt(randomNumber);
    }
    return uniqueId;
  };

  // CURRENT TIME GENERATOR
  const currentTime = () => {
    let time = new Date();
    const date = time.getDate();
    const month = time.getMonth();
    const year = time.getFullYear();
    return `${date}-${month}-${year}`;
  };

  // ADD TODO
  const handleAddTodo = () => {
    if (todo !== "") {
      const newTodo = {
        id: uniqueId(),
        time: currentTime(),
        todo: todo,
        completed: false,
      };
      setTodoList((prev: any) => [...prev, newTodo]);

      localStorage.setItem("todos", JSON.stringify([...todoList, newTodo]));
      setTodo("");
    } else {
      toast.warning("Please enter a todo !", {
        className: "toast-warning",
      });
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleCompleteTodo = (e: any, todo: any) => {
    let updatedTodos = todoList.map((data: any) => {
      if (data.id === todo.id) {
        return {
          ...todo,
          completed: e.target.checked ? true: false,
        };
      }
      return data;
    });
    console.log(updatedTodos);
    setTodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleEditTodo = (data: any) => {
    setModalShow(true);
    setEditTodoId(data.id);
    setEditTodo(data.todo);
  };

  const handleUpdateTodo = () => {
    let updaetdData = todoList.map((data: any) =>
      data.id === editTodoId
        ? {
            ...data,
            todo: editTodo,
          }
        : data
    );
    console.log(updaetdData);

    setTodoList(updaetdData);
    localStorage.setItem("todos", JSON.stringify(updaetdData));
    setEditTodoId("");
    setEditTodo("");
    setModalShow(false);
  };

  const handleDeleteTodo = (deleteTodo: any) => {
    let updatedTodos = todoList.filter(
      (data: any) => data.id !== deleteTodo.id
    );
    setTodoList(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    if (localStorage.length !== 0) {
      const todos: any = localStorage.getItem("todos");
      if (todos) {
        setTodoList(JSON.parse(todos));
      }
    }
  }, []);

  return (
    <>
      <div className="container-fluid mx-auto bg-[#e3e9ff] min-h-screen h-full overflow-y-scroll w-full flex items-center justify-center">
        <div className="w-[95%] md:w-[600px] h-[500px]">
          {/* ------ADD TODO INPUT------ */}
          <div className="flex gap-3 items-center">
            <input
              type="text"
              name="todo"
              value={todo}
              onChange={(e: any) => setTodo(e.target.value)}
              placeholder="✍️ . . . "
              className="rounded-md focus-visible:outline-none bg-[#0000001f] w-full px-4 text-black font-normal h-[80px] text-[24px]"
              onKeyPress={handleKeyPress}
            />

            <div
              className="w-20 h-[80px] bg-green-400 rounded-md cursor-pointer flex items-center justify-center hover:bg-red-500 duration-200 parent"
              onClick={handleAddTodo}
            >
              <BiPlus className="text-4xl font-black text-white" />
            </div>
          </div>
          {/* ------TODO LIST------ */}
          <div className="h-30 w-30 flex flex-col py-3">
            {todoList &&
              todoList?.map((todoItem: any) => (
                <List
                  key={todoItem.id}
                  todoItem={todoItem}
                  handleEditTodo={handleEditTodo}
                  handleDeleteTodo={handleDeleteTodo}
                  handleCompleteTodo={handleCompleteTodo}
                />
              ))}
          </div>
        </div>
      </div>

      {/* ------TOASTER------ */}
      <ToastContainer
        position={"top-center"}
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <UpdateTodoModal
        modalShow={modalShow}
        editTodo={editTodo}
        setModalShow={setModalShow}
        setEditTodo={setEditTodo}
        handleUpdateTodo={handleUpdateTodo}
      />
    </>
  );
}

export default App;
