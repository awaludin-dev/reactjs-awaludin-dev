import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        return (
            <Navbar bg="info" expand="lg" fixed="top">
                <Container>
                    <Link to="/"><Navbar.Brand>Awaludin</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/count"><Nav.Link>Count</Nav.Link></Link>
                        <Link to="/predict"><Nav.Link>Predict Gender</Nav.Link></Link>
                        <Link to="/news-api"><Nav.Link>News Api</Nav.Link></Link>
                        <Link to="/contact"><Nav.Link></Nav.Link></Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}