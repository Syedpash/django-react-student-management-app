import {API_URL} from '../costants';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Input, Label} from 'reactstrap'

const NewStudentForm = (props) => {
    const [data, setData] = useState({
        pk: null,
        name: "",
        email: "",
        document: "",
        phone: null
    })
    useEffect(() => {
        if(props.student) {
          const {pk, name, email, document, phone} = props.student;
          setData((prevState) => {
            return {...prevState, pk, name, email, document, phone }
          })
        }
    }, [])


    const onChange = e => {
        const name = e.target.name;
        setData((prevState) => {
            return {
                ...prevState,
                [name]: e.target.value
            }
        }
        );
    };

    const createStudent = e => {
        e.preventDefault();
        axios.post(API_URL, data)
            .then(() => {
                props.resetState();
                props.toggle();
            });
    };

    const editStudent = e => {
      e.preventDefault();
      axios.put(API_URL + data.pk, data)
        .then(() => {
          props.resetState();
          props.toggle();
        });
    };

    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    };

    return (
      <Form onSubmit={props.student ? editStudent : createStudent}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={onChange}
            value={defaultIfEmpty(data.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="email"
            name="email"
            onChange={onChange}
            value={defaultIfEmpty(data.email)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="document">Document:</Label>
          <Input
            type="text"
            name="document"
            onChange={onChange}
            value={defaultIfEmpty(data.document)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone:</Label>
          <Input
            type="text"
            name="phone"
            onChange={onChange}
            value={defaultIfEmpty(data.phone)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
}


export default NewStudentForm;