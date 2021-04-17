import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export default function FormComponent() {
  const [name, setName] = useState("testing");

  // state={
  //   name,age,abc
  // }
  // const (name,age,abc)=this.state;
  const [age, setAge] = useState(0);
  // state={
  //   name:"test"
  // }
  const [state, setState] = useState({});
  const handelChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  return (
    <Container>
      <Row>
        <Col>
          <input placeholder="Name" onChange={(e) => { setName(e.target.value) }} /> <br />
          {name} <br />
          <input placeholder="Age" type="number" min="18" onChange={(e) => { setAge(e.target.value) }} /> <br />
          {age}
        </Col>
      </Row>


    </Container>
  )
}
