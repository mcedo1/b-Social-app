import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "./Comment";
import api from "../../API/Api";

const MyModal = ({ postId }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    const [commentList, setCommentList] = useState([]);
    const [commentTemplate, setCommentTemplate] = useState({
      postId: '',
      content: ''
    })
    useEffect(() => {
        api("/api/comments/" + postId, {}, "get").then((res) => {
            if (res.status === "ok") {
                setCommentList(res.data);
            }
        });
    }, []);
    const handleSendingComment = () => {
        if (com)
    }
    return (
        <div>
            <Button
                variant="primary"
                onClick={handleModalOpen}
                style={{ margin: "10px 0" }}>
                Comments
            </Button>

            <Modal show={showModal} onHide={handleModalClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Primjer modala</Modal.Title>
                </Modal.Header>
                <Modal.Body
                    style={{ display: "flex", flexDirection: "column" }}>
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
                                value={commentTemplate}
                                onChange={e=>setCommentList(e.target.value)}
                                ></textarea>
                        </div>

                        <Button
                            onClick={handleSendingComment}
                            variant="primary"
                            type="info"
                            style={{ margin: "10px 0" }}>
                            Comment it!
                        </Button>
                    </Form>
                   {commentList.map((coment, index) => <Comment {...coment}/>)}
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
