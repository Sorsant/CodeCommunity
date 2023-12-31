import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import style from './modalstyle.module.css'
import { useDispatch } from "react-redux"
import { reviewPost } from '../../components/Redux/Actions/User/actionUser'
const BootstrapModal = ({ reviews_id }) => {
    const uid = reviews_id
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
    const handleOnSubmit = async () => {
        await dispatch(reviewPost(post)); // Esperar a que se resuelva la promesa de la solicitud
        handleModalClose(); // Cerrar el modal después de guardar
    };

    return (
        <div className={style.containerModal}>
            <Button variant="success" className='fs-4' onClick={handleModalOpen}>
                Vote
            </Button>

            <Modal show={modalOpen} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='fs-2'>Rate your vote to the instructor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="textarea"
                        onChange={HandleonChange}
                        className="form-control fs-4"
                        placeholder="Ingrese un valor"
                        name="comment"
                    />
                    <div>{renderStars()}</div>
                    <input className={style.inputss} type="range" autocomplete="off" name="review" min="1" max="5" step="0" onChange={HandleonChange} />
                    <span className={` fs-4 ${style.spans}`} id="ratingValue">review: {post.review} </span>
                </Modal.Body>
                <Modal.Footer >
                    <Button variant="secondary" className='fs-4' onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" className='fs-4' onClick={handleOnSubmit}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BootstrapModal;
