import React, { Component } from 'react'
import { Nav,Navbar,Container,Button,Form,FormControl } from 'react-bootstrap'

export default class Navbar1 extends Component {
    render() {
        return (
            <div>
            <Navbar bg="dark" variant='dark' expand="lg" >
            <Container>

            <Navbar.Brand href="#">Admin Panal</Navbar.Brand>
            <Navbar.Toggle aria-controls="Admin Panal" />
            <Navbar.Collapse id="Admin Panal">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Alert</Nav.Link>
                     <Nav.Link href="#action3">About</Nav.Link>
                </Nav>
                <ul className="d-flex">
                <li class="nav-item">
                  <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                      <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                </ul>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        )
    }
}
