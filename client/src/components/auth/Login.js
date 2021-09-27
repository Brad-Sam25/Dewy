import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from './Login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';


const Login = () => {
  return (
    <div>
      <Form className={classes.login}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className={classes.labelTitle}>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email address" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className={classes.labelTitle}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default Login;
