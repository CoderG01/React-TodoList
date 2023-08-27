import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { GrUpdate } from "react-icons/Gr";

const UpdateTodoModal = ({
  modalShow,
  setModalShow,
  editTodo,
  setEditTodo,
  handleUpdateTodo,
}: any) => {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="flex gap-3 items-center">
          <input
            type="text"
            name="todo"
            value={editTodo}
            onChange={(e: any) => setEditTodo(e.target.value)}
            className="rounded-md focus-visible:outline-none bg-gray-300 w-full px-4 text-gray-700 font-normal h-[80px] text-[24px]"
          />

          <div
            className="w-20 h-[80px] bg-red-400 rounded-md cursor-pointer flex items-center justify-center hover:bg-red-500 duration-200 parent"
            onClick={handleUpdateTodo}
          >
            <GrUpdate className="text-2xl text-white font-bold" />
            {/* <span className="text-2xl text-white">Update</span> */}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UpdateTodoModal;
