import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewStudentForm from "./NewStudentForm";

const NewStudentModal = (props) => {

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const create = props.create;

    var title = "Editing Student";
    var button = <Button onClick={toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Student";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }
    return (
        <>
          {button}
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{title}</ModalHeader>
  
            <ModalBody>
              <NewStudentForm
                resetState={props.resetState}
                toggle={toggle}
                student={props.student}
              />
            </ModalBody>
          </Modal>
        </>
    );
}

export default NewStudentModal;