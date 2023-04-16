import { useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Datetime from "react-datetime";

export default function ModalTodoForm(props) {
  const formRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData.entries());
    jsonData.is_done = jsonData.is_done ? true : false;
    jsonData.target_hour = parseInt(jsonData.target_hour);

    props.handleClose(jsonData);
  };

  return (
    <Modal show={props.show} onHide={() => props.handleClose(null)}>
      <Modal.Header closeButton>
        <Modal.Title>Todo Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form ref={formRef} onSubmit={handleFormSubmit}>
          {props.editTodo ? (
            <input type="hidden" name="id" value={props.editTodo.id} />
          ) : (
            <></>
          )}

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              defaultValue={props.editTodo ? props.editTodo.title : ""}
              placeholder="Title"
            />
            <Form.Text className="text-muted">Put title of your Todo</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Owner</Form.Label>
            <Form.Control
              type="text"
              name="owner"
              defaultValue={props.editTodo ? props.editTodo.owner : ""}
              placeholder="Owner"
            />
            <Form.Text className="text-muted">
              Responsibility of the Todo?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Assigned At</Form.Label>
            <Datetime
              locale="nl"
              inputProps={{ name: "assigned_at", placeholder: "Assigned At" }}
              initialValue={props.editTodo ? props.editTodo.assigned_at : ""}
            />
            <Form.Text className="text-muted">
              When is the tasked assigned?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Target Hour</Form.Label>
            <Form.Control
              type="number"
              name="target_hour"
              defaultValue={props.editTodo ? props.editTodo.target_hour : ""}
              placeholder="Target Hour"
            />
            <Form.Text className="text-muted">
              How many hours will it take?
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              defaultChecked={props.editTodo ? props.editTodo.is_done : false}
              type="checkbox"
              name="is_done"
              label="Is Done?"
            />
          </Form.Group>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.handleClose(null)}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            formRef.current.dispatchEvent(
              new Event("submit", { cancelable: true, bubbles: true })
            );
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
