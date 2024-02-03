import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./Comment";

const MyModal = ({postId}) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const [commnt, setCommnt] = useState({
    username: 'mica',
    commentId: 3,
    postId: 123456793,
    userId: 9,
    content: "Krajnja promjena",
    timestamp: "2024-01-29T22:59:56.000Z"
  })
  const [commentList, setCommentList] = useState([commnt, commnt, commnt])

  useEffect(()=>{
    api('/api/comments/'+)
  }, [])

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
          <Comment {...commnt} />
          <Comment {...commnt} />
          <Comment {...commnt} />
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
