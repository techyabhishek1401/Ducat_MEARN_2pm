import React,{useState} from 'react'
import {Form,Button,Container,Row,Col} from 'react-bootstrap';

export default function FormComponent() {

    const [name, setName] = useState("");
    const [age,setAge]=useState(0);
    // state={
    //     name:""  
      //.this.setState({name:""})
    // }
    return (
        <Container>
            <Row>
                <Col>
                  <input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Col>
            </Row>
          
  
        </Container>
    )
}
