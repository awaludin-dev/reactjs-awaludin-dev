import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="info" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Awaludin</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#biodata">Biodata</Nav.Link>
                        <Nav.Link href="#skill">Skill</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}