import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './MainNavBar.module.css';

const MainNavBar = () => {
    return (
        <div>
            <Navbar className= {classes.navContent} variant={ 'dark' } expand="lg">
                <Container>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                        Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                        Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                        Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    <Link to="/home" className= { classes.navTitle}>
                        Dewy
                    </Link>
                </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
};

export default MainNavBar;
