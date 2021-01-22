import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './App.css';

function App() {
  const[user, setUser] = useState({
    fName: "",
    lName: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    setUser((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })
  }


  return (
    <div className="App">
    <Container>
      <Form >
            <Form.Row className="justify-content-md-center" >
                <Col sm={12} md={6} >
                    <Form.Control placeholder="First name" name="fName" value={user.fName} onChange={handleChange} />
                </Col>
                <Col sm={12} md={6} className="mt-3 mt-sm-3 mt-md-0">
                    <Form.Control placeholder="Last name" name="lName" value={user.lName} onChange={handleChange} />
                </Col>
            </Form.Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
