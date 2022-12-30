import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import "./header.scss"


const Header = () => {
    return (
        <Container fluid className="header">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8}>
                        <Row>
                            <Col md={2}>
                                <img src={process.env.PUBLIC_URL + '/images/udix.png'} alt="udix" />
                            </Col>
                            <Col md={6}>
                                <Nav className="">
                                    <Nav.Link href="#home">home</Nav.Link>
                                    <Nav.Link href="#features">blog</Nav.Link>
                                    <Nav.Link href="#pricing">products</Nav.Link>
                                    <Nav.Link href="#pricing">contacts</Nav.Link>
                                </Nav>
                            </Col>
                            <Col md={4} className="d-flex justify-content-end align-items-center">
                                <span className="sign">sign in</span>
                                <span className="sign">sign up</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    )

}

export default Header;