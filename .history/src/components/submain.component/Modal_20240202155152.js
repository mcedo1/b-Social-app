import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./Comment";

const MyModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div>
      <Button
        variant="primary"
        onClick={handleModalOpen}
        style={{ margin: "10px 0" }}
      >
        Comments
      </Button>

      <Modal show={showModal} onHide={handleModalClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Primjer modala</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ display: "flex", flexDirection: "column" }}>
          <Form>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">
                Comment this post!
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                style={{ maxHeight: "150px" }}
              ></textarea>
            </div>

            <Button
              variant="primary"
              type="submit"
              style={{ margin: "10px 0" }}
            >
              Pošalji
            </Button>
          </Form>
          <Comment username={"Milos Sosic"} date={"23-02-2024"} />
          <Comment username={"Milos Sosic"} date={"23-02-2024"} />
          <Comment username={"Milos Sosic"} date={"23-02-2024"} />
          <Comment username={"Milos Sosic"} date={"23-02-2024"} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Zatvori
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyModal;
