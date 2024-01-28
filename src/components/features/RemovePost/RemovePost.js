import { useState } from "react";
import { useDispatch } from "react-redux"
import { removePosts } from "../../../redux/postsRedux";
import { Button, Modal } from "react-bootstrap";

const RemovePost = ({ id }) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const handleRemovePost = () => {
        dispatch(removePosts(id));
        handleClose();
    };

    return (
        <div>
            <Button onClick={handleShow} variant="outline-danger" className="px-4">Delete</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
                </Modal.Header>
                <Modal.Body>This operation will completly remove this post from the app.<br></br>
                Are you sure you want to do that ?</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleRemovePost}>
                    Remove
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default RemovePost;