import React, {useState} from 'react';
import axios from "axios";
import { API_URL } from "../costants";
import { Modal, ModalHeader, Button, ModalFooter } from "reactstrap";


const ConfirmRemovalModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    };

    const deleteStudent = (pk) => {
        axios.delete(API_URL + pk)
            .then(() => {
                props.resetState();
                toggle();
            });
    };

    return (
        <>
          <Button color="danger" onClick={() => toggle()}>
            Remove
          </Button>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
              Do you really wanna delete the student?
            </ModalHeader>
  
            <ModalFooter>
              <Button type="button" onClick={() => toggle()}>
                Cancel
              </Button>
              <Button
                type="button"
                color="primary"
                onClick={() => deleteStudent(props.pk)}
              >
                Yes
              </Button>
            </ModalFooter>
          </Modal>
        </>
    );
}

export default ConfirmRemovalModal;