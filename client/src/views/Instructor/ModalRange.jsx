import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import style from './modalstyle.module.css'
const BootstrapModal = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState({
        rating: "",
    })
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

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
        const cantidad = parseInt(post.rating)

        for (let i = 1; i <= cantidad; i++) {
            if (i <= cantidad) {
                stars.push(<span key={i}>⭐</span>);
            } else {
                stars.push(<span key={i}>⭐</span>);
            }
        }
        return stars;
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
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Ingrese un valor"
                    />
                    <div>{renderStars()}</div>
                    <input className={style.inputss} type="range" autocomplete="off" name="rating" min="1" max="5" step="0.1" onChange={HandleonChange} />
                    <span className={style.spans} id="ratingValue">Rating: {post.rating} </span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleModalClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default BootstrapModal;
