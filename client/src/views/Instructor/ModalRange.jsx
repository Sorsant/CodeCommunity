import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import style from './modalstyle.module.css'
import { useDispatch } from "react-redux"
import { reviewPost } from '../../components/Redux/Actions/User/actionUser'
const BootstrapModal = (userid) => {
    const uid = userid.user
    const dispatch = useDispatch()
    const [modalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState({
        review: 0,
        comment: "",
        reviews_id: uid
    })
    console.log(post)
    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };
    const HandleonChange = (event) => {
        setPost({
            ...post,
            [event.target.name]: event.target.value
        });
    };

    const renderStars = () => {
        const stars = [];
        const cantidad = parseInt(post.review)

        for (let i = 1; i <= cantidad; i++) {
            if (i <= cantidad) {
                stars.push(<span key={i}>⭐</span>);
            } else {
                stars.push(<span key={i}>⭐</span>);
            }
        }
        return stars;
    };
    const handleOnSubmit = () => {
        dispatch(reviewPost(post))
        handleModalClose(); // Cerrar el modal después de guardar
        // window.location.reload();

    };
    return (
        <div>
            <Button variant="primary" onClick={handleModalOpen}>
                Vote
            </Button>

            <Modal show={modalOpen} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>rate your vote to the instructor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="textarea"
                        onChange={HandleonChange}
                        className="form-control"
                        placeholder="Ingrese un valor"
                        name="comment"
                    />
                    <div>{renderStars()}</div>
                    <input className={style.inputss} type="range" autocomplete="off" name="review" min="1" max="5" step="0" onChange={HandleonChange} />
                    <span className={style.spans} id="ratingValue">review: {post.review} </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleOnSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BootstrapModal;
