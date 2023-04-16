import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ModalTodoForm from "./components/modal-todo-form";
import { useState } from "react";
import { addEditTodo, clearTodo, removeTodo } from "../../redux/todoSlice";

export default function TodoPage() {
  const todoState = useSelector((state) => state.todoState);
  const dispatch = useDispatch();
  const [modalFormShow, setModalFormShow] = useState(false);
  const [editTodo, setEditTodo] = useState(null);

  const handleClose = (data) => {
    if (data !== null) {
      dispatch(addEditTodo(data));
    }
    setEditTodo(null);
    setModalFormShow(false);
  };

  return (
    <>
      <ModalTodoForm
        show={modalFormShow}
        handleClose={handleClose}
        editTodo={editTodo}
      />
      <Button variant="primary" onClick={() => setModalFormShow(true)}>
        Add New Todo
      </Button>{" "}
      &nbsp;
      <Button variant="danger" onClick={() => dispatch(clearTodo())}>
        Clear All
      </Button>
      <main>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Done?</th>
              <th>Assigned At</th>
              <th>Hour</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {todoState.todos.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.owner}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={item.is_done}
                      onChange={() => {}}
                    />
                  </td>
                  <td>{item.assigned_at}</td>
                  <td>{item.target_hour}</td>
                  <td>
                    <Button
                      variant="info"
                      className="btn-sm"
                      onClick={() => {
                        setEditTodo(item);
                        setModalFormShow(true);
                      }}
                    >
                      Edit
                    </Button>{" "}
                    &nbsp;
                    <Button
                      onClick={() => {
                        dispatch(removeTodo(item.id));
                      }}
                      variant="danger"
                      className="btn-sm"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <pre>{JSON.stringify(todoState, null, 2)}</pre>
      </main>
    </>
  );
}
