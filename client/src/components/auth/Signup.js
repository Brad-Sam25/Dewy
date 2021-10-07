import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import classes from './SignUp.module.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../utils/api";
import { bindActionCreators } from 'redux';
import { authActionCreators } from '../../store/index';


const SignUp = () => {
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();


    const { setRegisterSuccess, setRegisterFail  } = bindActionCreators(authActionCreators, dispatch);

    

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const register = (newUser) => {
      const body = JSON.stringify(newUser)
      signUp(body)
        .then(res =>{
          setRegisterSuccess(res.data)
          setMessage('Success')
        })
        .catch(error => {
          console.log(error.response.data)
          setRegisterFail()
          setMessage('Failure')
        })
    }

    const handleChangeName = (event) => setName(event.target.value);
    const handleChangeEmail = (event) => setEmail(event.target.value);
    const handleChangePassword = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        register(newUser);
    } 

    useEffect(() => {
      if(error.id === 'REGISTER_FAIL') {
        setMessage(error.msg)
      }
      else {
        setMessage(null)
      }
    }, [error])

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
          {message ? <Alert color="danger">{message}</Alert> : null}
        </Form>
      </div>
    )
}

export default SignUp




