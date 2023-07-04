import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux"
import { editUser, putUserExtras } from '../../../components/Redux/Actions/User/actionUser';
import {
  Instructor,
  notInstructor,

} from "../../../components/Redux/Actions/ActionHome";

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const user = useSelector((state) => state.userdb.user);
  const extras = useSelector((state) => state.home.userExtra);
  const extra = extras.find((users) => users.id === (user && user.id));
  const [instructorChecked, setInstructorChecked] = useState(extra?.postulation === true);
  const [InfoUserExtra, setInfoUserExtra] = useState({
    id: "",
    user_image: extras?.user_image,
    birthday: "" || extras?.birthday,
    language: extras?.language,
    postulation: instructorChecked || extras?.postulation,
    premium: extra?.premium,
    created: extra?.created,
    modified: extra?.modified,
    community: extra?.community,
  })

  const [putUser, setPutUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: user?.email,
  })

  const dispatch = useDispatch();

  const handleOnSubmit = (event) => {
    // event.preventDefault();

    dispatch(putUserExtras(user.id, InfoUserExtra));
    dispatch(editUser(user.id, putUser));
    handleClose(); // Cerrar el modal después de guardar
    try {
      if (instructorChecked) {
        dispatch(Instructor(extra.id));
      } else {
        dispatch(notInstructor(extra.id));
      }

      // Recargar la página para refrescar los datos
      window.location.reload();
    } catch (error) {
      console.error("Error al cambiar la propiedad:", error);
    }
  };

  useEffect(() => {
    localStorage.setItem("loggedInUserId", JSON.stringify(user?.id));
    setInfoUserExtra((InfoUserExtra) => ({
      ...InfoUserExtra,
      id: user?.id,
      email: user?.email
    }));
    setPutUser((putUser) => ({
      ...putUser,
      id: user?.id,
    }));
    setInstructorChecked(extra?.postulation || false);
  }, [user]);

  const handleCheckboxChange = () => {
    setInstructorChecked(!instructorChecked);
  };

  const HandleonChangeExtra = (event) => {
    setInfoUserExtra({
      ...InfoUserExtra,
      [event.target.name]: event.target.value
    });
  };

  const HandleonChange = (event) => {
    setPutUser({
      ...putUser,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Info Profile
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label htmlFor="input1">Name</label>
              <input onChange={HandleonChange} type="text" name="first_name" placeholder="Name" className="form-control" id="input1" />
            </div>
            <div className="form-group">
              <label htmlFor="input2">Lastname</label>
              <input onChange={HandleonChange} type="text" name="last_name" className="form-control" id="input2" />
            </div>

            <div className="form-group">
              <label htmlFor="input2">Birthday</label>
              <input onChange={HandleonChangeExtra} type="date" name="birthday" className="form-control" id="input2" />
            </div>
            {extra && extra.premium ? (
              <div>
                <label htmlFor="instructorCheckbox">Instructor</label>
                <input
                  type="checkbox"
                  name='postulation'
                  id="instructorCheckbox"
                  checked={instructorChecked}
                  onChange={handleCheckboxChange}
                />
              </div>
            )
              :
              <p>to be an instructor you must be premium</p>}
          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleOnSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalForm;
