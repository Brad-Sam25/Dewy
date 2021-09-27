import React from "react";
import { useState, useEffect } from 'react';


const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeName = (event) => setName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const user = {
            name,
            email,
            password
        };

        
    } 

    return (
        <div>
        <Form className={classes.login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.labelTitle}>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label className={classes.labelTitle}>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email address" />
          </Form.Group>
  
          <Form.Group controlId="formBasicPassword">
            <Form.Label className={classes.labelTitle}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    )
}

export default Signup




