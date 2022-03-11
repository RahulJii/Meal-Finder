import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const RecipeModal = (props) => {
  const { show, onHide, label, ingredientLines } = props;
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{label}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Ingredients</h4>
        <p>
          {ingredientLines.map((ingredient) => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RecipeModal;
