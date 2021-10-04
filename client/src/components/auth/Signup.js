import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from './SignUp.module.css'
import { useState, useEffect } from 'react';
import { register } from "../../store/action-creators/authorization";
import { REGISTER_FAIL } from "../../store/action-creators/types";
import { useSelector } from "react-redux"


const SignUp = () => {
    const state = useSelector(state => state)
    console.log(state)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    const handleChangeName = (event) => setName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name,
            email,
            password
        };

        register(newUser);
    } 



    // useEffect(() => {
    //   if(error.id === 'REGISTER_FAIL') {
    //     setMsg(error.msg.msg)
    //   }
    //   else {
    //     setMsg(null)
    //   }
    // }, [error, REGISTER_FAIL])

    return (
        <div>
        <Form className={classes.login} onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className={classes.labelTitle}>Name</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email address"
            onChange={handleChangeName}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label className={classes.labelTitle}>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email address"
            onChange={handleChangeEmail}
            />
          </Form.Group>
  
          <Form.Group controlId="password">
            <Form.Label className={classes.labelTitle}>Password</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Password"
            onChange={handleChangePassword}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    )
}

export default SignUp




