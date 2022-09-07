import React, { useState } from 'react'
import { Button, Col, Form, Row, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import styles from './styles.module.css';
const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <div className={`mx-auto my-5 p-4 ${styles.container}`}>
            <h3 className='text-center '>Login</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom01">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            required
                            type="Email"
                            placeholder="Email Address"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="validationCustom03">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                        <Form.Control.Feedback type="invalid">
                            Please enter a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Button className='my-2' type="submit">Login</Button>
                <Nav.Link as={NavLink} to="/signup">Create new Account</Nav.Link>
            </Form>
        </div>
    );
}
export default Login;
