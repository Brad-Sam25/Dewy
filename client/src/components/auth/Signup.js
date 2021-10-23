import React from "react";
import { Form, Button, Alert } from "react-bootstrap";
import classes from './SignUp.module.css'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { signUp } from "../../utils/api";
// import { bindActionCreators } from 'redux';
// import { authActionCreators } from '../../store/index';
import { register } from '../../store/action-creators/authActions'

const SignUp = () => {
    const error = useSelector(state => state.error)
    const dispatch = useDispatch();

    // const { setRegisterSuccess, setRegisterFail  } = bindActionCreators(authActionCreators, dispatch);

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    // const register = (newUser) => {
    //   const body = JSON.stringify(newUser)

    //   signUp(body)
    //     .then(body => {
    //       console.log(body)
    //     })
    //     .then(res =>{
    //       setRegisterSuccess(res.body)
    //       setMessage('Success')
    //     })
    //     .catch(error => {
    //       console.log(error.response.data)
    //       setRegisterFail()
    //       setMessage('Be sure to fill out all fields')
    //     })
    // }

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

    useEffect(() => {
      if(error.id === 'REGISTER_FAIL') {
        setMessage(error.msg)
      }
      else {
        setMessage(null)
      }
    }, [error.id])

    return (
        <div>
        <Form className={classes.login} onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label className={classes.labelTitle}>Name</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Enter full name"
            as="input"
            onChange={handleChangeName}
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label className={classes.labelTitle}>Email</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email address"
            as="input"
            onChange={handleChangeEmail}
            />
          </Form.Group>
  
          <Form.Group controlId="password">
            <Form.Label className={classes.labelTitle}>Password</Form.Label>
            <Form.Control 
            type="password"
            placeholder="Password"
            as="input"
            onChange={handleChangePassword}
            />
          </Form.Group>
          {message ? <Alert variant="danger">{message}</Alert> : null}
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </div>
    )
}

export default SignUp




