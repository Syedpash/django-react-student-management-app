import React, {useState, useEffect} from 'react';

import { Col, Container, Row } from "reactstrap";
import StudentList from "./StudentList";
import NewStudentModal from "./NewStudentModal";
import axios from "axios";
import { API_URL } from "../costants";


const Home = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        resetState();     
       
    }, []);

    const getStudents = () => {
        axios.get(API_URL)
            .then(res => {
                setStudents(res.data)
            });
    };

    const resetState = () => {
        getStudents();
    }

    return (
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col>
              <StudentList
                students={students}
                resetState={resetState}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <NewStudentModal create={true} resetState={resetState} />
            </Col>
          </Row>
        </Container>
      );
}

export default Home;